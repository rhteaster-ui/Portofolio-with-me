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
    id: "fake-loby-ml",
    name: "Fake Loby ML",
    category: "Utilities",
    url: "https://fake-loby-ml-nine.vercel.app/",
    description: "HTML canvas module untuk membuat screenshot lobby ML bergaya mockup secara cepat.",
    problem: "Membuat mockup lobby game manual memakan waktu dan sulit konsisten.",
    exploration: "Menggunakan HTML Canvas untuk menyusun elemen visual, layout, dan export screenshot langsung dari browser.",
    outcome: "Menjadi eksplorasi visual cepat untuk kebutuhan fake lobby, demo UI, dan eksperimen canvas.",
    ecosystem: ["HTML Canvas", "React", "Vite", "CSS"]
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
  { phase: "Curiosity", title: "Awal Rasa Penasaran", subtitle: "Kenapa bisa jalan?", description: "Perjalanan dimulai dari rasa penasaran: membongkar alur aplikasi, memahami file, mencoba terminal, dan bertanya bagaimana ide kecil bisa menjadi produk nyata.", techKeywords: ["Web Protocols", "System Inspection", "File Exploration", "UI Dissection"] },
  { phase: "Learning", title: "Fondasi Mandiri", subtitle: "Belajar otodidak", description: "Mulai menyusun logika JavaScript, Node.js, dan CSS. Tidak semuanya langsung paham, tapi setiap error menjadi catatan belajar dan latihan problem solving.", techKeywords: ["JavaScript", "Node.js", "CSS Box Model", "Async Pipelines"] },
  { phase: "Exploration", title: "AI Sebagai Partner", subtitle: "Human + AI workflow", description: "AI dipakai sebagai partner eksplorasi: membantu riset, membaca pola, merapikan struktur, dan mempercepat eksperimen tanpa menghilangkan keputusan manusia.", techKeywords: ["LLM Orchestration", "Prompt Engineering", "v0 & Lovable", "Google AI Studio"] },
  { phase: "Experimentation", title: "Micro-Utilities Lab", subtitle: "Build, test, ulang", description: "Membangun banyak tools kecil seperti screenshot renderer, cek kartu, analisis tanaman, sampai image pipeline. Fokusnya bukan sempurna dulu, tapi membuat ide bisa diuji.", techKeywords: ["Serverless Hooks", "Chromium Puppeteer", "RegEx Engines", "Vision Models"] },
  { phase: "Building", title: "Produk Digital Mandiri", subtitle: "Ship & improve", description: "Sekarang fokus mengemas eksperimen menjadi pengalaman web yang lebih rapi, cepat, dan berguna: deployed, dibagikan, lalu terus diperbaiki.", techKeywords: ["Full-Stack Express", "Vite Bundles", "Cloud Routing", "Iterative UX"] }
];

const logos = {
  chatgpt: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png", claude: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/anthropic-icon-wii9u8ifrjrd99btrqfgi.png/anthropic-icon-tdvkiqisswbrmtkiygb0ia.png?_a=DATAiZAAZAA0", gemini: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/1280px-Google_Gemini_icon_2025.svg.png", deepseek: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GcM2cT29bqcJU1_O_IPmQQJ5ZXexPGd5Kv0kioZzMg&s=10", kimi: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFO7L1gGJljIRoshBEr92dIfLRH22LqtE8A&s", qwen: "https://img.alicdn.com/imgextra/i4/O1CN01ZJvdT71cRmc77GWnr_!!6000000003597-2-tps-96-96.png", copilot: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-copilot-icon.png", lovable: "https://lovable.dev/img/logo/lovable-logo-icon.svg", v0: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vercel-v0-icon.png", devin: "https://pixello.co.in/wp-content/uploads/2025/11/devin-ai-logo.webp", studio: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyw5a8alX1q3kxvsetQvhjfYxAFbrT2_1TdhhG-zZ6sQ&s=10", railway: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/railway-infrastructure-platform-icon.png", netlify: "https://images.seeklogo.com/logo-png/47/3/netlify-icon-logo-png_seeklogo-477950.png", github: "https://cdn-icons-png.flaticon.com/512/25/25231.png", reqable: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqQDReO8nJyvLg33Ak-uzHz6lmkrV-jvoWqO_E9LjAA&s=10" };

export const ECOSYSTEM: EcosystemGroup[] = [
  { category: "AI Tools", items: ["ChatGPT","Claude","Gemini","DeepSeek","Kimi","Qwen"].map((name, i) => ({ name, description: ["Riset, ide, dan validasi solusi.","Arsitektur dan refactor kompleks.","Vision, reasoning, dan eksperimen multimodal.","Testing cepat dan reasoning query.","Long-context review untuk struktur file.","Referensi bilingual dan evaluasi teknis."][i], iconName: "Sparkles", logo: [logos.chatgpt,logos.claude,logos.gemini,logos.deepseek,logos.kimi,logos.qwen][i] })) },
  { category: "Builders", items: [
    { name: "GitHub Copilot", description: "Autocomplete coding di editor.", iconName: "Code", logo: logos.copilot }, { name: "Lovable", description: "Prototype visual cepat.", iconName: "Layout", logo: logos.lovable }, { name: "v0", description: "Generate komponen UI.", iconName: "Layers", logo: logos.v0 }, { name: "Devin", description: "Agent engineering multi-step.", iconName: "Terminal", logo: logos.devin }, { name: "Google AI Studio", description: "Eksperimen API dan model.", iconName: "Cpu", logo: logos.studio }
  ] },
  { category: "Infrastructure", items: [
    { name: "Railway", description: "Deploy backend dan service cepat.", iconName: "Cloud", logo: logos.railway }, { name: "Supabase", description: "Database Postgres dan realtime.", iconName: "Database" }, { name: "Netlify", description: "Hosting statis/CDN.", iconName: "Globe", logo: logos.netlify }, { name: "Vercel", description: "Edge deploy untuk web app.", iconName: "Globe", logo: logos.v0 }, { name: "Infinity", description: "Eksperimen hosting dan workflow.", iconName: "Zap" }
  ] },
  { category: "Environment", items: [
    { name: "GitHub", description: "Repo, versioning, dan kolaborasi.", iconName: "Github", logo: logos.github }, { name: "Termux", description: "Terminal Linux mobile.", iconName: "Command" }, { name: "Reqable", description: "Debugging API/network.", iconName: "Activity", logo: logos.reqable }
  ] }
];

export const PEOPLE: Person[] = [
  { name: "SHADOWNEX", handle: "SHADOWNEX", avatar: "Shadow.png", role: "Creative Advisor & Builder", socials: [{type:"github",label:"GitHub",url:"https://github.com/Shadownex293"},{type:"telegram",label:"Telegram",url:"https://t.me/Shadownex2"},{type:"channel",label:"WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb8Lge5FHWq3fTan4V0J"}] },
  { name: "hmmodzvip", handle: "hmmodzvip", avatar: "Hmmodz.png", role: "Independent System Experimenter", socials: [{type:"github",label:"GitHub",url:"https://github.com/hmmodzvip"},{type:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@hmmodzvip"},{type:"email",label:"Email",url:"mailto:serverhmmodz@gmail.com"}] },
  { name: "iboyCloud", handle: "iboyCloud", role: "Infrastructure Architect", socials: [{type:"github",label:"GitHub",url:"https://github.com/iboycloud"},{type:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@xiao_bayu"}] },
  { name: "reiz_riz", handle: "reiz_riz", avatar: "Reiz.png", role: "Co-Developer & Animator", socials: [{type:"github",label:"GitHub",url:"https://github.com/rixz-dev"}] },
  { name: "Zakrenz", handle: "Zakrenz", avatar: "Zakrenz.png", role: "UX / UI Design Specialist", socials: [{type:"github",label:"GitHub",url:"https://github.com/Zakrenzdev"},{type:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@zakrenzreal"}] },
  { name: "Ditzzx", handle: "Ditzzx", role: "Channel Partner", socials: [{type:"channel",label:"WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb6GMVNGehERPKx21D20"}] },
  { name: "Ramadhan Store", handle: "Ramadhan Store", role: "Distribution Lead", socials: [{type:"whatsapp",label:"WhatsApp",url:"https://wa.me/62895423189495"}] },
  { name: "Tenkz", handle: "Tenkxzz", avatar: "Tenkz.png", role: "Builder & Social Connector", socials: [{type:"channel",label:"Channel",url:"https://whatsapp.com/channel/0029VbC13UP1CYoODnULpp3E"},{type:"github",label:"GitHub",url:"https://github.com/Tenkxzz"},{type:"instagram",label:"Instagram",url:"https://instagram.com/main.pyc"}] },
  { name: "Thxyz404", handle: "Thxyz404", avatar: "Thx.png", role: "Community Connector", socials: [{type:"channel",label:"Channel",url:"https://whatsapp.com/channel/0029Vb8CC8WKLaHqU9bbrN2Z"},{type:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@thxyzz404"},{type:"telegram",label:"Telegram",url:"https://t.me/Gunawan076w"}] }
];

export const COMMUNITIES: Community[] = [
  { name: "COMMUNITY", title: "COMMUNITY", tagline: "Belajar Coding & Bahas Anime", image: "Coding.png", url: "https://chat.whatsapp.com/GJrFX9GSOJiBLyJmJNNixi" },
  { name: "BELAJAR CODING&BAHAS ANIME", title: "BELAJAR CODING & BAHAS ANIME", tagline: "Ruang belajar coding, ngobrol anime, dan sharing progres.", image: "Coding.png", url: "https://chat.whatsapp.com/Dfl4xKPiJoAH01YtWTlB97" },
  { name: "Scrape Collection", title: "SCRAPE COLLECTION", tagline: "Koleksi scrape, bot, data mentah, dan automation snippets.", image: "Scrape.png", url: "https://chat.whatsapp.com/BfxkoBVqORL2GIJ3SZh1Lk" },
  { name: "Promosi", title: "PROMOSI", tagline: "Kanal promosi project, store, dan distribusi karya.", image: "Promosi.png", url: "https://chat.whatsapp.com/HxMqke18m0OBh8uQ8Hezth" },
  { name: "Promosi v2", title: "PROMOSI V2", tagline: "Versi lanjutan untuk outreach dan promosi komunitas.", image: "Promosiv2.png", url: "https://chat.whatsapp.com/CKBpfDlQICEL6OoDyiHIj3" },
  { name: "Bots Lab", title: "BOTS LAB", tagline: "Eksperimen bot, workflow chat, dan sistem otomatis.", image: "Bots.png", status: "Waiting Link" }
];
