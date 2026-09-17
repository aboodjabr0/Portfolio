"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const velocityShader = /* glsl */ `
  varying vec2 vUv;

  uniform sampler2D uVelocity;
  uniform vec2 uPointer;
  uniform vec2 uPreviousPointer;
  uniform vec2 uPointerVelocity;
  uniform float uSpeed;

  float distanceToSegment(vec2 point, vec2 start, vec2 end) {
    vec2 direction = end - start;
    float lengthSquared = max(dot(direction, direction), 0.000001);
    float projection = clamp(dot(point - start, direction) / lengthSquared, 0.0, 1.0);
    return distance(point, start + direction * projection);
  }

  void main() {
    vec2 velocity = texture2D(uVelocity, vUv).xy * 0.978;
    float speed = clamp(uSpeed, 0.0, 0.12);
    float radius = mix(0.042, 0.13, clamp(speed * 12.0, 0.0, 1.0));
    float distanceFromTrail = distanceToSegment(vUv, uPreviousPointer, uPointer);
    float trail = exp(-pow(distanceFromTrail / radius, 2.0));

    vec2 sideways = vec2(-uPointerVelocity.y, uPointerVelocity.x);
    vec2 impulse = uPointerVelocity * (0.4 + speed * 5.5) + sideways * (0.1 + speed * 0.8);
    velocity += impulse * trail;

    gl_FragColor = vec4(clamp(velocity, vec2(-0.18), vec2(0.18)), 0.0, 1.0);
  }
`;

const dyeShader = /* glsl */ `
  varying vec2 vUv;

  uniform sampler2D uDye;
  uniform sampler2D uVelocity;
  uniform vec2 uPointer;
  uniform vec2 uPreviousPointer;
  uniform vec2 uPointerVelocity;
  uniform float uSpeed;
  uniform float uTime;

  float distanceToSegment(vec2 point, vec2 start, vec2 end) {
    vec2 direction = end - start;
    float lengthSquared = max(dot(direction, direction), 0.000001);
    float projection = clamp(dot(point - start, direction) / lengthSquared, 0.0, 1.0);
    return distance(point, start + direction * projection);
  }

  void main() {
    vec2 flow = texture2D(uVelocity, vUv).xy;
    vec2 advectedUv = clamp(vUv - flow * 0.52, 0.001, 0.999);
    vec4 dye = texture2D(uDye, advectedUv);
    dye.rgb *= 0.987;
    dye.a *= 0.992;

    float speed = clamp(uSpeed, 0.0, 0.12);
    float radius = mix(0.038, 0.12, clamp(speed * 14.0, 0.0, 1.0));
    float distanceFromTrail = distanceToSegment(vUv, uPreviousPointer, uPointer);
    float ribbon = exp(-pow(distanceFromTrail / radius, 2.0));
    float core = exp(-distance(vUv, uPointer) / (radius * 0.72));
    float plume = exp(-distance(vUv, uPointer) / (radius * 1.8));
    float amount = (0.024 + speed * 1.15) * (0.55 * ribbon + 0.3 * core + 0.15 * plume);

    vec3 deepBlue = vec3(0.018, 0.12, 0.30);
    vec3 electricBlue = vec3(0.055, 0.38, 0.88);
    vec3 cyanBlue = vec3(0.30, 0.72, 1.0);
    vec3 color = mix(deepBlue, electricBlue, clamp(speed * 22.0, 0.0, 1.0));
    color = mix(color, cyanBlue, clamp(speed * 12.0 - 0.35, 0.0, 0.8));

    // A very restrained blue-violet shift keeps the ribbon organic without cycling hues.
    float violet = 0.035 * (0.5 + 0.5 * sin(uTime * 0.35 + vUv.x * 4.0));
    color += vec3(violet * 0.35, violet * 0.22, violet);

    dye.rgb += color * amount;
    dye.a = clamp(dye.a + amount * 0.83, 0.0, 0.9);
    gl_FragColor = dye;
  }
`;

const displayShader = /* glsl */ `
  varying vec2 vUv;

  uniform sampler2D uDye;
  uniform vec2 uTexelSize;
  uniform float uOpacity;

  void main() {
    vec2 x = uTexelSize;
    vec4 dye = texture2D(uDye, vUv) * 0.28;
    dye += texture2D(uDye, vUv + vec2(x.x, 0.0)) * 0.12;
    dye += texture2D(uDye, vUv - vec2(x.x, 0.0)) * 0.12;
    dye += texture2D(uDye, vUv + vec2(0.0, x.y)) * 0.12;
    dye += texture2D(uDye, vUv - vec2(0.0, x.y)) * 0.12;
    dye += texture2D(uDye, vUv + x) * 0.06;
    dye += texture2D(uDye, vUv - x) * 0.06;
    dye += texture2D(uDye, vUv + vec2(x.x, -x.y)) * 0.06;
    dye += texture2D(uDye, vUv + vec2(-x.x, x.y)) * 0.06;

    // A second, wider sample creates a soft light spill around the fluid.
    vec2 wide = x * 12.0;
    vec4 halo = texture2D(uDye, vUv + vec2(wide.x, 0.0)) * 0.08;
    halo += texture2D(uDye, vUv - vec2(wide.x, 0.0)) * 0.08;
    halo += texture2D(uDye, vUv + vec2(0.0, wide.y)) * 0.08;
    halo += texture2D(uDye, vUv - vec2(0.0, wide.y)) * 0.08;
    dye += halo;

    // The simulation stores color premultiplied by trail intensity. Recover the
    // hue before applying the final, deliberately low alpha over the page.
    vec3 color = clamp(dye.rgb / max(dye.a, 0.0001), 0.0, 1.4);
    float alpha = clamp(dye.a * uOpacity, 0.0, 0.5);
    gl_FragColor = vec4(color, alpha);
  }
`;

function createRenderTarget(width: number, height: number) {
  return new THREE.WebGLRenderTarget(width, height, {
    depthBuffer: false,
    stencilBuffer: false,
    format: THREE.RGBAFormat,
    type: THREE.HalfFloatType,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping,
  });
}

export function FluidCursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAvailability = () => {
      const desktopPointer = pointerQuery.matches || navigator.maxTouchPoints === 0;
      setEnabled(desktopPointer && !reducedMotionQuery.matches && window.innerWidth >= 768);
    };

    updateAvailability();
    pointerQuery.addEventListener("change", updateAvailability);
    reducedMotionQuery.addEventListener("change", updateAvailability);
    window.addEventListener("resize", updateAvailability, { passive: true });

    return () => {
      pointerQuery.removeEventListener("change", updateAvailability);
      reducedMotionQuery.removeEventListener("change", updateAvailability);
      window.removeEventListener("resize", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!enabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !canvasRef.current) return;

    const canvas = canvasRef.current;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
    } catch {
      setEnabled(false);
      return;
    }

    if (!renderer.capabilities.isWebGL2) {
      renderer.dispose();
      setEnabled(false);
      return;
    }

    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const velocityMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uVelocity: { value: null },
        uPointer: { value: new THREE.Vector2(-10, -10) },
        uPreviousPointer: { value: new THREE.Vector2(-10, -10) },
        uPointerVelocity: { value: new THREE.Vector2() },
        uSpeed: { value: 0 },
      },
      vertexShader,
      fragmentShader: velocityShader,
      depthTest: false,
      depthWrite: false,
    });

    const dyeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uDye: { value: null },
        uVelocity: { value: null },
        uPointer: { value: new THREE.Vector2(-10, -10) },
        uPreviousPointer: { value: new THREE.Vector2(-10, -10) },
        uPointerVelocity: { value: new THREE.Vector2() },
        uSpeed: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader: dyeShader,
      depthTest: false,
      depthWrite: false,
    });

    const displayMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uDye: { value: null },
        uTexelSize: { value: new THREE.Vector2(1, 1) },
        uOpacity: { value: 1.25 },
      },
      vertexShader,
      fragmentShader: displayShader,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, velocityMaterial);
    scene.add(mesh);

    let velocityRead: THREE.WebGLRenderTarget;
    let velocityWrite: THREE.WebGLRenderTarget;
    let dyeRead: THREE.WebGLRenderTarget;
    let dyeWrite: THREE.WebGLRenderTarget;
    let simulationWidth = 1;
    let simulationHeight = 1;

    const resize = () => {
      const width = Math.max(window.innerWidth, 1);
      const height = Math.max(window.innerHeight, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const simulationScale = width > 2200 ? 0.34 : width > 1500 ? 0.42 : 0.5;

      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);

      const drawingBuffer = renderer.getDrawingBufferSize(new THREE.Vector2());
      simulationWidth = Math.max(320, Math.ceil(drawingBuffer.x * simulationScale));
      simulationHeight = Math.max(240, Math.ceil(drawingBuffer.y * simulationScale));

      velocityRead?.dispose();
      velocityWrite?.dispose();
      dyeRead?.dispose();
      dyeWrite?.dispose();
      velocityRead = createRenderTarget(simulationWidth, simulationHeight);
      velocityWrite = createRenderTarget(simulationWidth, simulationHeight);
      dyeRead = createRenderTarget(simulationWidth, simulationHeight);
      dyeWrite = createRenderTarget(simulationWidth, simulationHeight);
      displayMaterial.uniforms.uTexelSize.value.set(1 / simulationWidth, 1 / simulationHeight);

      [velocityRead, velocityWrite, dyeRead, dyeWrite].forEach((target) => {
        renderer.setRenderTarget(target);
        renderer.clear(true, true, true);
      });
      renderer.setRenderTarget(null);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const pointer = new THREE.Vector2(-10, -10);
    const previousPointer = new THREE.Vector2(-10, -10);
    const pointerVelocity = new THREE.Vector2();
    let lastClientX = 0;
    let lastClientY = 0;
    let hasPointer = false;
    let speed = 0;
    let energy = 0;
    let animationFrame = 0;
    let running = false;
    let lastTime = performance.now();

    const start = () => {
      if (running || document.visibilityState !== "visible") return;
      running = true;
      lastTime = performance.now();
      animationFrame = requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const width = Math.max(window.innerWidth, 1);
      const height = Math.max(window.innerHeight, 1);
      const nextX = event.clientX / width;
      const nextY = 1 - event.clientY / height;

      const isFirstPointer = !hasPointer;
      if (isFirstPointer) {
        pointer.set(nextX, nextY);
        previousPointer.copy(pointer);
      } else {
        previousPointer.copy(pointer);
        pointer.set(nextX, nextY);
      }

      if (isFirstPointer) {
        lastClientX = event.clientX;
        lastClientY = event.clientY;
        pointerVelocity.set(0, 0);
        speed = 0;
      } else {
        const dx = (event.clientX - lastClientX) / width;
        const dy = -(event.clientY - lastClientY) / height;
        pointerVelocity.set(dx, dy);
        const velocityLength = pointerVelocity.length();
        if (velocityLength > 0.12) pointerVelocity.multiplyScalar(0.12 / velocityLength);
        speed = Math.min(pointerVelocity.length(), 0.12);
        lastClientX = event.clientX;
        lastClientY = event.clientY;
      }
      hasPointer = true;
      energy = 1;
      start();
    };

    const handleBlur = () => {
      hasPointer = false;
      speed = 0;
      pointerVelocity.set(0, 0);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        running = false;
        cancelAnimationFrame(animationFrame);
      } else if (energy > 0.01) {
        start();
      }
    };

    const render = (now: number) => {
      if (!running || document.visibilityState !== "visible") return;

      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      energy *= Math.exp(-delta * 1.55);
      speed *= Math.exp(-delta * 7.0);
      pointerVelocity.multiplyScalar(Math.exp(-delta * 7.0));

      velocityMaterial.uniforms.uVelocity.value = velocityRead.texture;
      velocityMaterial.uniforms.uPointer.value.copy(pointer);
      velocityMaterial.uniforms.uPreviousPointer.value.copy(previousPointer);
      velocityMaterial.uniforms.uPointerVelocity.value.copy(pointerVelocity);
      velocityMaterial.uniforms.uSpeed.value = speed;
      mesh.material = velocityMaterial;
      renderer.setRenderTarget(velocityWrite);
      renderer.clear(true, true, true);
      renderer.render(scene, camera);
      [velocityRead, velocityWrite] = [velocityWrite, velocityRead];

      dyeMaterial.uniforms.uDye.value = dyeRead.texture;
      dyeMaterial.uniforms.uVelocity.value = velocityRead.texture;
      dyeMaterial.uniforms.uPointer.value.copy(pointer);
      dyeMaterial.uniforms.uPreviousPointer.value.copy(previousPointer);
      dyeMaterial.uniforms.uPointerVelocity.value.copy(pointerVelocity);
      dyeMaterial.uniforms.uSpeed.value = speed;
      dyeMaterial.uniforms.uTime.value = now / 1000;
      mesh.material = dyeMaterial;
      renderer.setRenderTarget(dyeWrite);
      renderer.clear(true, true, true);
      renderer.render(scene, camera);
      [dyeRead, dyeWrite] = [dyeWrite, dyeRead];

      displayMaterial.uniforms.uDye.value = dyeRead.texture;
      mesh.material = displayMaterial;
      renderer.setRenderTarget(null);
      renderer.clear(true, true, true);
      renderer.render(scene, camera);

      if (energy < 0.006 && speed < 0.0004) {
        running = false;
        return;
      }

      animationFrame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      velocityRead?.dispose();
      velocityWrite?.dispose();
      dyeRead?.dispose();
      dyeWrite?.dispose();
      geometry.dispose();
      velocityMaterial.dispose();
      dyeMaterial.dispose();
      displayMaterial.dispose();
      renderer.dispose();
    };
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} aria-hidden="true" className="fluid-cursor-background" />;
}
