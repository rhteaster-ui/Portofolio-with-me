import React from "react";
import { Github, Send, Instagram, Video, MessageCircle, ArrowUp, Compass, Anchor, Cpu } from "lucide-react";
import { motion } from "motion/react";

const CURRENTLY_EXPLORING = [
  "Node.js", "Golang", "AI Agents", "Automation", "System Architecture"
];

const DIGITAL_PRESENCE = [
  { name: "GitHub", url: "https://github.com/", icon: <Github className="w-4 h-4" /> },
  { name: "Telegram", url: "https://t.me/", icon: <Send className="w-4 h-4" /> },
  { name: "Instagram", url: "https://instagram.com/", icon: <Instagram className="w-4 h-4" /> },
  { name: "TikTok", url: "https://tiktok.com/", icon: <Video className="w-4 h-4" /> },
  { name: "WhatsApp Channel", url: "https://whatsapp.com/", icon: <MessageCircle className="w-4 h-4" /> }
];

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="thinker" className="pt-24 pb-16 px-6 bg-gradient-to-b from-[#0d0d0d] via-[#100e0b] to-[#040404] text-white border-t border-zinc-950 flex flex-col justify-center relative overflow-hidden select-none">
      
      {/* Background warm deep glow for the Thinker zone */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-amber-500/3 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full space-y-20 relative z-10">
        
        {/* Module 1: Philosophy (The central quotes) */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">[ LANDASAN FILOSOFI // CORE ETHOS ]</span>
          
          <blockquote className="space-y-4">
            <p className="text-2xl sm:text-3xl font-display font-medium text-zinc-100 tracking-wide leading-relaxed">
              "Saya tidak berusaha untuk langsung menguasai seluruh aspek rekayasa secara brutal. Saya mencari pemahaman mendalam tentang bagaimana teknologi saling terhubung, lalu menggunakannya secara fungsional untuk menciptakan karya yang nyata."
            </p>
            <cite className="text-xs font-mono text-zinc-500 not-italic block mt-4">— R_HMT // TECHNOLOGY EXPLORER</cite>
          </blockquote>
        </div>

        {/* Module 2: Currently Exploring & Digital Presence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-zinc-900/60">
          
          {/* Currently Exploring Grid Column */}
          <div className="md:col-span-6 space-y-6">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-500 animate-pulse" /> SEPAK TERJANG // NOW EXPLORING
            </h4>
            <div className="flex flex-wrap gap-2">
              {CURRENTLY_EXPLORING.map((tech) => (
                <div 
                  key={tech} 
                  className="px-3.5 py-2 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-300 hover:border-amber-500/20 transition-all select-none"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500/40 mr-2"></span>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Digital Presence Grid Column */}
          <div className="md:col-span-6 space-y-6">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#00f2fe] animate-bounce-slow" /> HUB SOSIAL // SOCIAL CHANNELS
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {DIGITAL_PRESENCE.map((presence) => (
                <a
                  key={presence.name}
                  href={presence.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900 hover:border-amber-500/30 text-xs font-mono text-zinc-400 hover:text-white transition-all cursor-pointer"
                >
                  {presence.icon}
                  {presence.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright / credit parameters & Scroll trigger */}
        <div className="pt-16 border-t border-zinc-950/80 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <span className="text-xs font-mono text-zinc-650 tracking-wider block">R_HMT // TECHNOLOGY EXPLORER</span>
            <span className="text-[10px] font-mono text-zinc-750 block mt-1">INDEPENDENT PRODUCT BUILDER &copy; {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-accent-cyan cursor-pointer transition-all active:scale-95 group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
