import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MessageSquare, Image as ImageIcon, Send, ArrowRight, CornerDownLeft, Maximize2, RefreshCw, Layers, Check, Download, AlertCircle, Eye, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function AiSandbox() {
  const [activeTab, setActiveTab] = useState<"chat" | "imagen">("chat");
  
  // Chat States
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<Message[]>([
    { role: "assistant", text: "Hello! I am R_hmt's Digital Twin, running on Gemini 3.1 Pro with High Cognitive Thinking. Ask me anything about R_hmt's tech exploration, his products like TugasKu Pro, or how he builds software." }
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [thinkingProcess, setThinkingProcess] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Imagen States
  const [imagePrompt, setImagePrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState<string>("1:1");
  const [imageSize, setImageSize] = useState<string>("1K");
  const [imageQuality, setImageQuality] = useState<"standard" | "studio">("standard");
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    const userMsgText = chatInput;
    setChatInput("");
    const updatedHistory: Message[] = [...chatHistory, { role: "user", text: userMsgText }];
    setChatHistory(updatedHistory);
    setIsChatLoading(true);

    // Simulate thinking steps because we are in ThinkingLevel.HIGH
    setThinkingProcess([
      "Initiating Cognitive Thinking Engine...",
      "Analyzing R_hmt context library...",
      "Synthesizing tech profile correlation metadata..."
    ]);

    const thinkTimer1 = setTimeout(() => {
      setThinkingProcess(prev => [...prev, "Filtering ecosystem nodes (supabased tools, low-code agents)..."]);
    }, 1500);

    const thinkTimer2 = setTimeout(() => {
      setThinkingProcess(prev => [...prev, "Formulating systemic human-like response structure..."]);
    }, 3000);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedHistory })
      });

      if (!res.ok) throw new Error("Thinking engine encountered an operational fault.");
      const data = await res.json();
      
      clearTimeout(thinkTimer1);
      clearTimeout(thinkTimer2);
      setThinkingProcess([]);
      
      setChatHistory(prev => [...prev, { role: "assistant", text: data.text || "I was unable to retrieve a response from the cognitive matrix." }]);
    } catch (err: any) {
      clearTimeout(thinkTimer1);
      clearTimeout(thinkTimer2);
      setThinkingProcess([]);
      setChatHistory(prev => [...prev, { role: "assistant", text: `Error: ${err.message || "Failed to contact Gemini."}` }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleGenerateImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imagePrompt.trim() || isImageLoading) return;

    setIsImageLoading(true);
    setGeneratedImageUrl(null);
    setImageError(null);

    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: imagePrompt,
          aspectRatio,
          imageSize,
          quality: imageQuality
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation request cancelled unexpectedly.");

      if (data.imageUrl) {
        setGeneratedImageUrl(data.imageUrl);
      } else {
        throw new Error("Missing image payload in generation return.");
      }
    } catch (err: any) {
      console.error(err);
      setImageError(err.message || "Image generation failed. Try adjustment of details.");
    } finally {
      setIsImageLoading(false);
    }
  };

  const downloadImageHelper = () => {
    if (!generatedImageUrl) return;
    const link = document.createElement("a");
    link.href = generatedImageUrl;
    link.download = `rhmt_explorer_gen_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="ai-sandbox" className="glow-card-cyan rounded-2xl bg-black/80 backdrop-blur-xl overflow-hidden border border-zinc-900 shadow-2xl">
      {/* Sandbox Header */}
      <div className="flex bg-[#070707] border-b border-zinc-900 px-6 py-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">LABORATORY // EXPERIMENT_BOX_V2</span>
        </div>
        <div className="flex bg-zinc-950 p-1 rounded-lg border border-zinc-900">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-all ${activeTab === "chat" ? "bg-zinc-900 text-accent-cyan" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Thinking Twin
          </button>
          <button
            onClick={() => setActiveTab("imagen")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-all ${activeTab === "imagen" ? "bg-zinc-900 text-accent-cyan" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            Neural Imagen
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Control Panel / Details */}
        <div className="lg:col-span-4 bg-[#090909] border-r border-zinc-900 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-accent-cyan mb-2">
              <Sparkles className="w-4 h-4" />
              <h4 className="font-display font-medium text-sm tracking-wider uppercase">
                {activeTab === "chat" ? "Cognitive Chatbot" : "Neural Art Studio"}
              </h4>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              {activeTab === "chat" 
                ? "Engage with R_hmt's simulated mind. Powered by gemini-3.1-pro-preview with Deep Reasoning enabled to navigate structural complexities with multi-phase thinking logic." 
                : "Generate micro-refined artwork on-the-go. Controls size matrices, ratios, and neural fidelity pipelines up to ultra-studio level."
              }
            </p>

            {/* Context Stats / Specs */}
            <div className="bg-black/40 border border-zinc-900 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-zinc-500">ACTIVE ENGINE</span>
                <span className="text-zinc-300">
                  {activeTab === "chat" ? "gemini-3.1-pro-preview" : "gemini-3-pro-image-preview"}
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-zinc-500">THINKING STATE</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${activeTab === "chat" ? "bg-cyan-950/45 text-accent-cyan border border-cyan-500/10" : "bg-neutral-900 text-neutral-500"}`}>
                  {activeTab === "chat" ? "HIGH COGNITIVE" : "INACTIVE"}
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-zinc-500">LATENCY RATIO</span>
                <span className="text-zinc-400">OPTIMIZED 60FPS</span>
              </div>
            </div>

            {/* Imagen Configurations Form */}
            {activeTab === "imagen" && (
              <div className="mt-6 space-y-4">
                {/* Aspect Ratio selector */}
                <div>
                  <label className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    <Sliders className="w-3 h-3 text-zinc-500" /> Aspect Ratio
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {["1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9", "21:9"].map((ratio) => (
                      <button
                        key={ratio}
                        type="button"
                        onClick={() => setAspectRatio(ratio)}
                        className={`py-1 rounded text-[10px] font-mono border transition-all cursor-pointer ${aspectRatio === ratio ? "bg-zinc-800 border-accent-cyan text-accent-cyan" : "bg-black border-zinc-900 text-zinc-500 hover:text-zinc-300"}`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Limit (1K, 2K, 4K) */}
                <div>
                  <label className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    <Layers className="w-3 h-3 text-zinc-500" /> Resolution Target
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {["1K", "2K", "4K"].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setImageSize(size)}
                        className={`py-1 px-3 rounded text-[10px] font-mono border transition-all cursor-pointer ${imageSize === size ? "bg-zinc-800 border-accent-cyan text-accent-cyan font-bold" : "bg-black border-zinc-900 text-zinc-500 hover:text-zinc-300"}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Model selection toggle */}
                <div>
                  <label className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-zinc-500" /> Model Pipeline
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setImageQuality("standard")}
                      className={`py-1.5 text-[10px] font-mono rounded border transition-all cursor-pointer ${imageQuality === "standard" ? "bg-zinc-800 border-accent-blue text-accent-blue" : "bg-black border-zinc-900 text-zinc-500"}`}
                    >
                      3.1 Flash (General)
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageQuality("studio")}
                      className={`py-1.5 text-[10px] font-mono rounded border transition-all cursor-pointer ${imageQuality === "studio" ? "bg-zinc-800 border-amber-500/50 text-amber-400" : "bg-black border-zinc-900 text-zinc-500"}`}
                    >
                      3.0 Pro (Studio)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-zinc-950 mt-6 hidden lg:block">
            <span className="text-[10px] font-mono text-zinc-600 block">CORE_SYSTEM_SECURE_API</span>
            <span className="text-[10px] font-mono text-zinc-600 block">NO_PLAINTEXT_KEYS_EXPOSED</span>
          </div>
        </div>

        {/* Right Active Sandbox Screen */}
        <div className="lg:col-span-8 bg-black/40 flex flex-col justify-between p-6">
          <AnimatePresence mode="wait">
            {activeTab === "chat" ? (
              // -- CHAT BOX SCREEN --
              <div className="flex flex-col h-[400px] justify-between lg:h-[450px]">
                {/* Messages Panel */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4 scrollbar-thin">
                  {chatHistory.map((msg, idx) => {
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={"max-w-[85%] rounded-xl px-4 py-2.5 text-xs font-sans leading-relaxed " + (msg.role === "user" ? "bg-accent-cyan/10 text-cyan-200 border border-accent-cyan/20" : "bg-zinc-900/90 text-zinc-300 border border-zinc-800/50")}>
                          <span className="text-[10px] font-mono block text-zinc-500 mb-1">
                            {msg.role === "user" ? "VISITOR" : "R_HMT_TWIN"}
                          </span>
                          <p className="whitespace-pre-wrap">{msg.text}</p>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* High thinking process log */}
                  {isChatLoading ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-cyan-950/10 border border-cyan-500/10 rounded-xl p-3 max-w-[85%] space-y-2"
                    >
                      <span className="text-[10px] font-mono text-accent-cyan glow-text-cyan flex items-center gap-1.5 animate-pulse">
                        <RefreshCw className="w-3" /> Cognitive Reasoning Sandbox
                      </span>
                      <div className="font-mono text-[10px] text-zinc-500 space-y-1 pl-1 border-l border-zinc-800">
                        {thinkingProcess.map((step, i) => {
                          return (
                            <div key={i} className="animate-pulse">
                              &gt; {step}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ) : null}
                  <div ref={chatEndRef} />
                </div>

                {/* Input Container */}
                <form onSubmit={handleSendChat} className="flex gap-2 relative bg-[#090909] border border-zinc-900 rounded-xl p-1">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Inquire metadata regarding R_hmt's ecosystem..."
                    className="flex-1 bg-transparent px-4 py-2 text-xs text-white focus:outline-none placeholder-zinc-600 rounded-lg"
                    disabled={isChatLoading}
                  />
                  <button
                    type="submit"
                    disabled={isChatLoading || !chatInput.trim()}
                    className="p-2.5 text-black bg-accent-cyan hover:bg-cyan-400 rounded-lg cursor-pointer transition-all disabled:bg-zinc-800 disabled:text-zinc-600 self-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            ) : (
              // -- IMAGEN STUDIO SCREEN --
              <div className="flex flex-col h-[400px] justify-between lg:h-[450px]">
                {/* Visual Image Display Frame */}
                <div className="flex-1 bg-zinc-950 rounded-xl border border-zinc-900 flex flex-col items-center justify-center p-4 min-h-[220px] relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isImageLoading ? (
                      <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center z-10 flex flex-col items-center gap-3"
                      >
                        <RefreshCw className="w-8 h-8 text-accent-cyan animate-spin" />
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest animate-pulse">
                          rendering pixels ({imageSize}) ...
                        </span>
                      </motion.div>
                    ) : generatedImageUrl ? (
                      <motion.div
                        key="image-show"
                        className="relative group w-full h-full flex items-center justify-center"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                      >
                        <img
                          src={generatedImageUrl}
                          alt="Neural Generated Output"
                          className="max-h-[280px] max-w-full rounded-lg object-contain border border-zinc-800 shadow-2xl z-10"
                          referrerPolicy="no-referrer"
                        />
                        
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3 z-20">
                          <button
                            type="button"
                            onClick={downloadImageHelper}
                            className="bg-black/90 hover:bg-zinc-900 text-white rounded-lg px-3 py-1.5 text-[11px] font-mono border border-zinc-800 flex items-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5 text-accent-cyan" />
                            Download
                          </button>
                        </div>
                      </motion.div>
                    ) : imageError ? (
                      <motion.div
                        key="err"
                        className="text-center text-red-400 p-4 space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <AlertCircle className="w-6 h-6 mx-auto text-red-500" />
                        <p className="text-xs font-mono">{imageError}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        className="text-center text-zinc-600 max-w-md p-6 space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <ImageIcon className="w-8 h-8 mx-auto text-zinc-800" />
                        <p className="text-xs font-display font-medium text-zinc-500">
                          Generate AI custom artwork instantly
                        </p>
                        <p className="text-[10px] text-zinc-600">
                          Specify standard descriptions, choose standard aspect ratio formats and click render structure.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Soft Background Grid Accent in screen */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.7)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0"></div>
                </div>

                {/* Main Image Generation Form */}
                <form onSubmit={handleGenerateImage} className="mt-4 flex gap-2 relative bg-[#090909] border border-zinc-900 rounded-xl p-1">
                  <input
                    type="text"
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="e.g., A minimalist futuristic laptop inside heavy black nebula clouds, photorealistic premium vector layout"
                    className="flex-1 bg-transparent px-4 py-2 text-xs text-white focus:outline-none placeholder-zinc-600 rounded-lg"
                    disabled={isImageLoading}
                  />
                  <button
                    type="submit"
                    disabled={isImageLoading || !imagePrompt.trim()}
                    className="p-2.5 text-black bg-accent-cyan hover:bg-cyan-400 rounded-lg cursor-pointer transition-all disabled:bg-zinc-800 disabled:text-zinc-600 self-center"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
