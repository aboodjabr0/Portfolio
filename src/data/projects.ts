export type Project = {
  number: string;
  slug: string;
  name: string;
  type: string;
  metaLabel: string;
  categories?: string[];
  category?: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  contributions: string[];
  image: string;
  github?: string | null;
  live?: string | null;
  featured: boolean;
  highlights?: string[];
  focus?: string[];
  technicalNote?: string;
  group?: "major" | "systems";
  caseStudy?: {
    logo: string;
    subtitle: string;
    primaryImage: string;
    secondaryImage: string;
    description: string;
    overview: string;
    contributionStatement: string;
  };
  caseStudyPath?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "tempo",
    name: "Tempo",
    type: "Production",
    metaLabel: "Gym Management Platform",
    category: "Full Stack / Product",
    categories: ["Production", "Full Stack"],
    shortDescription:
      "A production gym management platform for memberships, training, nutrition, bookings, check-ins, and day-to-day gym operations.",
    description:
      "A production gym management platform for memberships, training, nutrition, bookings, check-ins, and day-to-day gym operations.",
    technologies: ["Flutter", "ASP.NET Core", "PostgreSQL"],
    contributions: ["Backend Architecture", "Backend Development", "UI/UX Design"],
    image: "/images/projects/tempo-cover.webp",
    github: null,
    live: "https://tempo.optech.software",
    featured: true,
    group: "major",
    caseStudy: {
      logo: "/images/projects/tempo/tempo-logo.svg",
      subtitle: "Gym Management Platform",
      primaryImage: "/images/projects/tempo/tempo-mobile-workout.webp",
      secondaryImage: "/images/projects/tempo/tempo-mobile.webp",
      description:
        "A production gym management platform that brings memberships, training, nutrition, bookings, check-ins, and day-to-day gym operations into one connected experience.",
      overview:
        "Tempo is a production platform built to support the day-to-day relationship between gyms and their members. It combines member-facing experiences such as workouts, nutrition, classes, bookings, progress tracking, and check-ins with the systems required to manage those experiences.",
      contributionStatement:
        "Designed backend architecture, implemented backend features, and contributed to the platform's UI/UX design.",
    },
  },
  {
    number: "02",
    slug: "clinora",
    name: "Clinora",
    type: "Full-Stack Product",
    metaLabel: "Web / Backend / SaaS",
    category: "Web / Backend / SaaS",
    categories: ["Full Stack"],
    shortDescription:
      "A bilingual clinic-management platform for patients, appointments, visits, billing, reporting, permissions, and day-to-day clinic operations.",
    description:
      "A bilingual clinic-management platform for patients, appointments, visits, billing, reporting, permissions, and day-to-day clinic operations.",
    technologies: ["React", "TypeScript", "Vite", "ASP.NET Core", "PostgreSQL"],
    contributions: [],
    image: "/images/projects/clinora-dark.png",
    github: "https://github.com/aboodjabr0/clinic-flow",
    live: null,
    featured: false,
    caseStudyPath: "/projects/clinora",
    highlights: ["Bilingual / RTL", "Role-Based Access", "Billing", "Reporting"],
    group: "major",
  },
  {
    number: "03",
    slug: "cavt-interactive-campus-kiosk",
    name: "CAVT Interactive Campus Kiosk",
    type: "Hackathon",
    metaLabel: "Interactive Web",
    category: "Interactive Web",
    categories: [],
    shortDescription:
      "An interactive bilingual campus kiosk where users explore a pixel-art vocational campus, select destinations, and watch a character navigate to buildings using A* pathfinding before entering interactive program-information hubs.",
    description:
      "An interactive bilingual campus kiosk where users explore a pixel-art vocational campus, select destinations, and watch a character navigate to buildings using A* pathfinding before entering interactive program-information hubs.",
    technologies: ["React", "TypeScript", "Vite", "A* Pathfinding"],
    contributions: [],
    image: "/images/projects/CAVT_hackathon.webp",
    github: null,
    live: "https://thriving-cat-177f0d.netlify.app/",
    featured: false,
    highlights: ["A* Pathfinding", "Interactive UI", "Bilingual / RTL"],
    group: "major",
  },
  {
    number: "02",
    slug: "webserv",
    name: "Webserv",
    type: "42 Curriculum",
    metaLabel: "Systems Programming",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A configurable HTTP server built from scratch in C++, with routing, request handling, CGI execution, and custom server configuration.",
    description:
      "A configurable HTTP server built from scratch in C++, implementing request routing, response handling, CGI execution, and server configuration without relying on an existing web-server framework.",
    technologies: ["C++", "HTTP", "CGI", "Networking"],
    contributions: ["Configuration", "Routing", "Request Handlers", "CGI"],
    image: "/images/projects/webserv-cover.jpeg",
    github: "https://github.com/aboodjabr0/webserve",
    live: null,
    featured: true,
    group: "major",
  },
  {
    number: "03",
    slug: "minishell",
    name: "Minishell",
    type: "42 Curriculum",
    metaLabel: "Systems Programming",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A Unix shell built from scratch in C, supporting execution, pipes, redirections, environment expansion, signals, and heredocs.",
    description:
      "A Unix shell built from scratch in C, supporting command execution, pipes, redirections, environment expansion, signals, heredocs, and built-in commands.",
    technologies: ["C", "Unix", "Processes", "Shell"],
    contributions: ["Parsing", "Execution"],
    image: "/images/projects/minishell-cover.jpeg",
    github: "https://github.com/aboodjabr0/minishell",
    live: null,
    featured: true,
    group: "major",
  },
  {
    number: "06",
    slug: "libft",
    name: "Libft",
    type: "42 Curriculum",
    metaLabel: "C Foundations",
    category: "C Foundations",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A custom C library recreating commonly used standard-library utilities and additional data-manipulation helpers, forming a reusable foundation for later 42 projects.",
    description:
      "A custom C library recreating commonly used standard-library utilities and additional data-manipulation helpers, forming a reusable foundation for later 42 projects.",
    technologies: ["C"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["memory", "strings", "linked lists", "reusable library design"],
    group: "systems",
  },
  {
    number: "07",
    slug: "pipex",
    name: "Pipex",
    type: "42 Curriculum",
    metaLabel: "Unix / Processes",
    category: "Unix / Processes",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A Unix process-management project reproducing shell-style piping between commands using processes, pipes, redirections, and program execution.",
    description:
      "A Unix process-management project reproducing shell-style piping between commands using processes, pipes, redirections, and program execution.",
    technologies: ["C", "Unix"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["fork", "execve", "pipe", "file descriptors", "redirections"],
    group: "systems",
  },
  {
    number: "08",
    slug: "born2beroot",
    name: "Born2beroot",
    type: "42 Curriculum",
    metaLabel: "Linux / System Administration",
    category: "Linux / System Administration",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A Linux system-administration project focused on configuring and securing a virtual machine under strict operational and security requirements.",
    description:
      "A Linux system-administration project focused on configuring and securing a virtual machine under strict operational and security requirements.",
    technologies: ["Linux", "Virtualization"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["users and groups", "permissions", "SSH", "firewall", "password policies", "monitoring"],
    group: "systems",
  },
  {
    number: "09",
    slug: "get-next-line",
    name: "get_next_line",
    type: "42 Curriculum",
    metaLabel: "C / I/O",
    category: "C / I/O",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A buffered line-reading utility in C that reads from file descriptors incrementally while preserving unread data between calls.",
    description:
      "A buffered line-reading utility in C that reads from file descriptors incrementally while preserving unread data between calls.",
    technologies: ["C"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["buffers", "file descriptors", "static state", "memory management"],
    group: "systems",
  },
  {
    number: "10",
    slug: "push-swap",
    name: "push_swap",
    type: "42 Curriculum",
    metaLabel: "Algorithms",
    category: "Algorithms",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A constrained sorting project that sorts integer stacks using a limited set of operations while minimizing the total number of moves.",
    description:
      "A constrained sorting project that sorts integer stacks using a limited set of operations while minimizing the total number of moves.",
    technologies: ["C", "Algorithms"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    technicalNote: "Implemented a radix-sort-based strategy for efficient operation counts.",
    group: "systems",
  },
  {
    number: "11",
    slug: "ft-printf",
    name: "ft_printf",
    type: "42 Curriculum",
    metaLabel: "C Foundations",
    category: "C Foundations",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A custom implementation of formatted output inspired by printf, handling multiple conversion types and variable arguments.",
    description:
      "A custom implementation of formatted output inspired by printf, handling multiple conversion types and variable arguments.",
    technologies: ["C"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["variadic functions", "formatting", "conversion logic"],
    group: "systems",
  },
  {
    number: "12",
    slug: "so-long",
    name: "so_long",
    type: "42 Curriculum",
    metaLabel: "Graphics / Game Development",
    category: "Graphics / Game Development",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A small 2D game built in C using MiniLibX, with map validation, player movement, collectibles, and event-driven rendering.",
    description:
      "A small 2D game built in C using MiniLibX, with map validation, player movement, collectibles, and event-driven rendering.",
    technologies: ["C", "MiniLibX"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["event handling", "map parsing", "rendering", "game state"],
    group: "systems",
  },
  {
    number: "13",
    slug: "philosophers",
    name: "Philosophers",
    type: "42 Curriculum",
    metaLabel: "Concurrency",
    category: "Concurrency",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A concurrency simulation of the dining philosophers problem using threads, mutexes, shared-state synchronization, and timing-sensitive death detection.",
    description:
      "A concurrency simulation of the dining philosophers problem using threads, mutexes, shared-state synchronization, and timing-sensitive death detection.",
    technologies: ["C", "POSIX Threads"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["threads", "mutexes", "synchronization", "race conditions", "timing"],
    group: "systems",
  },
  {
    number: "14",
    slug: "inception",
    name: "Inception",
    type: "42 Curriculum",
    metaLabel: "Containers / Infrastructure",
    category: "Containers / Infrastructure",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A containerized infrastructure project that builds and connects isolated application services using Docker and Docker Compose.",
    description:
      "A containerized infrastructure project that builds and connects isolated application services using Docker and Docker Compose.",
    technologies: ["Docker", "Docker Compose", "Linux"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["NGINX", "WordPress / PHP-FPM", "MariaDB", "Docker networking", "persistent volumes"],
    group: "systems",
  },
  {
    number: "15",
    slug: "netpractice",
    name: "NetPractice",
    type: "42 Curriculum",
    metaLabel: "Networking",
    category: "Networking",
    categories: ["Systems", "42 Curriculum"],
    shortDescription:
      "A networking exercise focused on IPv4 addressing, subnetting, routing, gateways, and diagnosing network configurations.",
    description:
      "A networking exercise focused on IPv4 addressing, subnetting, routing, gateways, and diagnosing network configurations.",
    technologies: ["TCP/IP", "IPv4"],
    contributions: [],
    image: "",
    github: null,
    live: null,
    featured: false,
    focus: ["subnet masks", "routing", "address ranges", "gateways"],
    group: "systems",
  },
];
