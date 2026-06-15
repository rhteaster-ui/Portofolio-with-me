import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, Play, Terminal, Eye, Code } from "lucide-react";
import { motion } from "motion/react";
import { gsap } from "gsap";

function useTypingLoop(words: string[], typeSpeed = 70, deleteSpeed = 34, hold = 1300) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = window.setTimeout(() => {
      if (!deleting && text.length < word.length) {
        setText(word.slice(0, text.length + 1));
        return;
      }
      if (!deleting && text.length === word.length) {
        setDeleting(true);
        return;
      }
      if (deleting && text.length > 0) {
        setText(word.slice(0, text.length - 1));
        return;
      }
      setDeleting(false);
      setWordIndex((idx) => (idx + 1) % words.length);
    }, !deleting && text.length === word.length ? hold : deleting ? deleteSpeed : typeSpeed);

    return () => window.clearTimeout(timeout);
  }, [words, wordIndex, text, deleting, typeSpeed, deleteSpeed, hold]);

  return text;
}

function TypeLoopLabel() {
  const text = useTypingLoop([
    "Technology explorer",
    "vibe coder",
    "pelajar MA otodidak",
    "AI workflow builder",
    "web experiment shipper"
  ]);
  return <span>&gt; {text}<span className="animate-pulse">_</span></span>;
}

export default function HeroSection({ onExploreJourney, onViewExplorations }: { onExploreJourney: () => void, onViewExplorations: () => void }) {
  const [activeScreenTab, setActiveScreenTab] = useState<"preview" | "code">("preview");
  const heroRef = useRef<HTMLDivElement>(null);
  const container3D = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Mouse tilt 3D effect inside Hero using GSAP
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalize offsets (-0.5 to 0.5)
      const xPercent = (clientX / innerWidth) - 0.5;
      const yPercent = (clientY / innerHeight) - 0.5;

      // Rotate card in 3D space
      if (container3D.current) {
        gsap.to(container3D.current, {
          rotateX: -yPercent * 25, // Tilting angles
          rotateY: xPercent * 25,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.6
        });
      }

      // Parallax effect on text info block
      if (infoRef.current) {
        gsap.to(infoRef.current, {
          x: xPercent * 15,
          y: yPercent * 15,
          ease: "power2.out",
          duration: 0.8
        });
      }
    };

    const handleMouseLeave = () => {
      // Smooth reset to identity state
      if (container3D.current) {
        gsap.to(container3D.current, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }
      if (infoRef.current) {
        gsap.to(infoRef.current, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (hero) hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-black select-none"
    >
      {/* 3D Perspective Grid Background (Cyber Space Grid) */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 242, 254, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 242, 254, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(500px) rotateX(60deg) translateY(-20%) translateZ(-100px)",
          transformOrigin: "top center",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)"
        }}
      ></div>

      {/* Cyberpunk Floating Light Spheres */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-accent-blue/5 rounded-full blur-[110px] pointer-events-none animate-pulse-slow"></div>

      {/* Futuristic Header Metadata Banner */}
      <div className="absolute top-28 left-6 right-6 flex justify-between items-center text-[9px] font-mono text-zinc-600 border-b border-zinc-900/60 pb-3 z-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-1.5 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
          <span>SYSTEM_INIT // ONLINE_PROT: V2_SPATIAL</span>
        </div>
        <div>[ COGNITIVE CORE: ACTIVATED ]</div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 mt-6">
        
        {/* Left column: Epic Hero Typography with premium Indo-English copywriting */}
        <div ref={infoRef} className="lg:col-span-5 text-left space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f2fe]">INDEPENDENT EXPERIMENTER</span>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="font-mono text-sm text-zinc-400 tracking-widest uppercase mb-2">hi, im</div>
              <h1 className="text-8xl font-display font-medium text-white tracking-widest leading-none">
                R_HMT
              </h1>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg font-mono font-medium text-accent-cyan uppercase tracking-widest glow-text-cyan flex items-center gap-2"
            >
              <TypeLoopLabel />
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm font-sans text-zinc-400 max-w-md leading-relaxed"
            >
              Saya seorang pelajar MA yang mengeksplorasi batas teknologi secara otodidak & mandiri lewat rasa ingin tahu, eksperimen tanpa batas, dan integrasi kecerdasan buatan dalam workflow digital modern.
            </motion.p>
          </div>

          {/* Action Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={onExploreJourney}
              className="px-6 py-3 bg-white text-black text-xs font-mono uppercase font-bold tracking-widest rounded-xl hover:bg-accent-cyan hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] cursor-pointer transition-all active:scale-95 flex items-center gap-2 border border-transparent"
            >
              KRONOLOGI <ArrowDown className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onViewExplorations}
              className="px-6 py-3 border border-zinc-900 hover:border-accent-cyan text-white text-xs font-mono uppercase font-bold tracking-widest rounded-xl cursor-pointer transition-all active:scale-95 flex items-center gap-2 bg-black/40 backdrop-blur-md"
            >
              LIHAT EKSPERIMEN <Play className="w-3 h-3 text-[#00f2fe]" />
            </button>
          </motion.div>
        </div>

        {/* Right column: Interactive 3D Spatial Frame with Card Flipping and Mirror Effect */}
        <div className="lg:col-span-7 flex justify-center items-center">
          <div 
            ref={container3D} 
            className="w-full max-w-[620px] transition-all duration-300 relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Background 3D Depth Rings */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-accent-cyan/10 via-zinc-950/20 to-accent-blue/10 blur-xl opacity-80 pointer-events-none" style={{ transform: "translateZ(-40px)" }}></div>

            {/* Simulated Desktop Glass Frame */}
            <div 
              className="bg-black/40 border border-zinc-800/80 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl relative"
              style={{ transform: "translateZ(0px)" }}
            >
              
              {/* Screen Top Header Controls */}
              <div className="flex bg-zinc-950/85 border-b border-zinc-900/60 px-4 py-3.5 items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 block border border-red-500/10"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block border border-amber-500/10"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block border border-emerald-500/10"></span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-550 tracking-wider font-bold">R_HMT // VIRTUAL_OS</span>
                </div>
                
                {/* Visual Tab Selection */}
                <div className="flex bg-[#070707] p-1 rounded-lg border border-zinc-900">
                  <button 
                    onClick={() => setActiveScreenTab("preview")}
                    className={`px-3 py-1 rounded-md text-[9px] font-mono tracking-wider cursor-pointer transition-all ${activeScreenTab === "preview" ? "bg-zinc-900 text-[#00f2fe] font-bold shadow-[0_0_10px_rgba(0,242,254,0.1)] border border-cyan-500/10" : "text-zinc-500 hover:text-zinc-300"}`}
                  >
                    <Eye className="w-3 h-3 inline-block mr-1" /> VISUAL_DESK
                  </button>
                  <button 
                    onClick={() => setActiveScreenTab("code")}
                    className={`px-3 py-1 rounded-md text-[9px] font-mono tracking-wider cursor-pointer transition-all ${activeScreenTab === "code" ? "bg-zinc-900 text-[#00f2fe] font-bold shadow-[0_0_10px_rgba(0,242,254,0.1)] border border-cyan-500/10" : "text-zinc-500 hover:text-zinc-300"}`}
                  >
                    <Code className="w-3 h-3 inline-block mr-1" /> CODE_ENGINE
                  </button>
                </div>
              </div>

              {/* Screen Screen Viewer (Side-by-side IDE / Active Frame preview) */}
              <div className="aspect-[16/11] relative overflow-hidden bg-neutral-950 flex items-stretch p-4">
                
                {activeScreenTab === "preview" ? (
                  <div className="w-full h-full flex gap-4 text-white relative">
                    
                    {/* Retro IDE Frame */}
                    <div className="w-1/2 bg-[#050508]/90 border border-zinc-900 rounded-xl p-4 flex flex-col justify-between font-mono text-[9px] text-zinc-400 select-none shadow-inner" style={{ transform: "translateZ(20px)" }}>
                      <div>
                        <div className="text-zinc-500 border-b border-zinc-950 pb-2 mb-2 flex justify-between items-center text-[7px] font-bold">
                          <span>IDE // CORE_AGENT.TSX</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block"></span>
                        </div>
                        <div className="space-y-1.5 overflow-y-auto max-h-[170px] leading-relaxed select-text scrollbar-thin">
                          <p className="text-purple-400">import <span className="text-zinc-100">{"{ useState }"}</span> from <span className="text-emerald-400">"react"</span>;</p>
                          <p className="text-purple-400">import <span className="text-zinc-100">{"{ motion }"}</span> from <span className="text-emerald-400">"motion/react"</span>;</p>
                          <p className="text-zinc-500">// Inisialisasi Karakter Utama</p>
                          <p className="text-amber-300">const IdentityInstance = {"{"}</p>
                          <p className="pl-3">nickName: <span className="text-cyan-300">"R_hmt"</span>,</p>
                          <p className="pl-3">status: <span className="text-cyan-300">"Full-Stack Creator"</span>,</p>
                          <p className="pl-3">paradigms: [</p>
                          <p className="pl-6 text-[#00f2fe]">"Curiosity Driven",</p>
                          <p className="pl-6 text-[#00f2fe]">"AI Collaborative"</p>
                          <p className="pl-3">]</p>
                          <p className="text-amber-300">{"};"}</p>
                          <p className="text-purple-400">export default function <span className="text-blue-400">Evolve</span>() {"{"}</p>
                          <p className="pl-3 text-zinc-500">&lt;div className="3D-space"&gt;</p>
                          <p className="pl-6 text-zinc-100">&lt;h2&gt;Selalu Bereksperimen&lt;/h2&gt;</p>
                          <p className="pl-3 text-zinc-500">&lt;/div&gt;</p>
                          <p className="text-purple-400">{"}"}</p>
                        </div>
                      </div>
                      <div className="text-[7px] bg-black/40 px-2 py-1 rounded text-zinc-650 flex justify-between items-center border border-zinc-900/60">
                        <span>Line 42 // UTF-8</span>
                        <span className="text-cyan-400">React TSX</span>
                      </div>
                    </div>

                    {/* Snapshot / Mirror photo frame block */}
                    <div className="w-1/2 flex items-center justify-center relative" style={{ transform: "translateZ(40px)" }}>
                      <div className="w-full max-w-[195px] rounded-xl bg-zinc-900/40 border border-zinc-800 p-1 pb-2 flex flex-col shadow-2xl relative select-none">
                        
                        <div className="flex justify-between items-center px-2 py-1 border-b border-zinc-950 mb-1">
                          <span className="text-[7.5px] font-mono text-zinc-500">PP_PREVIEW // PP.PNG</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan block"></span>
                        </div>
                        
                        <div className="relative aspect-video bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center">
                          <img
                            src="/gambar/pp.png"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallbackObj = document.getElementById("avatar-fallback-3d");
                              if (fallbackObj) fallbackObj.style.display = "flex";
                            }}
                            alt="Preview horizontal R_hmt"
                            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                          
                          {/* Modern cyber avatar fallback design */}
                          <div 
                            id="avatar-fallback-3d" 
                            className="absolute inset-0 bg-gradient-to-tr from-[#030308] to-[#12001a] hidden flex-col items-center justify-center p-4 text-center space-y-3"
                          >
                            <div className="relative animate-bounce">
                              <div className="w-16 h-16 rounded-full border border-[#00f2fe]/20 bg-cyan-950/20 flex items-center justify-center backdrop-blur shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                                <span className="font-display font-bold text-accent-cyan tracking-wider text-xl glow-text-cyan">R</span>
                              </div>
                            </div>
                            <div>
                              <p className="font-mono text-[9px] text-zinc-100 uppercase tracking-widest font-bold">R_HMT</p>
                              <p className="font-mono text-[7px] text-zinc-500 mt-1 uppercase">ACTIVE ARCHITECT</p>
                            </div>
                          </div>

                          {/* Futuristic Scanner overlay */}
                          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#00f2fe]/60 shadow-[0_0_10px_#00f2fe] animate-[bounce_3s_infinite] pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    {/* Integrated visual frame overlay */}
                    <div className="absolute bottom-1 left-1 right-1 bg-black/90 border border-zinc-900 p-2.5 rounded-lg flex items-center justify-between text-[8px] font-mono text-zinc-500 z-10 backdrop-blur select-none">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>RUNTIME ACTIVE: EDGE_SHIELD_PROT_3000</span>
                      </div>
                      <span className="font-bold text-cyan-300">[ STATUS: GREEN ]</span>
                    </div>

                  </div>
                ) : (
                  /* Screen Raw Code Option */
                  <div className="w-full h-full p-6 text-zinc-300 font-mono text-xs leading-relaxed overflow-y-auto bg-black border border-zinc-900 rounded-xl select-text">
                    <p className="text-[10px] text-zinc-600 border-b border-zinc-900/60 pb-2 mb-3">// LIVE_ENVIRONMENT_DUMP</p>
                    <p className="text-zinc-500">&gt;_ booting systems</p>
                    <p className="text-[#00f2fe]">&gt; Mengetik workflow terminal: pelajar MA, otodidak, mandiri...</p>
                    <p className="text-zinc-400">&gt; Menghubungkan platform edge (Railway / CDN / Cloud Run)</p>
                    <p className="text-emerald-400">&gt; Code engine aktif: project live, AI tools, dan community hub tersinkronisasi.</p>
                    <div className="bg-zinc-950/60 p-4 border border-zinc-900 rounded-lg mt-4">
                      <p className="text-xs text-zinc-100 leading-relaxed font-sans italic">
                        "Saya tidak berusaha menguasai seluruh teknologi yang ada. Saya lebih tertarik memahami bagaimana teknologi saling terhubung, bagaimana sebuah ide dapat diwujudkan, dan bagaimana rasa penasaran bisa berubah menjadi sesuatu yang nyata."
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Futuristic laptop metal joint base */}
            <div className="w-[102%] -ml-[1%] h-2.5 bg-zinc-900 rounded-b-xl border border-t-0 border-zinc-800 shadow-xl relative z-0">
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-950 rounded-b-md"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
