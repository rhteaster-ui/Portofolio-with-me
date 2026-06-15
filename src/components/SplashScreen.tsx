import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const lines = useMemo(() => [
    "installing terminal interface...",
    "fetching r_hmt identity modules...",
    "mounting virtual_os/visual_os...",
    "compiling project live links...",
    "syncing people + community nodes...",
    "launching portfolio shell..."
  ], []);

  useEffect(() => {
    const lineTimer = window.setInterval(() => {
      setLineIndex((idx) => Math.min(idx + 1, lines.length - 1));
    }, 430);
    const closeTimer = window.setTimeout(() => setVisible(false), 3350);
    return () => {
      window.clearInterval(lineTimer);
      window.clearTimeout(closeTimer);
    };
  }, [lines.length]);

  const progress = Math.min(100, Math.round(((lineIndex + 1) / lines.length) * 100));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="fixed inset-0 z-[999] bg-black text-cyan-100 flex items-center justify-center px-6"
        >
          <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(0,242,254,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.25)_1px,transparent_1px)] bg-[size:38px_38px]" />
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-2xl border border-cyan-500/20 bg-[#02060b]/95 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,242,254,0.12)] relative"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-cyan-500/10 bg-cyan-950/10">
              <div className="flex gap-1.5"><span className="w-2.5 h-2.5 bg-red-400 rounded-full"/><span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"/><span className="w-2.5 h-2.5 bg-emerald-400 rounded-full"/></div>
              <span className="font-mono text-[10px] tracking-[0.35em] text-cyan-300">LOADYY_INSTALLER</span>
            </div>
            <div className="p-6 font-mono text-xs space-y-2 min-h-[260px]">
              <p className="text-zinc-500">$ npm run boot:r_hmt --terminal-style</p>
              {lines.slice(0, lineIndex + 1).map((line, idx) => (
                <motion.p key={line} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className={idx === lineIndex ? "text-cyan-300" : "text-zinc-500"}>
                  &gt; {line} <span className="text-emerald-400">done</span>
                </motion.p>
              ))}
              <div className="pt-5">
                <div className="flex justify-between text-[10px] text-zinc-500 mb-2"><span>INSTALL_PROGRESS</span><span>{progress}%</span></div>
                <div className="h-2 rounded-full bg-zinc-900 overflow-hidden border border-cyan-500/10">
                  <motion.div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400" animate={{ width: `${progress}%` }} transition={{ duration: 0.35 }} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
