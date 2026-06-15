import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MessageSquare, Send, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

interface Message { role: "user" | "assistant"; text: string; }

export default function AiSandbox() {
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<Message[]>([
    { role: "assistant", text: "Halo, saya Mutasi Lab — AI companion R_hmt. Tanya tentang siapa R_hmt, project, tujuan belajar, tools, people, atau komunitas yang ada di perjalanan ini." }
  ]);
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
    setThinkingProcess(["Membaca database identitas R_hmt...", "Mencocokkan project, people, dan community nodes...", "Menyusun jawaban dengan persona Mutasi Lab..."]);

    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: updatedHistory }) });
      if (!res.ok) throw new Error("Gemini chat sedang tidak tersedia.");
      const data = await res.json();
      setChatHistory(prev => [...prev, { role: "assistant", text: data.text || "Tidak ada respons dari Mutasi Lab." }]);
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
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500/80 block"/><span className="w-3 h-3 rounded-full bg-yellow-500/80 block"/><span className="w-3 h-3 rounded-full bg-green-500/80 block"/></div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">MUTASI_LAB // GEMINI_CHAT_ONLY</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900 text-accent-cyan border border-zinc-800"><MessageSquare className="w-3.5 h-3.5" /> Thinking Twin</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        <div className="lg:col-span-4 bg-[#090909] border-r border-zinc-900 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-accent-cyan mb-2"><Sparkles className="w-4 h-4" /><h4 className="font-display font-medium text-sm tracking-wider uppercase">Cognitive Chatbot</h4></div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">Tanya apa saja tentang R_hmt: siapa dia, project apa yang dibuat, tujuan belajar, ekosistem tools, orang di perjalanan, dan komunitas yang ikut membentuk prosesnya.</p>
            <div className="bg-black/40 border border-zinc-900 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center text-[11px] font-mono"><span className="text-zinc-500">ACTIVE ENGINE</span><span className="text-zinc-300">gemini-3.1-pro-preview</span></div>
              <div className="flex justify-between items-center text-[11px] font-mono"><span className="text-zinc-500">PRIMARY FUNCTION</span><span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-950/45 text-accent-cyan border border-cyan-500/10">ABOUT_R_HMT</span></div>
              <div className="flex justify-between items-center text-[11px] font-mono"><span className="text-zinc-500">IMAGE_GENERATOR</span><span className="text-zinc-500">DISABLED</span></div>
            </div>
          </div>
          <div className="pt-6 border-t border-zinc-950 mt-6 hidden lg:block"><span className="text-[10px] font-mono text-zinc-600 block">DATABASE: PROJECTS / PEOPLE / COMMUNITY</span><span className="text-[10px] font-mono text-zinc-600 block">SYSTEM_PROMPT: PERSONAL_PROFILE_ONLY</span></div>
        </div>

        <div className="lg:col-span-8 bg-black/40 flex flex-col justify-between p-6">
          <div className="flex flex-col h-[400px] justify-between lg:h-[450px]">
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4 scrollbar-thin">
              {chatHistory.map((msg, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={"max-w-[85%] rounded-xl px-4 py-2.5 text-xs font-sans leading-relaxed " + (msg.role === "user" ? "bg-accent-cyan/10 text-cyan-200 border border-accent-cyan/20" : "bg-zinc-900/90 text-zinc-300 border border-zinc-800/50")}>
                    <span className="text-[10px] font-mono block text-zinc-500 mb-1">{msg.role === "user" ? "VISITOR" : "MUTASI_LAB"}</span>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              {isChatLoading && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-cyan-950/10 border border-cyan-500/10 rounded-xl p-3 max-w-[85%] space-y-2"><span className="text-[10px] font-mono text-accent-cyan glow-text-cyan flex items-center gap-1.5 animate-pulse"><RefreshCw className="w-3" /> Mutasi Lab Thinking</span><div className="font-mono text-[10px] text-zinc-500 space-y-1 pl-1 border-l border-zinc-800">{thinkingProcess.map((step, i) => <div key={i} className="animate-pulse">&gt; {step}</div>)}</div></motion.div>}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSendChat} className="flex gap-2 relative bg-[#090909] border border-zinc-900 rounded-xl p-1">
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Tanya tentang R_hmt, project, tujuan, atau komunitas..." className="flex-1 bg-transparent px-4 py-2 text-xs text-white focus:outline-none placeholder-zinc-600 rounded-lg" disabled={isChatLoading} />
              <button type="submit" disabled={isChatLoading || !chatInput.trim()} className="p-2.5 text-black bg-accent-cyan hover:bg-cyan-400 rounded-lg cursor-pointer transition-all disabled:bg-zinc-800 disabled:text-zinc-600 self-center"><Send className="w-3.5 h-3.5" /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
