import React, { useState, useRef, useEffect } from "react";
import { JOURNEY_STEPS } from "../data";
import { ChevronRight, Sparkles, Orbit, Compass, Cpu, Bookmark, Code, Terminal, ChevronLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";

export default function JourneySection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);

  const getIconForStep = (phase: string) => {
    switch(phase) {
      case "Curiosity": return <Orbit className="w-5 h-5" />;
      case "Learning": return <Bookmark className="w-5 h-5" />;
      case "Exploration": return <Compass className="w-5 h-5" />;
      case "Experimentation": return <Terminal className="w-5 h-5" />;
      case "Building": return <Cpu className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  // GSAP 3D Card sweep trigger on active index change
  useEffect(() => {
    if (!deckRef.current) return;
    
    // Animate the active card with beautiful 3D tilt
    gsap.fromTo(deckRef.current, 
      { rotationY: -45, transformPerspective: 1000, z: -150, opacity: 0.8 },
      { rotationY: 0, z: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }
    );
  }, [selectedIdx]);

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % JOURNEY_STEPS.length);
  };

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + JOURNEY_STEPS.length) % JOURNEY_STEPS.length);
  };

  return (
    <section id="journey" className="py-32 px-6 select-none bg-transparent min-h-screen flex flex-col justify-center relative overflow-hidden">
      
      {/* 3D background grids / depth nodes */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-accent-cyan/2 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-cyan-500/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded-full uppercase">[ THE EXPERIENCE PATHWAY // ALUR PERJALANAN ]</span>
          <h2 className="text-5xl font-display font-medium text-white tracking-widest uppercase">THE JOURNEY</h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-sans leading-relaxed">
            Menelusuri kronologi eksplorasi teknologi R_hmt. Setiap fase merupakan lompatan kognitif dari pembelajar pasif hingga menjadi builder independen yang adaptif.
          </p>
        </div>

        {/* 3D Deck / Pathway Grid layout (Split Screen layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Step Indicators (Vertical Node Map) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono text-zinc-650 tracking-widest uppercase block mb-2 px-1">SELECT NODE PATHWAY:</span>
            <div className="relative pl-6 space-y-2.5 border-l border-zinc-900/60">
              
              {/* Dynamic Connecting Active Line */}
              <div 
                className="absolute left-0 top-0 bg-[#00f2fe] transition-all duration-500"
                style={{
                  height: `${((selectedIdx) / (JOURNEY_STEPS.length - 1)) * 100}%`,
                  width: "1.5px"
                }}
              ></div>

              {JOURNEY_STEPS.map((step, idx) => {
                const isActive = selectedIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left pl-6 py-4 rounded-2xl relative group transition-all duration-300 cursor-pointer flex items-center gap-4 border ${isActive ? "bg-zinc-950/80 border-cyan-500/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)]" : "bg-transparent border-transparent hover:border-zinc-900/40"}`}
                  >
                    {/* Glowing active node connection */}
                    <div 
                      className={`absolute -left-[32px] w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${isActive ? "bg-black border-accent-cyan scale-110 shadow-[0_0_12px_rgba(0,242,254,0.6)]" : "bg-zinc-950 border-zinc-850 group-hover:border-zinc-500"}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-all ${isActive ? "bg-accent-cyan" : "bg-transparent"}`}></div>
                    </div>

                    {/* Step Thumbnail Icon */}
                    <div className={`p-3 rounded-xl border transition-all ${isActive ? "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30" : "bg-zinc-950 text-zinc-650 border-zinc-900 group-hover:text-zinc-400 group-hover:border-zinc-800"}`}>
                      {getIconForStep(step.phase)}
                    </div>

                    <div>
                      <span className="text-[9px] font-mono uppercase text-zinc-550 tracking-widest block font-bold">NODE_0{idx+1}</span>
                      <span className={`text-sm font-display leading-tight block tracking-wider ${isActive ? "text-white font-medium glow-text-cyan" : "text-zinc-400 group-hover:text-zinc-200"}`}>{step.phase}</span>
                    </div>

                    <ChevronRight className={`ml-auto w-4 text-zinc-700 transition-all ${isActive ? "translate-x-1 text-accent-cyan" : "opacity-0 group-hover:opacity-100"}`} />
                  </button>
                );
              })}

            </div>
          </div>

          {/* Right Column: Dynamic Illuminated 3D Step Details Screen (Deck style) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[460px]">
            
            {/* Active Card Body Wrapper */}
            <div 
              ref={deckRef} 
              className="style-3d-card-holder flex-1"
              style={{ transformStyle: "preserve-3d" }}
            >
              <AnimatePresence mode="wait">
                {JOURNEY_STEPS.map((step, idx) => {
                  if (selectedIdx !== idx) return null;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="glow-card-cyan rounded-3xl bg-zinc-950/70 border border-zinc-800/60 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] min-h-[380px] flex flex-col justify-between backdrop-blur-md relative overflow-hidden"
                    >
                      {/* Grid overlay for details card */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

                      <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 glow-text-cyan tracking-widest uppercase block mb-1.5">[ PHASENODE 0{idx + 1} // {step.phase.toUpperCase()} ]</span>
                            <h3 className="text-3xl font-display font-medium text-white tracking-wide">{step.title}</h3>
                          </div>
                          <div className="bg-zinc-900/60 border border-zinc-800 px-3.5 py-1.5 rounded-lg text-[10px] font-mono text-zinc-400 select-none whitespace-nowrap">
                            {step.subtitle}
                          </div>
                        </div>

                        <p className="text-sm font-sans text-zinc-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Technical tags */}
                      <div className="pt-8 border-t border-zinc-900 mt-8 relative z-10">
                        <span className="text-[9px] font-mono text-zinc-550 block mb-3.5 uppercase tracking-widest font-bold">Systems & Technologies Acquired:</span>
                        <div className="flex flex-wrap gap-2">
                          {step.techKeywords.map((kw, i) => (
                            <span 
                              key={i} 
                              className="bg-[#0b0c10] border border-cyan-500/15 text-cyan-300 px-3 py-1 rounded-lg text-[10px] font-mono tracking-wide"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Pagination / Manual Deck Controls at Bottom */}
            <div className="flex justify-between items-center mt-6 px-1 z-10">
              <span className="text-[10px] font-mono text-zinc-500">
                ACTIVE_NODE: 0{selectedIdx + 1} // 0{JOURNEY_STEPS.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-zinc-400 hover:text-white cursor-pointer hover:border-zinc-700 active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-zinc-400 hover:text-white cursor-pointer hover:border-zinc-700 active:scale-95 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
