import React, { useState, useEffect, useRef } from "react";
import { ECOSYSTEM } from "../data";
import { Sparkles, HelpCircle, HardDrive, MessageSquare, Terminal, RefreshCw, Zap, Radio, Globe, Layers, Database, Code, Activity, Github, Command } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState<"AI Tools" | "Builders" | "Infrastructure" | "Environment">("AI Tools");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const orbitalRef = useRef<HTMLDivElement>(null);

  const selectedGroup = ECOSYSTEM.find(g => g.category === activeTab);

  // Floating ambient drifts using GSAP
  useEffect(() => {
    if (!orbitalRef.current) return;
    
    // Slow, infinite organic floating movement for the central cluster
    const ctx = gsap.context(() => {
      gsap.to(".orbital-cluster", {
        y: "random(-10, 10)",
        x: "random(-10, 10)",
        rotation: "random(-4, 4)",
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });
    }, orbitalRef);

    return () => ctx.revert();
  }, [activeTab]);

  const getToolIcon = (iconName: string, active: boolean) => {
    const cls = `w-5 h-5 transition-all duration-300 ${active ? 'text-accent-cyan scale-110' : 'text-zinc-650'}`;
    switch(iconName) {
      case "MessageSquareCode":
        return <MessageSquare className={cls} />;
      case "Workflow":
        return <Zap className={cls} />;
      case "Sparkles":
        return <Sparkles className={cls} />;
      case "Brain":
        return <Radio className={cls} />;
      case "FileSpreadsheet":
        return <HardDrive className={cls} />;
      case "Terminal":
        return <Terminal className={cls} />;
      case "Code":
        return <Code className={cls} />;
      case "Layout":
        return <Layers className={cls} />;
      case "Cpu":
        return <Radio className={cls} />;
      case "Binary":
        return <Terminal className={cls} />;
      case "Cloud":
        return <Zap className={cls} />;
      case "Database":
        return <Database className={cls} />;
      case "Globe":
        return <Globe className={cls} />;
      case "Github":
        return <Github className={cls} />;
      case "Command":
        return <Command className={cls} />;
      case "Activity":
        return <Activity className={cls} />;
      default:
        return <HelpCircle className={cls} />;
    }
  };

  return (
    <section id="ecosystem" className="py-32 px-6 select-none bg-transparent min-h-screen flex flex-col justify-center relative overflow-hidden">
      
      {/* Background ambient elements */}
      <div className="absolute inset-0 bg-transparent opacity-40"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#4facfe] bg-[#1e293b]/30 border border-blue-500/10 px-3.5 py-1.5 rounded-full uppercase">[ MODERN INFRASTRUCTURE NETWORK ]</span>
          <h2 className="text-5xl font-display font-medium text-white tracking-widest uppercase">DIGITAL ECOSYSTEM</h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-sans leading-relaxed">
            Menghubungkan berbagai pipeline cerdas, model kognitif AI, server tangguh, dan lingkungan tools penunjang produktivitas tinggi.
          </p>
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-20 bg-zinc-950/80 border border-zinc-900 p-1 rounded-2xl max-w-lg mx-auto backdrop-blur">
          {(["AI Tools", "Builders", "Infrastructure", "Environment"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4.5 py-2.5 text-xs font-mono rounded-xl cursor-pointer transition-all ${activeTab === cat ? "bg-zinc-900 text-white font-semibold shadow border border-zinc-850" : "text-zinc-500 hover:text-zinc-350"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Central interactive grid & Interactive Node map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Node branched map utilizing SVG and interactive CSS coords */}
          <div ref={orbitalRef} className="lg:col-span-6 flex justify-center items-center h-[420px]">
            <div className="relative w-full max-w-[420px] aspect-square rounded-full border border-zinc-950/40 flex items-center justify-center bg-black/5 ambient-inner-glow orbital-cluster">
              
              {/* Outer glowing orbital rotating rings */}
              <div className="absolute inset-0 rounded-full border border-zinc-900/30 border-dashed animate-[spin_50s_linear_infinite]"></div>
              <div className="absolute inset-10 rounded-full border border-dashed border-zinc-900/20 animate-[spin_30s_linear_reverse_infinite]"></div>
              
              {/* Central Primary Node */}
              <div className="w-28 h-28 rounded-full bg-zinc-950 border border-zinc-800/80 flex flex-col items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.8)] group z-20 hover:border-accent-cyan transition-all duration-300">
                <div className="absolute w-24 h-24 rounded-full bg-accent-cyan/5 blur-lg pointer-events-none group-hover:bg-accent-cyan/15"></div>
                <span className="text-[10px] font-mono text-zinc-550 tracking-widest font-bold">CORE</span>
                <span className="text-xs font-display font-medium text-white tracking-widest mt-0.5">R_HMT</span>
              </div>

              {/* Branched Peripheral Nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {selectedGroup?.items.map((_, idx, arr) => {
                  const len = arr.length;
                  const angle = (idx * 2 * Math.PI) / len;
                  const active = hoveredNode === _.name;
                  
                  // Radius target
                  const r = 145;
                  // SVG coordinates (centered 210, 210)
                  const cx = 210 + r * Math.cos(angle);
                  const cy = 210 + r * Math.sin(angle);

                  return (
                    <line
                      key={idx}
                      x1={210}
                      y1={210}
                      x2={cx}
                      y2={cy}
                      stroke={active ? "rgba(0, 242, 254, 0.45)" : "rgba(30, 30, 30, 0.25)"}
                      strokeWidth={active ? 1.5 : 1}
                      strokeDasharray={active ? "5 3" : "none"}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Overlay elements */}
              {selectedGroup?.items.map((item, idx, arr) => {
                const len = arr.length;
                const angle = (idx * 2 * Math.PI) / len;
                const active = hoveredNode === item.name;
                
                const r = 145;
                const tx = r * Math.cos(angle);
                const ty = r * Math.sin(angle);

                return (
                  <button
                    key={item.name}
                    onMouseEnter={() => setHoveredNode(item.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      transform: `translate(${tx}px, ${ty}px)`
                    }}
                    className={`absolute w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer z-10 p-1 ${active ? "bg-black border border-accent-cyan shadow-[0_0_15px_rgba(0,242,254,0.4)] scale-115" : "bg-zinc-950 border border-zinc-900 shadow-md hover:border-zinc-700 hover:scale-105"}`}
                  >
                    {getToolIcon(item.iconName, active)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Connected Details Grid Pane */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-mono text-zinc-550 tracking-widest uppercase block mb-2 px-1">ACTIVE COMPONENTS:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedGroup?.items.map((item) => {
                const isHovered = hoveredNode === item.name;
                return (
                  <div
                    key={item.name}
                    onMouseEnter={() => setHoveredNode(item.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`p-6 rounded-2xl border transition-all duration-300 bg-zinc-950/30 backdrop-blur relative overflow-hidden ${isHovered ? "border-[#4facfe] shadow-[0_10px_30px_rgba(79,172,254,0.08)] -translate-y-1 bg-black/40" : "border-zinc-900"}`}
                  >
                    {/* Glowing highlight */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-[#4facfe]/3 rounded-bl-full pointer-events-none transition-all duration-300 ${isHovered ? "opacity-100 scale-110" : "opacity-0"}`}></div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2.5 rounded-xl border leading-none ${isHovered ? "bg-[#4facfe]/10 border-[#4facfe]/20 text-white" : "bg-black border-zinc-900 text-zinc-650"}`}>
                        {getToolIcon(item.iconName, isHovered)}
                      </div>
                      <h4 className="text-sm font-display font-medium text-white tracking-wide">{item.name}</h4>
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
