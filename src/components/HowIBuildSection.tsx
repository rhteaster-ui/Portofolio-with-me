import React, { useState, useRef, useEffect } from "react";
import { Lightbulb, Search, Sparkles, Layers, Cloud, Star, BookOpen, Settings, Send, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";

const STEPS = [
  {
    phase: "Gagasan",
    title: "Konsepsi Dinamis",
    description: "Memformulasikan teori utilitas fungsional, membedah alur aktivitas manual manusia untuk mendeteksi friksi efisiensi.",
    icon: <Lightbulb className="w-4 h-4" />
  },
  {
    phase: "Riset",
    title: "Pemetaan Sistemik",
    description: "Membedah fungsionalitas API eksternal, merancang arsitektur database, dan memvalidasi kelayakan sistem koordinat dasar.",
    icon: <Search className="w-4 h-4" />
  },
  {
    phase: "AI Kolaborasi",
    title: "Sinergi Kognitif Co-Pilot",
    description: "Menghubungkan rancangan struktural dengan model AI tercanggih. Mempercepat pengerjaan boilerplate secara masif melalui pendelegasian instruksi cerdas.",
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    phase: "Eksperimen",
    title: "Sandbox Validasi",
    description: "Menguji variabel kritis di lingkungan terisolasi, mengukur muatan muatan jaringan, serta memantau latensi browser secara langsung.",
    icon: <RefreshCw className="w-4 h-4" />
  },
  {
    phase: "Kultivasi",
    title: "Kustomisasi Pristine",
    description: "Membangun komponen modular yang solid, merangkai state container yang bersih, dan memoles lengkungan interaksi agar terasa mewah.",
    icon: <Layers className="w-4 h-4" />
  },
  {
    phase: "Deploy",
    title: "Akselerasi Edge",
    description: "Membundel seluruh modul dan meluncurkannya secara instan ke platform edge modern kontainer Docker terdistribusi.",
    icon: <Cloud className="w-4 h-4" />
  },
  {
    phase: "Evolusi",
    title: "Alur Timbal Balik",
    description: "Menganalisis pencatatan logs asli, merampingkan dependensi usang, dan menggulirkan pembaruan langsung secara berkala.",
    icon: <Star className="w-4 h-4" />
  }
];

export default function HowIBuildSection() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // GSAP 3D card entry effect for active card
  useEffect(() => {
    if (!cardContainerRef.current) return;
    
    gsap.fromTo(cardContainerRef.current,
      { rotateX: 30, transformPerspective: 1200, scale: 0.95, opacity: 0.7 },
      { rotateX: 0, scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" }
    );
  }, [activeStepIdx]);

  return (
    <section id="how-i-build" className="py-32 px-6 select-none bg-transparent min-h-screen flex flex-col justify-center border-t border-zinc-950/60 relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-cyan-500/1 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded-full uppercase">[ PROGRESSIVE PIPELINE // CARA KERJA ]</span>
          <h2 className="text-5xl font-display font-medium text-white tracking-widest uppercase">HOW I BUILD</h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-sans leading-relaxed">
            Metodologi siklus pengembangan cepat R_hmt. Mengawinkan imajinasi kreatif manusia dengan efisiensi sistem otomatisasi terintegrasi.
          </p>
        </div>

        {/* Process flow indicator bubbles */}
        <div className="hidden md:flex items-center justify-between relative mb-20 p-2 rounded-2xl bg-zinc-950/40 border border-zinc-900/60 backdrop-blur">
          
          {/* Connector line underneath */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-0.5 bg-zinc-900/40 z-0"></div>
          
          {STEPS.map((step, idx) => {
            const active = idx === activeStepIdx;
            const completed = idx < activeStepIdx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIdx(idx)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <div 
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${active ? "bg-black border-accent-cyan text-accent-cyan shadow-[0_0_15px_rgba(0,242,254,0.4)] scale-110" : completed ? "bg-zinc-950/80 border-cyan-500/15 text-cyan-400" : "bg-zinc-950/30 border-zinc-900 text-zinc-550 hover:border-zinc-700 hover:text-zinc-350"}`}
                >
                  {step.icon}
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-widest mt-3 transition-all ${active ? "text-accent-cyan font-bold" : "text-zinc-500 group-hover:text-zinc-300"}`}>{step.phase}</span>
              </button>
            );
          })}
        </div>

        {/* Highlight details box for active step with macOS-like perspective transformation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* Tactile 3D Active Card */}
          <div 
            ref={cardContainerRef}
            style={{ transformStyle: "preserve-3d" }}
            className="md:col-span-8 glow-card-cyan rounded-3xl bg-zinc-950/50 p-10 border border-zinc-850/80 flex flex-col justify-between shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur relative"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">PIPELINE PHASE 0{activeStepIdx + 1} // {STEPS[activeStepIdx].phase.toUpperCase()}</span>
              <h3 className="text-3xl font-display font-medium text-white tracking-wide">{STEPS[activeStepIdx].title}</h3>
              <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-xl">{STEPS[activeStepIdx].description}</p>
            </div>

            <div className="flex justify-between items-center gap-4 pt-10 border-t border-zinc-900/60 mt-10 text-[10px] font-mono text-zinc-555">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>PIPELINE VELOCITY // STABLE</span>
              </div>
              <span className="text-accent-cyan uppercase tracking-wider">[ STABILIZED BY AI CO-PILOTS ]</span>
            </div>
          </div>

          {/* Core Info Panel */}
          <div className="md:col-span-4 bg-[#08080c] border border-zinc-900 px-8 py-10 rounded-3xl flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-widest font-bold">PROSES ITERASI:</span>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                R_hmt merancang siklus pembangunan berbasis riset kilat. Alih-alih merancang blueprint berminggu-minggu, validasi dan peluncuran produk diselesaikan secara dinamis menggunakan alur terkompresi.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              {/* Pagination controls inside mobile */}
              <div className="md:hidden flex justify-between gap-2">
                <button 
                  onClick={() => setActiveStepIdx(prev => (prev - 1 + STEPS.length) % STEPS.length)}
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button 
                  onClick={() => setActiveStepIdx(prev => (prev + 1) % STEPS.length)}
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="bg-black border border-zinc-900 px-5 py-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-[10px] font-mono text-zinc-400 select-none uppercase tracking-wide">LABS_PIPELINE_ACTIVE</span>
                </div>
                <span className="text-[10px] font-mono text-[#00f2fe]">V1.4D</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
