import { Project, JourneyStep, EcosystemGroup, Person, Community } from "./types";

export const PROJECTS: Project[] = [
  { id: "analisis-tanaman", name: "Analisis Tanaman", category: "AI Tools", url: "https://analyze-tanaman.vercel.app/welcome", description: "Diagnosa visual tanaman berbasis AI: user cukup mengirim foto daun/tanaman, lalu sistem memberi analisis awal dan saran tindakan.", problem: "Petani atau pelajar sering butuh indikasi cepat sebelum bertanya ke ahli. Friksi utamanya adalah waktu, akses, dan bahasa teknis yang sulit.", exploration: "Saya menguji camera input, Gemini multimodal, dan UI mobile agar diagnosis terasa praktis, bukan sekadar demo AI.", outcome: "Menjadi eksperimen agritech yang paling representatif: ide lokal, AI vision, dan pengalaman pakai yang langsung terasa manfaatnya.", ecosystem: ["React", "Tailwind CSS", "Gemini Multi-modal", "Serverless"] },
  { id: "hd-upscale", name: "HD Upscale", category: "AI Tools", url: "https://hd-upscale-nine.vercel.app/", description: "Tool upscaler gambar untuk memperjelas detail visual, mengurangi noise, dan menyiapkan aset agar lebih layak dipajang.", problem: "Banyak gambar penting terlihat pecah ketika dipakai untuk profil, preview project, atau konten portfolio.", exploration: "Eksplorasi pipeline image enhancement, canvas preview, dan prompt repair agar prosesnya tetap sederhana untuk user umum.", outcome: "Aplikasi kecil yang fokus pada satu kebutuhan jelas: membuat gambar rendah kualitas menjadi lebih siap tampil.", ecosystem: ["Gemini Vision API", "Canvas API", "Tailwind", "Vite"] },
  { id: "repo-flow", name: "Repo Flow", category: "Utilities", url: "https://auto-reporistory-githb.vercel.app/", description: "Orkestrator repository GitHub untuk mempercepat pembuatan workspace, struktur awal, dan flow eksperimen baru.", problem: "Membuat repo, file awal, dan alur publikasi berulang-ulang bisa menghabiskan waktu ketika ide sedang banyak.", exploration: "Menghubungkan GitHub API dengan wizard UI, validasi input, dan alur deploy-ready yang lebih ringkas.", outcome: "Membantu eksperimen bergerak lebih cepat: dari ide menuju repository aktif tanpa banyak ritual manual.", ecosystem: ["GitHub API", "React", "OAuth 2.0", "Tailwind CSS"] },
  { id: "fake-loby-ml", name: "Fake Lobby ML", category: "Utilities", url: "https://fake-loby-ml-nine.vercel.app/", description: "Screenshot web berbasis module dan HTML canvas untuk membuat tampilan lobby ML yang rapi sebagai eksperimen visual.", problem: "Mockup lobby game sering dibuat manual dan tidak konsisten ketika butuh preview cepat untuk konten atau demo UI.", exploration: "Saya menguji komposisi canvas, layer teks, dan rendering browser agar hasilnya bisa langsung dikunjungi sebagai web live.", outcome: "Eksperimen visual yang menonjol karena outputnya langsung terlihat, interaktif, dan fokus pada pengalaman mengunjungi web.", ecosystem: ["HTML Canvas", "Module JS", "React", "Vercel"] },
  { id: "image-to-prompt", name: "Image To Prompt", category: "AI Tools", url: "https://image-to-promt-livid.vercel.app/", description: "Mengubah gambar menjadi prompt terstruktur agar user lebih mudah memahami gaya, warna, komposisi, dan mood visual.", problem: "User sering punya referensi visual, tapi sulit menerjemahkannya menjadi instruksi prompt yang jelas.", exploration: "Menggabungkan vision-language reasoning dengan template output yang readable dan bisa dipakai ulang.", outcome: "Membantu kreator memecah visual menjadi bahasa prompt yang lebih presisi.", ecosystem: ["Gemini Vision", "React", "Tailwind CSS", "Node.js"] },
  { id: "cek-kartu", name: "Cek Kartu", category: "Utilities", url: "https://cek-provider-six.vercel.app/", description: "Pendeteksi provider/operator nomor Indonesia dengan regex dan dataset prefix yang ringan.", problem: "Kesalahan identifikasi operator bisa mengganggu validasi transaksi, form, atau sistem pembayaran lokal.", exploration: "Menyusun prefix matching cepat dan UI ringkas agar user mendapat hasil tanpa proses rumit.", outcome: "Utility kecil yang practical, cepat, dan mudah dipakai di browser.", ecosystem: ["React", "Tailwind CSS", "RegEx Engine", "Vite"] },
  { id: "indosawit-news", name: "Indosawit.News v2", category: "Productivity", url: "https://nexssuspage.vercel.app", description: "Eksplorasi news/monitoring agrikultur sawit dengan fokus pada akses informasi yang lebih ramah mobile.", problem: "Informasi pertanian tersebar dan kadang sulit dibaca cepat oleh pengguna lapangan.", exploration: "Mengolah feed, layout high-contrast, dan navigasi sederhana untuk kebutuhan informasi praktis.", outcome: "Membawa tema agrikultur lokal ke dalam eksperimen web modern.", ecosystem: ["React", "Tailwind", "REST APIs", "Vectary 3D"] },
  { id: "quickfake", name: "QuickFake", category: "Archive Experiments", url: "#", description: "Generator mock API dan fake database untuk prototyping cepat.", problem: "Frontend sering menunggu backend siap sebelum bisa diuji.", exploration: "Membuat data palsu yang cukup realistis untuk menguji flow UI.", outcome: "Arsip eksperimen untuk mempercepat ide awal.", ecosystem: ["Faker.js", "Zustand", "TypeScript"] },
  { id: "soundify", name: "Soundify", category: "Archive Experiments", url: "#", description: "Eksperimen audio-visual berbasis Web Audio API dan animasi canvas.", problem: "Eksplorasi suara di web sering terasa berat untuk pemula.", exploration: "Mengubah pola matematis menjadi gelombang audio dan visual ringan.", outcome: "Sandbox kecil untuk bermain dengan suara langsung di browser.", ecosystem: ["Web Audio API", "HTML5 Canvas", "Tailwind CSS"] },
  { id: "web-anime", name: "Web Anime", category: "Archive Experiments", url: "#", description: "Katalog animasi CSS ringan dengan nuansa pop-culture dan motion cepat.", problem: "UI statis terasa kurang hidup tanpa sentuhan motion yang tepat.", exploration: "Menguji transform GPU, timing, dan komposisi animasi CSS.", outcome: "Arsip gaya motion yang bisa dipakai lagi pada eksperimen berikutnya.", ecosystem: ["CSS Transforms", "React", "Framer Motion"] }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  { phase: "Curiosity", title: "Awal Rasa Penasaran", subtitle: "Why & How", description: "Perjalanan dimulai dari rasa penasaran: membongkar cara kerja website, sistem lokal, file konfigurasi, dan melihat bagaimana ide kecil bisa berubah menjadi interface nyata.", techKeywords: ["Web Protocols", "System Inspection", "File Exploration", "UI Dissection"] },
  { phase: "Learning", title: "Belajar Otodidak & Mandiri", subtitle: "Cracking the Script", description: "Sebagai pelajar MA, saya belajar secara otodidak: memahami JavaScript, Node.js, CSS layout, dan logika browser lewat eksperimen kecil yang terus diulang.", techKeywords: ["JavaScript", "Node.js", "CSS Box Model", "Async Pipelines"] },
  { phase: "Exploration", title: "AI Sebagai Partner Berpikir", subtitle: "Cognitive Workflow", description: "AI bukan jalan pintas, tapi partner eksplorasi. Saya memakai ChatGPT, Claude, Gemini, v0, dan Lovable untuk menguji ide, merancang flow, lalu tetap memahami hasilnya.", techKeywords: ["LLM Orchestration", "Prompt Engineering", "v0 & Lovable", "Google AI Studio"] },
  { phase: "Experimentation", title: "Membangun Micro-Tools", subtitle: "Iterative Loops", description: "Dari screenshot web, checker kartu, hingga analisis tanaman, setiap project menjadi lab kecil untuk menguji API, canvas, vision model, dan pengalaman user.", techKeywords: ["Serverless Hooks", "HTML Canvas", "RegEx Engines", "Vision Language Models"] },
  { phase: "Building", title: "Independent Product Builder", subtitle: "Ship, Visit, Improve", description: "Sekarang fokusnya bukan hanya source code, tapi produk yang bisa dikunjungi langsung: web live, UI halus, dan ekosistem yang terus diperbaiki setelah rilis.", techKeywords: ["Full-Stack Express", "Vite Bundles", "Vercel", "Cloud Deployment"] }
];

const ICONS = {
  chatgpt: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
  claude: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/anthropic-icon-wii9u8ifrjrd99btrqfgi.png/anthropic-icon-tdvkiqisswbrmtkiygb0ia.png?_a=DATAiZAAZAA0",
  gemini: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/1280px-Google_Gemini_icon_2025.svg.png",
  deepseek: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GcM2cT29bqcJU1_O_IPmQQJ5ZXexPGd5Kv0kioZzMg&s=10",
  kimi: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFO7L1gGJljIRoshBEr92dIfLRH22LqtE8A&s",
  qwen: "https://img.alicdn.com/imgextra/i4/O1CN01ZJvdT71cRmc77GWnr_!!6000000003597-2-tps-96-96.png",
  copilot: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-copilot-icon.png",
  lovable: "https://lovable.dev/img/logo/lovable-logo-icon.svg",
  v0: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vercel-v0-icon.png",
  devin: "https://pixello.co.in/wp-content/uploads/2025/11/devin-ai-logo.webp",
  studio: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyw5a8alX1q3kxvsetQvhjfYxAFbrT2_1TdhhG-zZ6sQ&s=10",
  codex: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8yncmEusmOXNqagDyLcVr-InUiP3tPphQZ23ntnMNQ&s=10",
  railway: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/railway-infrastructure-platform-icon.png",
  netlify: "https://images.seeklogo.com/logo-png/47/3/netlify-icon-logo-png_seeklogo-477950.png",
  github: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  reqable: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqQDReO8nJyvLg33Ak-uzHz6lmkrV-jvoWqO_E9LjAA&s=10",
  wa: "https://img.magnific.com/premium-vector/vector-whatsapp-social-media-logo_1093524-447.jpg?semt=ais_hybrid&w=740&q=80",
  tiktok: "https://www.niftybuttons.com/assets/icons/tiktok-black-white-512.png",
  instagram: "https://cdn-icons-png.flaticon.com/512/408/408809.png",
  telegram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUun23P0lFmA17FpPs5CwYrZfekvEladFibigrRFqnkQ&s=10",
  email: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wpPFCLog_XiZx7sUpcbtzJB_uSfxFVTZUZz44a1DwA&s=10"
};

export const ECOSYSTEM: EcosystemGroup[] = [
  { category: "AI Tools", items: [
    { name: "ChatGPT", description: "Brainstorming, debugging, dan verifikasi ide.", iconName: "MessageSquareCode", iconUrl: ICONS.chatgpt },
    { name: "Claude", description: "Merapikan struktur, refactor, dan reasoning panjang.", iconName: "Workflow", iconUrl: ICONS.claude },
    { name: "Gemini", description: "Vision analysis, multimodal, dan chat lab.", iconName: "Sparkles", iconUrl: ICONS.gemini },
    { name: "DeepSeek", description: "Reasoning cepat untuk fungsi dan alur teknis.", iconName: "Brain", iconUrl: ICONS.deepseek },
    { name: "Kimi", description: "Long-context review untuk file dan referensi panjang.", iconName: "FileSpreadsheet", iconUrl: ICONS.kimi },
    { name: "Qwen", description: "Referensi bilingual dan eksplorasi teknis alternatif.", iconName: "Globe", iconUrl: ICONS.qwen }
  ]},
  { category: "Builders", items: [
    { name: "GitHub Copilot", description: "Autocomplete dan bantuan coding di editor.", iconName: "Terminal", iconUrl: ICONS.copilot },
    { name: "Lovable", description: "Prototyping visual untuk web app cepat.", iconName: "Layout", iconUrl: ICONS.lovable },
    { name: "v0", description: "Generate komponen UI modern berbasis prompt.", iconName: "Layers", iconUrl: ICONS.v0 },
    { name: "Devin", description: "Referensi konsep autonomous engineering agent.", iconName: "Binary", iconUrl: ICONS.devin },
    { name: "Google AI Studio", description: "Eksperimen model Gemini dan API secara langsung.", iconName: "Cpu", iconUrl: ICONS.studio },
    { name: "Codex", description: "Pendamping implementasi, review, dan operasi repo.", iconName: "Code", iconUrl: ICONS.codex }
  ]},
  { category: "Infrastructure", items: [
    { name: "Railway", description: "Deploy backend dan service eksperimen.", iconName: "Cloud", iconUrl: ICONS.railway },
    { name: "Supabase", description: "Database Postgres, auth, dan realtime.", iconName: "Database" },
    { name: "Netlify", description: "Hosting static web cepat dengan CDN.", iconName: "Globe", iconUrl: ICONS.netlify },
    { name: "Vercel", description: "Deploy project frontend dan full-stack ringan.", iconName: "Globe", iconUrl: ICONS.v0 },
    { name: "Infinity", description: "Ruang eksperimen hosting dan automasi tambahan.", iconName: "Cloud" }
  ]},
  { category: "Environment", items: [
    { name: "GitHub", description: "Repository, version control, dan dokumentasi project.", iconName: "Github", iconUrl: ICONS.github },
    { name: "Termux", description: "Terminal Linux mobile untuk belajar dan eksperimen.", iconName: "Command" },
    { name: "Reqable", description: "Inspect network request dan debugging API.", iconName: "Activity", iconUrl: ICONS.reqable }
  ]}
];

export const PEOPLE: Person[] = [
  { name: "SHADOWNEX", handle: "SHADOWNEX", avatar: "Shadow.png", role: "Creative friend & journey support", socials: [{ label: "GitHub", url: "https://github.com/Shadownex293", iconUrl: ICONS.github }, { label: "Telegram", url: "https://t.me/Shadownex2", iconUrl: ICONS.telegram }, { label: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029Vb8Lge5FHWq3fTan4V0J", iconUrl: ICONS.wa }] },
  { name: "hmmodzvip", handle: "hmmodzvip", avatar: "Hmmodz.png", role: "Independent system experimenter", socials: [{ label: "GitHub", url: "https://github.com/hmmodzvip", iconUrl: ICONS.github }, { label: "TikTok", url: "https://www.tiktok.com/@hmmodzvip", iconUrl: ICONS.tiktok }, { label: "Email", url: "mailto:serverhmmodz@gmail.com", iconUrl: ICONS.email }] },
  { name: "iboyCloud", handle: "iboyCloud", role: "Cloud & infrastructure explorer", socials: [{ label: "GitHub", url: "https://github.com/iboycloud", iconUrl: ICONS.github }, { label: "TikTok", url: "https://www.tiktok.com/@xiao_bayu", iconUrl: ICONS.tiktok }] },
  { name: "reiz_riz", handle: "reiz_riz", avatar: "Reiz.png", role: "Co-developer in the learning path", socials: [{ label: "GitHub", url: "https://github.com/rixz-dev", iconUrl: ICONS.github }] },
  { name: "Zakrenz", handle: "Zakrenz", avatar: "Zakrenz.png", role: "Design and coding circle", socials: [{ label: "GitHub", url: "https://github.com/Zakrenzdev", iconUrl: ICONS.github }, { label: "TikTok", url: "https://www.tiktok.com/@zakrenzreal", iconUrl: ICONS.tiktok }] },
  { name: "Ditzzx", handle: "Ditzzx", role: "Community signal partner", socials: [{ label: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029Vb6GMVNGehERPKx21D20", iconUrl: ICONS.wa }] },
  { name: "Ramadhan Store", handle: "Ramadhan Store", avatarUrl: "https://www.google.com/s2/favicons?domain=wa.me&sz=128", role: "Distribution & store connection", socials: [{ label: "WhatsApp", url: "https://wa.me/62895423189495", iconUrl: ICONS.wa }] },
  { name: "Tenkz", handle: "Tenkz", avatar: "Tenkz.png", role: "Developer friend and social node", socials: [{ label: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029VbC13UP1CYoODnULpp3E", iconUrl: ICONS.wa }, { label: "GitHub", url: "https://github.com/Tenkxzz", iconUrl: ICONS.github }, { label: "Instagram", url: "https://instagram.com/main.pyc", iconUrl: ICONS.instagram }] },
  { name: "Thxyz404", handle: "Thxyz404", avatar: "Thx.png", role: "Community and content signal", socials: [{ label: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029Vb8CC8WKLaHqU9bbrN2Z", iconUrl: ICONS.wa }, { label: "TikTok", url: "https://www.tiktok.com/@thxyzz404", iconUrl: ICONS.tiktok }, { label: "Telegram", url: "https://t.me/Gunawan076w", iconUrl: ICONS.telegram }] }
];

export const COMMUNITIES: Community[] = [
  { name: "COMMUNITY", title: "BELAJAR CODING & BAHAS ANIME", tagline: "Belajar coding, ngobrol anime, dan saling bantu eksplorasi.", image: "Coding.png", url: "https://chat.whatsapp.com/GJrFX9GSOJiBLyJmJNNixi" },
  { name: "BELAJAR CODING&BAHAS ANIME", title: "COMMUNITY MEMBER HUB", tagline: "Ruang belajar coding santai dengan vibes komunitas.", image: "Coding.png", url: "https://chat.whatsapp.com/Dfl4xKPiJoAH01YtWTlB97" },
  { name: "Scrape Collection", title: "SCRAPE COLLECTION", tagline: "Diskusi scraping, dataset, bot, dan automasi web.", image: "Scrape.png", url: "https://chat.whatsapp.com/BfxkoBVqORL2GIJ3SZh1Lk" },
  { name: "Promosi", title: "PROMOSI", tagline: "Tempat berbagi promosi project, tools, dan channel.", image: "Promosi.png", url: "https://chat.whatsapp.com/HxMqke18m0OBh8uQ8Hezth" },
  { name: "Promosi v2", title: "PROMOSI V2", tagline: "Versi lanjutan untuk distribusi dan outreach komunitas.", image: "Promosiv2.png", url: "https://chat.whatsapp.com/CKBpfDlQICEL6OoDyiHIj3" },
  { name: "Bots Lab", title: "BOTS LAB", tagline: "Eksperimen bot chat, script automasi, dan workflow alert.", image: "Bots.png", status: "Waiting Link" }
];
