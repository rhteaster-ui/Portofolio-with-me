import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import EcosystemSection from "./components/EcosystemSection";
import HowIBuildSection from "./components/HowIBuildSection";
import ExplorationsSection from "./components/ExplorationsSection";
import AiSandbox from "./components/AiSandbox";
import PeopleAndCommunities from "./components/PeopleAndCommunities";
import FooterSection from "./components/FooterSection";
import SplashScreen from "./components/SplashScreen";
import { Sparkles, Command, Menu, X, ArrowUpRight, Cpu, HelpCircle, Layers, Workflow, Compass, Network } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [scrollZone, setScrollZone] = useState<"explorer" | "builder" | "thinker">("explorer");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Dynamic GSAP scroll and active navigation tracking
  useEffect(() => {
    // 3D Entrance & Scale triggers for all main sections
    const sections = document.querySelectorAll(".scroll-anim-section");
    sections.forEach((section) => {
      // 3D Perspective Tilt on viewport entry
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 80,
          rotateX: 8,
          scale: 0.96,
          transformPerspective: 1200,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
            toggleActions: "play none none reverse",
          }
        }
      );

      // Parallax shifts on decorative items
      const floaters = section.querySelectorAll(".gsap-parallax");
      floaters.forEach((el) => {
        gsap.to(el, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    });

    // Color transition of canvas element synchronized with ScrollTrigger
    const mainContainer = document.querySelector(".canvas-global");
    if (mainContainer) {
      // Zone 1: Explorer Cyan hue
      gsap.to(mainContainer, {
        backgroundColor: "#03080e", // Glacier Dark Blue
        scrollTrigger: {
          trigger: "#journey",
          start: "top 60%",
          end: "bottom 30%",
          scrub: true,
          onEnter: () => setScrollZone("explorer"),
          onEnterBack: () => setScrollZone("explorer")
        }
      });

      // Zone 2: Builder Cobalt hue
      gsap.to(mainContainer, {
        backgroundColor: "#050d18", // Cold Deep Metallic
        scrollTrigger: {
          trigger: "#ecosystem",
          start: "top 60%",
          end: "bottom 30%",
          scrub: true,
          onEnter: () => setScrollZone("builder"),
          onEnterBack: () => setScrollZone("builder")
        }
      });

      // Zone 3: Thinker Slate dark hue
      gsap.to(mainContainer, {
        backgroundColor: "#020408", // Space Void Grey
        scrollTrigger: {
          trigger: "#network",
          start: "top 60%",
          end: "bottom 20%",
          scrub: true,
          onEnter: () => setScrollZone("thinker"),
          onEnterBack: () => setScrollZone("thinker")
        }
      });
    }

    // Scroll progress bar indicator mapping
    gsap.to(".scroll-progress-indicator", {
      scaleX: 1,
      ease: "none",
      transformOrigin: "left center",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="canvas-global min-h-screen text-white font-sans bg-black overflow-x-hidden relative transition-colors duration-1000">
      
      <SplashScreen />
      {/* Scroll Progress Neon indicator tracker */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-[#00f2fe] to-blue-500 scale-x-0 scroll-progress-indicator z-50"></div>

      {/* Floating Spatial Navigation Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-45 bg-black/60 backdrop-blur-2xl border border-zinc-900/80 px-6 py-4 rounded-full flex items-center justify-between shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
        
        {/* Core Identity Brand Signature */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-[#03080e] border border-zinc-800 flex items-center justify-center group-hover:border-accent-cyan transition-colors">
            <span className="font-display font-medium text-xs tracking-widest text-[#00f2fe] glow-text-cyan">R</span>
          </div>
          <span className="text-xs font-mono tracking-widest font-bold uppercase text-zinc-400 group-hover:text-white transition-colors">R_hmt</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          <button onClick={() => scrollToSection("journey")} className={`hover:text-accent-cyan cursor-pointer transition-colors ${scrollZone === "explorer" ? "text-cyan-300 font-bold" : ""}`}>KRONOLOGI</button>
          <button onClick={() => scrollToSection("ecosystem")} className={`hover:text-accent-cyan cursor-pointer transition-colors ${scrollZone === "builder" ? "text-cyan-300 font-bold" : ""}`}>EKOSISTEM</button>
          <button onClick={() => scrollToSection("how-i-build")} className="hover:text-accent-cyan cursor-pointer transition-colors">ALUR_KERJA</button>
          <button onClick={() => scrollToSection("explorations")} className="hover:text-accent-cyan cursor-pointer transition-colors">EKSPERIMEN</button>
          <button onClick={() => scrollToSection("ai-sandbox")} className="hover:text-accent-cyan cursor-pointer transition-colors text-[#00f2fe] font-bold">MUTASI_LAB</button>
          <button onClick={() => scrollToSection("network")} className={`hover:text-accent-cyan cursor-pointer transition-colors ${scrollZone === "thinker" ? "text-cyan-300 font-bold" : ""}`}>KOLABORATUR</button>
          <button onClick={() => scrollToSection("thinker")} className="hover:text-accent-cyan cursor-pointer transition-colors">ETHOS</button>
        </nav>

        {/* Action Button: Lab Quick Launch */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("ai-sandbox")}
            className="px-4 py-2 border border-cyan-500/20 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan hover:text-black font-mono text-[10px] rounded-full uppercase tracking-widest cursor-pointer transition-all active:scale-95 duration-350 shadow-[0_0_15px_rgba(0,242,254,0.1)]"
          >
            MUTASI_LAB_ACTIVE
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-500 hover:text-white rounded-lg hover:bg-zinc-900 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </header>

      {/* Mobile Menu Panel Expansion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 z-40 pt-32 px-10 flex flex-col space-y-6 text-lg font-display tracking-widest uppercase border-b border-zinc-900"
          >
            <button onClick={() => scrollToSection("journey")} className="text-left text-zinc-400 hover:text-white py-2">01 Kronologi</button>
            <button onClick={() => scrollToSection("ecosystem")} className="text-left text-zinc-400 hover:text-white py-2">02 Ekosistem</button>
            <button onClick={() => scrollToSection("how-i-build")} className="text-left text-zinc-400 hover:text-white py-2">03 Alur Kerja</button>
            <button onClick={() => scrollToSection("explorations")} className="text-left text-zinc-400 hover:text-white py-2">04 Shipped Produk</button>
            <button onClick={() => scrollToSection("ai-sandbox")} className="text-left text-[#00f2fe] glow-text-cyan py-2">05 Mutasi Lab</button>
            <button onClick={() => scrollToSection("network")} className="text-left text-zinc-400 hover:text-white py-2">06 Kolaboratur</button>
            <button onClick={() => scrollToSection("thinker")} className="text-left text-zinc-400 hover:text-white py-2">07 Ethos</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pages Content Sections */}
      <main>
        
        {/* HERO */}
        <HeroSection 
          onExploreJourney={() => scrollToSection("journey")} 
          onViewExplorations={() => scrollToSection("explorations")} 
        />

        {/* ZONE 1 - THE EXPLORER */}
        <JournalIndicator zone="explorer" label="ZONA_01 // PENJELAJAH TEKNOLOGI" icon={<Compass className="w-4 h-4 text-accent-cyan" />} />
        <div className="scroll-anim-section relative">
          <JourneySection />
        </div>

        {/* ZONE 2 - THE BUILDER */}
        <JournalIndicator zone="builder" label="ZONA_02 // ARSITEK DIGITAL" icon={<Cpu className="w-4 h-4 text-accent-cyan animate-pulse-slow" />} />
        
        <div className="scroll-anim-section relative">
          <EcosystemSection />
        </div>
        
        <div className="scroll-anim-section relative">
          <HowIBuildSection />
        </div>
        
        <div className="scroll-anim-section relative">
          <ExplorationsSection />
        </div>

        {/* Real-time Interactive Laboratory Section */}
        <div className="py-24 max-w-5xl mx-auto px-6 scroll-anim-section relative">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00f2fe] bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded-full uppercase">[ MULTI-PANE SANDBOX // KANVAS EKSPERIMEN ]</span>
            <h2 className="text-5xl font-display font-medium text-white tracking-widest uppercase">MUTASI LAB CHAT</h2>
            <p className="text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed">
              Chat dengan Gemini untuk bertanya tentang R_hmt: siapa dia, project apa saja, tujuan, ekosistem belajar, dan perjalanan eksplorasinya.
            </p>
          </div>
          <AiSandbox />
        </div>

        {/* ZONE 3 - THE THINKER */}
        <JournalIndicator zone="thinker" label="ZONA_03 // KOSMOS FILOSOF" icon={<Network className="w-4 h-4 text-accent-cyan" />} />
        
        <div className="scroll-anim-section relative">
          <PeopleAndCommunities />
        </div>
        
        {/* Footers */}
        <FooterSection />

      </main>
    </div>
  );
}

// Micro Zone visual anchor separator
function JournalIndicator({ zone, label, icon }: { zone: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center py-12 relative select-none">
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-2 rounded-full bg-zinc-950 border border-zinc-900 shadow-xl z-10 transition-colors">
        {icon}
        <span className="text-[10px] font-mono tracking-widest text-[#00f2fe]/80 uppercase">{label}</span>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent z-0"></div>
    </div>
  );
}
