"use client";

import { ArrowDown, ArrowRight, Brackets, Code2, FileText, GitBranch, Play, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const parsingConcepts = ["Tokenization", "Syntax Validation", "AST", "Expansion"];
const executionConcepts = ["fork", "execve", "pipe", "dup2", "redirections"];

export function MinishellContributions() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contributions" aria-labelledby="minishell-contributions-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">03 / CONTRIBUTIONS</p>
        <h2 id="minishell-contributions-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          What I Worked On
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          Abdullah&apos;s work focused on the two stages that connect shell syntax with actual Unix command execution.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[7px] border border-white/[0.1] bg-[#0c141b] p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-[#0f1921] sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] tracking-[0.16em] text-[#5b91c3]">01</span>
              <h3 className="mt-3 text-[20px] font-medium tracking-[-0.04em] text-[#e1eaf1]">Parsing</h3>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-[5px] border border-white/[0.1] bg-white/[0.035] text-[#8295a7]"><Brackets className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" /></span>
          </div>
          <p className="mt-5 text-[12px] leading-[1.7] text-[#8f9eac]">Worked on transforming raw shell input into a structured representation that could be validated, expanded, and passed to the execution layer.</p>
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Parsing concepts">
            {parsingConcepts.map((concept) => <li key={concept} className="rounded-[3px] border border-accent/20 bg-accent/[0.05] px-2 py-1 text-[9px] text-[#9fc9f5]">{concept}</li>)}
          </ul>
          <ParsingVisual />
        </motion.article>

        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.42, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[7px] border border-white/[0.1] bg-[#0c141b] p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-[#0f1921] sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] tracking-[0.16em] text-[#5b91c3]">02</span>
              <h3 className="mt-3 text-[20px] font-medium tracking-[-0.04em] text-[#e1eaf1]">Execution</h3>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-[5px] border border-white/[0.1] bg-white/[0.035] text-[#8295a7]"><Play className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" /></span>
          </div>
          <p className="mt-5 text-[12px] leading-[1.7] text-[#8f9eac]">Worked on executing parsed commands using Unix process creation, program execution, pipes, redirections, and file-descriptor management.</p>
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Execution concepts">
            {executionConcepts.map((concept) => <li key={concept} className="rounded-[3px] border border-accent/20 bg-accent/[0.05] px-2 py-1 font-mono text-[9px] text-[#9fc9f5]">{concept}</li>)}
          </ul>
          <ExecutionVisual />
        </motion.article>
      </div>
    </section>
  );
}

function ParsingVisual() {
  return (
    <div className="mt-6 rounded-[6px] border border-white/[0.08] bg-[#080f15] p-4" aria-label="Static parsing illustration">
      <p className="font-mono text-[9px] tracking-[0.14em] text-[#627282]">CONCEPTUAL PARSING</p>
      <div className="mt-4 space-y-3 text-[10px] leading-[1.6]">
        <div>
          <span className="text-[#6c8297]">Input</span>
          <code className="mt-1 block break-words rounded-[4px] border border-white/[0.08] bg-white/[0.025] p-2 font-mono text-[#c4d2df]">echo &quot;$USER&quot; | grep abdullah &gt; output.txt</code>
        </div>
        <div className="flex items-center gap-2 text-[#5b91c3]" aria-hidden="true"><ArrowDown className="h-3 w-3" strokeWidth={1.5} /><span className="font-mono text-[9px]">TOKENS</span></div>
        <div>
          <span className="text-[#6c8297]">Tokens</span>
          <code className="mt-1 block break-words rounded-[4px] border border-white/[0.08] bg-white/[0.025] p-2 font-mono leading-[1.8] text-[#9fc9f5]">echo · &quot;$USER&quot; · | · grep · abdullah · &gt; · output.txt</code>
        </div>
        <div className="flex items-center gap-2 text-[#5b91c3]" aria-hidden="true"><ArrowDown className="h-3 w-3" strokeWidth={1.5} /><span className="font-mono text-[9px]">STRUCTURE</span></div>
        <div className="flex items-center gap-2 text-[#c4d2df]"><Workflow className="h-3.5 w-3.5 text-[#5b91c3]" strokeWidth={1.5} aria-hidden="true" />Structured Command</div>
      </div>
    </div>
  );
}

function ExecutionVisual() {
  return (
    <div className="mt-6 rounded-[6px] border border-white/[0.08] bg-[#080f15] p-4" aria-label="Static Unix process pipeline illustration">
      <p className="font-mono text-[9px] tracking-[0.14em] text-[#627282]">PROCESS PIPELINE</p>
      <div className="mt-4 space-y-2 font-mono text-[10px] leading-[1.6] text-[#c4d2df]">
        <div className="text-[#6c8297]">Parent Shell</div>
        <div className="flex items-center gap-2"><span className="text-[#5b91c3]">├──</span><span className="text-[#8f9eac]">fork →</span><span>ls -l</span></div>
        <div className="ml-5 flex items-center gap-2 text-[#5b91c3]"><span>│</span><ArrowRight className="h-3 w-3" strokeWidth={1.5} /><span>pipe</span></div>
        <div className="flex items-center gap-2"><span className="text-[#5b91c3]">├──</span><span className="text-[#8f9eac]">fork →</span><span>grep .c</span></div>
        <div className="ml-5 flex items-center gap-2 text-[#5b91c3]"><span>│</span><ArrowRight className="h-3 w-3" strokeWidth={1.5} /><span>pipe</span></div>
        <div className="flex items-center gap-2"><span className="text-[#5b91c3]">└──</span><span className="text-[#8f9eac]">fork →</span><span>wc -l</span></div>
      </div>
    </div>
  );
}
