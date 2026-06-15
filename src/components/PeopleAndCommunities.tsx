import React, { useRef, useState, useEffect } from "react";
import { PEOPLE, COMMUNITIES } from "../data";
import { Person, Community } from "../types";
import { Github, Users, HelpCircle, MessageSquare, ArrowUpRight, Zap, Target } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";

export default function PeopleAndCommunities() {
  return (
    <section id="network" className="py-32 px-6 select-none bg-transparent min-h-screen flex flex-col justify-center border-t border-zinc-950">
      <div className="max-w-6xl mx-auto w-full space-y-32">
        
        {/* Module 1: People Along The Journey */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#fab011] bg-amber-950/20 border border-amber-550/10 px-3 py-1 rounded-full uppercase">[ COGNITIVE NETWORK // KOLABORATUR CLUSTERS ]</span>
            <h2 className="text-5xl font-display font-medium text-white tracking-widest uppercase">PEOPLE ALONG THE JOURNEY</h2>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto font-sans leading-relaxed">
              Jejaring sosial pengembang independen, kontributor repositori terbuka, dan rekan kolaborasi erat R_hmt di berbagai proyek digital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PEOPLE.map((p, i) => (
              <div key={p.name} className="w-full">
                <InteractivePersonCard person={p} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Module 2: Communities */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded-full uppercase">[ ACTIVE OUTPOSTS // PUSAT AFILIASI ]</span>
            <h2 className="text-5xl font-display font-medium text-white tracking-widest uppercase">COMMUNITIES</h2>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto font-sans leading-relaxed">
              Keterlibatan aktif R_hmt dalam perkumpulan peretas visual, automation bots lab, serta forum belajar rekayasa kode secara mandiri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITIES.map((c, idx) => (
              <div key={c.name}>
                <InteractiveCommunityCard community={c} idx={idx} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// 3D Interactive Card for People with high-tech syntactic text-scrambler
function InteractivePersonCard({ person, index }: { person: Person; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState(person.role);
  const [open, setOpen] = useState(false);
  const isHovered = useRef(false);

  // High-Tech Scrambling/Decrypting interactive animation
  useEffect(() => {
    setDisplayText(person.role);
  }, [person.role]);

  const triggerDecrypt = () => {
    isHovered.current = true;
    const targetText = person.role;
    const chars = "10#%@&ZX$<>[]_/*!+?=";
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText((current) => {
        return targetText
          .split("")
          .map((letter, idx) => {
            if (idx < iteration) {
              return letter;
            }
            if (letter === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });
      
      if (iteration >= targetText.length) {
        clearInterval(interval);
        setDisplayText(targetText);
      }
      iteration += 1 / 2;
    }, 24);

    return () => clearInterval(interval);
  };

  const resetDecrypt = () => {
    isHovered.current = false;
    setDisplayText(person.role);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) - 0.5;
    const yPercent = (y / height) - 0.5;

    gsap.to(card, {
      rotateY: xPercent * 24,
      rotateX: -yPercent * 24,
      transformPerspective: 800,
      translateY: -4,
      scale: 1.03,
      duration: 0.35,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    resetDecrypt();

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      translateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={triggerDecrypt}
      onMouseLeave={handleMouseLeave}
      onClick={() => setOpen(true)}
      className="glow-card-blue bg-[#01060b]/80 rounded-2xl border border-cyan-500/15 p-5 flex flex-col items-center text-center relative overflow-hidden select-none cursor-pointer group min-h-[300px] shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* High-tech scanning laser overlay */}
      <div className="absolute top-0 left-0 right-0 h-[1.2px] bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent animate-scan shadow-[0_0_8px_#00f2fe] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-20"></div>

      {/* Grid coordinate helper anchors */}
      <span className="absolute top-2 left-2 text-[8px] font-mono text-cyan-500/40 select-none">P_0{index + 1}</span>
      <span className="absolute top-2 right-2 text-[8px] font-mono text-cyan-500/40 select-none">PORT_{3000 + index}</span>

      <div className="absolute top-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>

      {/* Avatar Node Block */}
      <div className="relative mb-4 mt-2" style={{ transform: "translateZ(35px)" }}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#001c2b] to-[#010408] border border-cyan-500/30 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(0,242,254,0.15)] group-hover:border-cyan-400 transition-colors duration-450">
          <img
            src={person.avatarUrl || `/gambar/${person.avatar || "pp-dev.png"}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallbackId = `person-avatar-3d-${index}`;
              const fb = document.getElementById(fallbackId);
              if (fb) fb.style.display = "flex";
            }}
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          
          {/* Avatar Fallback */}
          <div 
            id={`person-avatar-3d-${index}`} 
            className="absolute inset-0 hidden flex-col items-center justify-center font-display font-bold text-lg text-cyan-400 bg-zinc-950"
          >
            {person.name.charAt(0)}
          </div>
        </div>
        
        {/* Pulsing online network sync indicator */}
        <span className="absolute -bottom-1 -right-0.5 p-1 bg-black text-cyan-400 border border-cyan-550/20 rounded-lg shadow-md">
          <Zap className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
        </span>
      </div>

      <div className="space-y-1 w-full" style={{ transform: "translateZ(20px)" }}>
        <h4 className="text-sm font-display font-medium text-white tracking-wide group-hover:text-cyan-300 transition-colors">{person.name}</h4>
        <span className="text-[9px] font-mono text-cyan-550/80 tracking-widest block">@{person.handle}</span>
      </div>
      
      <div 
        className="text-[10px] text-zinc-300 font-mono mt-5 w-full leading-relaxed bg-[#030a12]/95 px-3.5 py-2.5 rounded-xl border border-cyan-500/10 min-h-[58px] flex items-center justify-center transition-all duration-300 group-hover:border-cyan-500/25 group-hover:bg-[#04101e]/80"
        style={{ transform: "translateZ(15px)" }}
      >
        <span className="tracking-wide">Klik card untuk detail social link</span>
      </div>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="w-full max-w-sm rounded-3xl bg-[#05080d] border border-cyan-500/20 p-6 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={person.avatarUrl || `/gambar/${person.avatar || "pp-dev.png"}`} alt={person.name} className="w-24 h-24 mx-auto rounded-full object-cover border border-cyan-500/30 mb-4" referrerPolicy="no-referrer" />
              <h3 className="text-xl font-display text-white tracking-wider">{person.name}</h3>
              <p className="text-xs font-mono text-zinc-500 mb-5">@{person.handle}</p>
              <p className="text-xs text-zinc-400 mb-5">{person.role}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {person.socials.map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl border border-zinc-800 bg-black/50 flex items-center justify-center hover:border-cyan-400 transition-all" title={social.label}>
                    <img src={social.iconUrl} alt={social.label} className="w-6 h-6 object-contain" referrerPolicy="no-referrer" />
                  </a>
                ))}
              </div>
              <button onClick={() => setOpen(false)} className="mt-6 px-4 py-2 rounded-xl bg-zinc-900 text-xs font-mono text-zinc-300">Tutup</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Node status data metric bar */}
      <div className="w-full pt-3 mt-4 border-t border-zinc-900/40 flex justify-between items-center text-[8px] font-mono text-zinc-650" style={{ transform: "translateZ(8px)" }}>
        <span className="uppercase tracking-widest">[ DECRYPT_STATUS: {isHovered.current ? "RESOLVING" : "LOCK"} ]</span>
        <span className="text-cyan-500/50">SYS_SECURE</span>
      </div>
    </div>
  );
}

// 3D Interactive Card for Communities
function InteractiveCommunityCard({ community, idx }: { community: Community; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) - 0.5;
    const yPercent = (y / height) - 0.5;

    gsap.to(card, {
      rotateY: xPercent * 18,
      rotateX: -yPercent * 18,
      transformPerspective: 800,
      translateY: -4,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      translateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => community.url && window.open(community.url, "_blank", "noopener,noreferrer")}
      className="glow-card-cyan bg-zinc-950/20 border border-zinc-900 p-8 flex flex-col justify-between overflow-hidden relative group select-none cursor-pointer rounded-2xl min-h-[290px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="px-2.5 py-1 bg-cyan-950/20 text-[#00f2fe] border border-cyan-500/10 rounded-lg text-[9px] font-mono tracking-widest font-bold uppercase">
            HUB_POINT 0{idx + 1}
          </span>
          <Users className="w-4 h-4 text-zinc-700 group-hover:text-accent-cyan transition-colors" />
        </div>

        <div style={{ transform: "translateZ(25px)" }}>
          <h3 className="text-lg font-display font-medium text-white tracking-wider group-hover:text-accent-cyan transition-colors">
            {community.name}
          </h3>
          <h4 className="text-xs text-[#00f2fe]/80 font-mono mt-1 uppercase tracking-wide">{community.title}</h4>
        </div>

        <p className="text-xs text-zinc-500 leading-relaxed font-sans">{community.tagline}</p>
      </div>

      <div className="pt-6 border-t border-zinc-900/60 mt-6 flex justify-between items-center text-[9px] font-mono text-zinc-600">
        <span className="uppercase tracking-widest">{community.status || "Buka WhatsApp Hub"}</span>
        <ArrowUpRight className="w-4 h-4 text-zinc-650 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </div>
  );
}
