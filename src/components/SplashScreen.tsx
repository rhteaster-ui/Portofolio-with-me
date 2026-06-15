import { motion } from "motion/react";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 2.9, duration: 0.7 }}
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(0,242,254,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,254,.22) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <motion.div className="w-[min(90vw,620px)] rounded-2xl border border-cyan-500/20 bg-zinc-950/80 shadow-[0_0_60px_rgba(0,242,254,.14)] font-mono overflow-hidden"
        initial={{ y: 22, scale: .96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} transition={{ duration: .55 }}>
        <div className="px-4 py-3 border-b border-zinc-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-400" /><span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-[10px] text-zinc-500 tracking-widest">R_HMT_BOOT_TERMINAL</span>
        </div>
        <div className="p-7 text-sm leading-8">
          <p className="text-zinc-500">&gt; initializing virtual_os...</p>
          <p className="text-cyan-300 typewriter-splash">hi, im</p>
          <p className="text-5xl font-display tracking-widest text-white glow-text-cyan">R_HMT</p>
          <p className="text-emerald-300">&gt; loading curiosity modules [OK]</p>
          <p className="text-zinc-400">&gt; entering portfolio interface...</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
