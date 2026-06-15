import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize GoogleGenAI SDK
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// AI Chat endpoint with "High Thinking"
app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Messages array is required" });
      return;
    }

    const systemInstruction = `Kamu adalah Mutasi Lab, chatbot Gemini untuk menjelaskan R_hmt/Rohmat kepada pengunjung. Fungsi utama kamu hanya menjawab tentang R_hmt: siapa dia, tujuan, perjalanan belajar, project, komunitas, people along the journey, tools, dan filosofi. Jika user meminta hal di luar profil R_hmt, jawab singkat lalu arahkan kembali ke konteks R_hmt.

Database profil:
- R_hmt adalah pelajar MA dari Indonesia yang mengeksplorasi teknologi secara otodidak & mandiri.
- Identitas: technology explorer, vibe coder, AI workflow builder, independent product builder.
- Filosofi: Saya tidak berusaha menguasai seluruh teknologi yang ada. Saya lebih tertarik memahami bagaimana teknologi saling terhubung, bagaimana sebuah ide dapat diwujudkan, dan bagaimana rasa penasaran bisa berubah menjadi sesuatu yang nyata. Bagi saya, setiap project bukan sekadar hasil akhir, melainkan bagian dari proses eksplorasi yang terus berjalan.
- Cara belajar: rasa penasaran, terminal, error, eksperimen, AI collaboration, deploy, lalu improve.
- Tools AI: ChatGPT, Claude, Gemini, DeepSeek, Kimi, Qwen. Builders: GitHub Copilot, Lovable, v0, Devin, Google AI Studio. Infrastruktur: Railway, Supabase, Netlify, Vercel, Infinity. Environment: GitHub, Termux, Reqable.
- Project utama: Analisis Tanaman, HD Upscale, Repo Flow, Fake Loby ML, Image To Prompt, Cek Kartu, Indosawit.News v2, Screenshot Web. Arsip: QuickFake, Soundify, Web Anime.
- Fake Loby ML: https://fake-loby-ml-nine.vercel.app/ dibuat sebagai module HTML Canvas.
- People: SHADOWNEX, hmmodzvip, iboyCloud, reiz_riz, Zakrenz, Ditzzx, Ramadhan Store, Tenkz, Thxyz404.
- Community Hub: COMMUNITY, BELAJAR CODING & BAHAS ANIME, Scrape Collection, Promosi, Promosi v2, Bots Lab.

Tone: Bahasa Indonesia natural, ramah, terminal/cyber style secukupnya, tidak berlebihan. Jawab jelas dan padat, tapi tetap informatif.`;

    // Map message history into standard structure
    const contents = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

    // Call gemini-3.1-pro-preview with HIGH Thinking Level as requested
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH
        }
        // Do not set maxOutputTokens, as requested
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Chat API error:", error);
    res.status(500).json({ error: error.message || "An error occurred with Gemini call." });
  }
});

// Image Generation endpoint
app.post("/api/generate-image", async (req: Request, res: Response) => {
  try {
    const { prompt, aspectRatio, imageSize, quality } = req.body;
    if (!prompt) {
      res.status(400).json({ error: "Prompt is required" });
      return;
    }

    // Determine target model
    // General cases: gemini-3.1-flash-image-preview
    // Studio quality: gemini-3-pro-image-preview
    const targetModel = quality === "studio" ? "gemini-3-pro-image-preview" : "gemini-3.1-flash-image-preview";

    console.log(`Generating image using ${targetModel} with ratio ${aspectRatio} and size ${imageSize}`);

    const response = await ai.models.generateContent({
      model: targetModel,
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio || "1:1",
          imageSize: imageSize || "1K"
        }
      }
    });

    // Locate the inline image part
    let base64Image = "";
    if (response.candidates && response.candidates[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          base64Image = part.inlineData.data;
          break;
        }
      }
    }

    if (!base64Image) {
      res.status(500).json({ error: "Failed to generate image bytes. Please try another prompt." });
      return;
    }

    res.json({ imageUrl: `data:image/png;base64,${base64Image}` });
  } catch (error: any) {
    console.error("Image generation error:", error);
    res.status(500).json({ error: error.message || "Error during image generation." });
  }
});

// Main Server Setup & Vite integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on port ${PORT} with environment ${process.env.NODE_ENV}`);
  });
}

startServer();
