import { Project, JourneyStep, EcosystemGroup, Person, Community } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "tugasku-pro",
    name: "TugasKu Pro",
    category: "Productivity",
    url: "https://tugas-ku4.vercel.app/",
    description: "Premium enterprise-grade task, project, and team workflow management workspace designed with stunning visual design and fluid interactive flows.",
    problem: "Traditional task managers are either too cluttered or lack visual feedback, making workflow organization unispiring and rigid for high-performing builders.",
    exploration: "Explored rich drag-and-drop state boards, custom workspaces, nested checklists, and automatic velocity tracking using local context state.",
    outcome: "Built a sublime, fully independent workflow station that has become a core workspace for elite Indonesian engineering teams.",
    ecosystem: ["Next.js", "React", "Tailwind CSS", "Zustand", "Framer Motion"]
  },
  {
    id: "tugasku-lite",
    name: "TugasKu Lite",
    category: "Productivity",
    url: "https://tugasku3-lite.netlify.app/",
    description: "Ultra-fast, lightweight version of TugasKu, optimized for rapid instant task inputs and absolute simplicity.",
    problem: "Most quick-capture task tools load slowly on low-network settings or when inside mobile terminals.",
    exploration: "Optimized for extreme low runtime weight, high-speed interaction, and local network tolerance by caching states in low-footprint local structures.",
    outcome: "Developed a minimalist, instant-load todo companion that fits perfectly in any browser frame or limited connection environment.",
    ecosystem: ["React", "Tailwind CSS", "Local Storage", "Vite"]
  },
  {
    id: "hd-upscale",
    name: "HD Upscale",
    category: "AI Tools",
    url: "https://hd-upscale-nine.vercel.app/",
    description: "AI-powered image resolution enhancer that restores minute visual details and eliminates compression noise.",
    problem: "Standard scaling tools simply stretch pixel grids, leaving images blurry, artifacts-laden, and unsuited for showcase portfolios.",
    exploration: "Implemented advanced neural-network-driven image repair pipelines to synthetically calculate high-frequency details instead of just upscaling.",
    outcome: "Gives designers and developers a simple interface to make low-resolution graphics suitable for premium displays.",
    ecosystem: ["Gemini Vision API", "Cloud Run", "Canvas API", "Tailwind"]
  },
  {
    id: "screenshot-web",
    name: "Screenshot Web",
    category: "Utilities",
    url: "https://screenshot-web-omega.vercel.app/",
    description: "High-fidelity rendering tool that captures full-length screenshots of scrollable websites instantly.",
    problem: "Existing web capturing tools break custom fonts, CSS animations, and layout layouts, resulting in broken mockups.",
    exploration: "Designed a server-less proxy structure utilizing Chromium instances to correctly play animations and take full-page viewport screenshots.",
    outcome: "Created a gorgeous design mockup companion for rapid developer-to-designer visual sign-offs.",
    ecosystem: ["Puppeteer", "Express", "Node.js", "React", "Vite"]
  },
  {
    id: "indosawit-news",
    name: "Indosawit.News v2",
    category: "Productivity",
    url: "https://nexssuspage.vercel.app",
    description: "Agricultural monitoring and news platform customized for oil palm farmers in Indonesia.",
    problem: "Palm farmers lack real-time access to accurate market price movements, weather patterns, and plant pathology advice.",
    exploration: "Aggregated scattered national farm feeds and built a high-contrast theme highly legible on outdoor mobile screens.",
    outcome: "Empowered community agricultural networks with data-driven decision tools, closing the knowledge gap.",
    ecosystem: ["React", "Tailwind", "REST APIs", "Vectary 3D"]
  },
  {
    id: "cek-kartu",
    name: "Cek Kartu",
    category: "Utilities",
    url: "https://cek-provider-six.vercel.app/",
    description: "Intelligent cellular telecommunication operator and card validation engine for Indonesian numbers.",
    problem: "Invoicing and payment systems fail when cellular operators are misidentified, leading to failed transactions.",
    exploration: "Built high-speed regular expression matching over prefix datasets of cellular operators to auto-detect providers.",
    outcome: "Greatly reduced checkout errors and card mismatch drops for multiple local transactional backends.",
    ecosystem: ["React", "Tailwind CSS", "RegEx Engine", "Vite"]
  },
  {
    id: "image-to-prompt",
    name: "Image To Prompt",
    category: "AI Tools",
    url: "https://image-to-promt-livid.vercel.app/",
    description: "Reverse image visual descriptions system that transforms pictures into beautifully structured design prompts.",
    problem: "Users see inspiring visual designs but struggle to articulate the exact keywords needed to reproduce similar images with generative AI.",
    exploration: "Built vision-language pipelines analyzing colors, textures, moods, and architectural structures to generate perfect textual templates.",
    outcome: "Helps generative designers unlock the precise prompt language behind top-tier visual artwork.",
    ecosystem: ["Gemini 2.5 Vision", "React", "Tailwind CSS", "Node.js"]
  },
  {
    id: "analisis-tanaman",
    name: "Analisis Tanaman",
    category: "AI Tools",
    url: "https://analyze-tanaman.vercel.app/welcome",
    description: "Interactive visual agricultural diagnostic application parsing crop health from active camera inputs.",
    problem: "Diagnosing crop pests or leaf rot requires professional phytopathologists, causing delay in farm-level actions.",
    exploration: "Crafted high-performance smartphone camera ingestion connected directly to a fine-tuned visual diagnosis agent on the server.",
    outcome: "Provides instant localized farm diagnosis with high actionable advice for agricultural disease management.",
    ecosystem: ["React", "Tailwind CSS", "Gemini Multi-modal", "Serverless"]
  },
  {
    id: "repo-flow",
    name: "Repo Flow",
    category: "Utilities",
    url: "https://auto-reporistory-githb.vercel.app/",
    description: "Automated GitHub repository orchestrator which simplifies initial workspace repository creation and commit pipelines.",
    problem: "Setting up boilerplate structures, initial workflows, and CI files across multiple experiments wasting hours of manual work.",
    exploration: "Integrated with GitHub REST API endpoints to build intuitive wizard steps for initializing, committing, and linking repositories.",
    outcome: "Boosts developer experimentation velocity tenfold by removing boilerplate repository housekeeping tasks.",
    ecosystem: ["GitHub API", "React", "OAuth 2.0", "Tailwind CSS"]
  },
  {
    id: "quickfake",
    name: "QuickFake",
    category: "Archive Experiments",
    url: "#",
    description: "Mock API and structural fake database generator built for high-speed client prototyping.",
    problem: "Waiting for database and backend deployment slows down gorgeous front-end prototyping.",
    exploration: "Mapped key schemas into memory to simulate complete RESTful latency and transactions inside the local frame.",
    outcome: "Assists prototype test suites in building without physical infrastructure requirements.",
    ecosystem: ["Faker.js", "ZustandKey", "TypeScript"]
  },
  {
    id: "soundify",
    name: "Soundify",
    category: "Archive Experiments",
    url: "#",
    description: "Audio-visual sensory browser experiment turning mathematical math into spatial waves.",
    problem: "Traditional music software is highly specialized and intimidating for casual acoustic explorers.",
    exploration: "Leveraged Web Audio API oscillators and sine transitions with beautiful floating interactive canvases.",
    outcome: "Offered a fun, meditative sound sandbox right inside the browser viewport.",
    ecosystem: ["Web Audio API", "HTML5 Canvas", "Tailwind CSS"]
  },
  {
    id: "web-anime",
    name: "Web Anime",
    category: "Archive Experiments",
    url: "#",
    description: "Ultra-responsive CSS-driven CSS animation catalogue celebrating beloved pop-culture symbols.",
    problem: "Standard web interfaces are visually boxy; animations are often choppy and lack dynamic timing.",
    exploration: "Explored GPU-accelerated coordinate transformations to create deep motion flow loops.",
    outcome: "Showcase library demonstrating high performance, lightweight visual presentation.",
    ecosystem: ["CSS Transforms", "React", "Framer Motion"]
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "Curiosity",
    title: "The Genesis of Curiosity",
    subtitle: "Asking 'Why' and 'How'",
    description: "The journey began not by writing code, but by questioning how local systems interact, breaking open custom configurations, and wondering how beautiful software is built.",
    techKeywords: ["Web Protocols", "System Inspection", "File Exploration", "UI Dissection"]
  },
  {
    phase: "Learning",
    title: "Foundations & Structural Systems",
    subtitle: "Cracking the Script",
    description: "Dived headfirst into programming logic. Mastered the core structures of JavaScript, Node.js, and browser layout systems. Learned how bits and components are rendered efficiently.",
    techKeywords: ["JavaScript", "Node.js", "CSS Box Model", "Async Pipelines"]
  },
  {
    phase: "Exploration",
    title: "The AI Revolution",
    subtitle: "New Cognitive Dimensions",
    description: "Evolved workflows by integrating cognitive AI agents. Replaced manual boilerplate generation with high-level architectural co-piloting. Learned to treat AI not as a cheat sheet, but as an expansion of cognitive agency.",
    techKeywords: ["LLM Orchestration", "Prompt Engineering", "V0 & Lovable", "Google AI Studio"]
  },
  {
    phase: "Experimentation",
    title: "Building Micro-Utilities",
    subtitle: "High-Speed Iterative Loops",
    description: "Built dozens of functional micro-tools. Tested layouts, network responses, and specialized APIs. Created screenshot renderers, operator analytical utilities, and crop diagnostic pipelines.",
    techKeywords: ["Serverless Hooks", "Chromium Puppeteer", "Regular Expression Engines", "Vision Language Models"]
  },
  {
    phase: "Building",
    title: "Independent Product Builder",
    subtitle: "Delivering Finished Products",
    description: "Currently shipping polished, consumer-facing digital ecosystems. Combining rapid AI collaboration, durable servers, and luxurious design frameworks to create stunning modern experiences.",
    techKeywords: ["Full-Stack Express", "Vite Bundles", "Vector Visualizers", "Cloud Ingress Routing"]
  }
];

export const ECOSYSTEM: EcosystemGroup[] = [
  {
    category: "AI Tools",
    items: [
      { name: "ChatGPT", description: "General problem solving & mental model verification", iconName: "MessageSquareCode" },
      { name: "Claude", description: "Complex system architecture & structured refactoring", iconName: "Workflow" },
      { name: "Gemini", description: "Multi-modal vision analysis & reasoning pipelines", iconName: "Sparkles" },
      { name: "DeepSeek", description: "High-speed functional testing and query reasoning", iconName: "Brain" },
      { name: "Kimi", description: "Long-context review and file structural synthesis", iconName: "FileSpreadsheet" },
      { name: "Qwen", description: "Diverse bilingual technical reference evaluation", iconName: "Globe" }
    ]
  },
  {
    category: "Builders",
    items: [
      { name: "Copilot", description: "Seamless in-editor syntactic tab completions", iconName: "Terminal" },
      { name: "Codex", description: "Low-level system script formulation helper", iconName: "Code" },
      { name: "Lovable", description: "Rapid visual client prototyping interface", iconName: "Layout" },
      { name: "v0", description: "Component-focused design generation tool", iconName: "Layers" },
      { name: "Google AI Studio", description: "Direct developer API control & model testing", iconName: "Cpu" },
      { name: "Devin", description: "Multi-step complex engineering agent simulation", iconName: "Binary" }
    ]
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Railway", description: "Instant Docker deployment & DB hosting", iconName: "Cloud" },
      { name: "Supabase", description: "PostgreSQL databases & real-time listeners", iconName: "Database" },
      { name: "Netlify", description: "Fast CDN edge delivery for client apps", iconName: "Globe" }
    ]
  },
  {
    category: "Environment",
    items: [
      { name: "GitHub", description: "Version control, automated actions, and repositories", iconName: "Github" },
      { name: "Termux", description: "On-the-go Linux system console controls", iconName: "Command" },
      { name: "Reqable", description: "Network inspection & REST API debugging proxy", iconName: "Activity" }
    ]
  }
];

export const PEOPLE: Person[] = [
  { name: "SHADOWNEX", handle: "SHADOWNEX", avatar: "Shadow.png", role: "Creative Advisor & Builder" },
  { name: "hmmodzvip", handle: "hmmodzvip", avatar: "Hmmodz.png", role: "Independent System Experimenter" },
  { name: "iboyCloud", handle: "iboyCloud", avatar: "Reiz.png", role: "Infrastructure Architect" },
  { name: "reiz_riz", handle: "reiz_riz", avatar: "Reiz.png", role: "Co-Developer & Animator" },
  { name: "Zakrenz", handle: "Zakrenz", avatar: "Zakrenz.png", role: "UX / UI Design Specialist" },
  { name: "Ditzzx", handle: "Ditzzx", avatar: "Ramadhan.png", role: "DevOps & Core Maintainer" },
  { name: "Ramadhan Store", handle: "Ramadhan Store", avatar: "Ramadhan.png", role: "Distribution Lead & Partner" }
];

export const COMMUNITIES: Community[] = [
  { name: "COMMUNITY", title: "BELAJAR CODING & BAHAS ANIME", tagline: "Belajar Coding & Bahas Anime", image: "Communty.png" },
  { name: "Scrape Collection", title: "SCRAPE COLLECTION", tagline: "Aggregated scripts, raw data structures, and automation bots", image: "Scrape.png" },
  { name: "Promosi Tools", title: "PROMOSI TOOLS", tagline: "Promotional pipelines and interactive distribution systems", image: "Promosi.png" },
  { name: "Promosi v2", title: "PROMOSI V2", tagline: "Next-generation user outreach, interactive forms, and logs", image: "Promosiv2.png" },
  { name: "Bots Lab", title: "BOTS LAB", tagline: "Automated chat bots, workflow scripts, and system alerts", image: "Bots.png" }
];
