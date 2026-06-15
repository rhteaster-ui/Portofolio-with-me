import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MessageSquare, Send, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

interface Message { role: "user" | "assistant"; text: string; }

export default function AiSandbox() {
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<Message[]>([{ role: "assistant", text: "Halo! Aku Mutasi Lab, chat Gemini yang fokus menjawab semua hal tentang R_hmt: profil, project, tujuan belajar, komunitas, dan perjalanan teknologinya." }]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [thinkingProcess, setThinkingProcess] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory]);

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;
    const userMsgText = chatInput;
    setChatInput("");
    const updatedHistory: Message[] = [...chatHistory, { role: "user", text: userMsgText }];
    setChatHistory(updatedHistory);
    setIsChatLoading(true);
    setThinkingProcess(["Membaca database profil R_hmt...", "Mencari relasi project, people, dan community...", "Merangkai jawaban ala terminal yang tetap natural..."]);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: updatedHistory }) });
      if (!res.ok) throw new Error("Mutasi Lab belum bisa menghubungi Gemini.");
      const data = await res.json();
      setChatHistory(prev => [...prev, { role: "assistant", text: data.text || "Belum ada jawaban dari Gemini." }]);
    } catch (err: any) {
      setChatHistory(prev => [...prev, { role: "assistant", text: `Error: ${err.message || "Gagal menghubungi Gemini."}` }]);
    } finally {
      setThinkingProcess([]);
      setIsChatLoading(false);
    }
  };

  return (
    <div id="ai-sandbox" className="glow-card-cyan rounded-2xl bg-black/80 backdrop-blur-xl overflow-hidden border border-zinc-900 shadow-2xl">
      <div className="flex bg-[#070707] border-b border-zinc-900 px-6 py-4 items-center justify-between">
        <div className="flex items-center gap-3"><div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500/80"/><span className="w-3 h-3 rounded-full bg-yellow-500/80"/><span className="w-3 h-3 rounded-full bg-green-500/80"/></div><span className="text-xs font-mono text-zinc-500 tracking-wider">MUTASI_LAB // R_HMT_PROFILE_CHAT</span></div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900 text-accent-cyan"><MessageSquare className="w-3.5 h-3.5" />Gemini Profile Chat</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        <div className="lg:col-span-4 bg-[#090909] border-r border-zinc-900 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-accent-cyan mb-2"><Sparkles className="w-4 h-4" /><h4 className="font-display font-medium text-sm tracking-wider uppercase">Cognitive Profile Bot</h4></div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">Tanyakan apa saja tentang R_hmt. Mutasi Lab membaca database profil, proyek, tujuan, people along the journey, dan community hub.</p>
            <div className="bg-black/40 border border-zinc-900 p-4 rounded-xl space-y-3">
              <div className="flex justify-between text-[11px] font-mono"><span className="text-zinc-500">ACTIVE ENGINE</span><span className="text-zinc-300">Gemini Chat</span></div>
              <div className="flex justify-between text-[11px] font-mono"><span className="text-zinc-500">MAIN FUNCTION</span><span className="text-cyan-300">ABOUT_R_HMT</span></div>
              <div className="flex justify-between text-[11px] font-mono"><span className="text-zinc-500">IMAGE GEN</span><span className="text-zinc-500">DISABLED</span></div>
            </div>
          </div>
          <div className="pt-6 border-t border-zinc-950 mt-6 hidden lg:block"><span className="text-[10px] font-mono text-zinc-600 block">PROFILE_DATABASE_ACTIVE</span><span className="text-[10px] font-mono text-zinc-600 block">NO_IMAGE_GENERATION_PAGE</span></div>
        </div>
        <div className="lg:col-span-8 bg-black/40 p-6">
          <div className="flex flex-col h-[450px] justify-between">
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4 scrollbar-thin">
              {chatHistory.map((msg, idx) => <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}><div className={(msg.role === "user" ? "bg-accent-cyan/10 text-cyan-200 border-accent-cyan/20" : "bg-zinc-900/90 text-zinc-300 border-zinc-800/50") + " max-w-[85%] rounded-xl px-4 py-2.5 text-xs leading-relaxed border"}><span className="text-[10px] font-mono block text-zinc-500 mb-1">{msg.role === "user" ? "VISITOR" : "MUTASI_LAB"}</span><p className="whitespace-pre-wrap">{msg.text}</p></div></motion.div>)}
              {isChatLoading && <div className="bg-cyan-950/10 border border-cyan-500/10 rounded-xl p-3 max-w-[85%] space-y-2"><span className="text-[10px] font-mono text-accent-cyan flex items-center gap-1.5 animate-pulse"><RefreshCw className="w-3" /> Gemini reasoning</span><div className="font-mono text-[10px] text-zinc-500 space-y-1 pl-1 border-l border-zinc-800">{thinkingProcess.map((step, i) => <div key={i}>&gt; {step}</div>)}</div></div>}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSendChat} className="flex gap-2 bg-[#090909] border border-zinc-900 rounded-xl p-1">
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Tanya: R_hmt siapa, project apa saja, tujuannya apa...?" className="flex-1 bg-transparent px-4 py-2 text-xs text-white focus:outline-none placeholder-zinc-600 rounded-lg" disabled={isChatLoading} />
              <button type="submit" disabled={isChatLoading || !chatInput.trim()} className="p-2.5 text-black bg-accent-cyan hover:bg-cyan-400 rounded-lg disabled:bg-zinc-800 disabled:text-zinc-600"><Send className="w-3.5 h-3.5" /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
