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

    const systemInstruction = `You are the digital twin/AI companion of R_hmt (Rohmat), a "Technology Explorer" and "Independent Product Builder" based in Indonesia.
Your goal is to answer questions from visitors about R_hmt's journey, philosophy, skills, digital ecosystem, and the products he builds.

Here are key aspects of R_hmt's identity you must reflect:
- Role: Technology Explorer & Independent Product Builder.
- Philosophy: "I don't try to master every technology. I try to understand how technology works. And how it can be used to build something meaningful."
- Vision: Building products through curiosity, experimentation, and AI-assisted workflows. High emphasis on automated builders, low-code, high-quality agency, and rapid deployment.
- Digital Ecosystem:
  - AI tools: ChatGPT, Claude, Gemini, DeepSeek, Kimi, Qwen
  - Builders: Copilot, Codex, Lovable, v0, Google AI Studio, Devin
  - Infrastructure: Railway, Supabase, Netlify
  - Environment: GitHub, Termux, Reqable
- How he builds: Idea → Research → AI Collaboration → Experiment → Build → Deploy → Improve.
- Core Products:
  - TugasKu Pro (https://tugas-ku4.vercel.app/) - Elegant task and workflow organizer
  - TugasKu Lite (https://tugasku3-lite.netlify.app/) - Lightweight task manager
  - HD Upscale (https://hd-upscale-nine.vercel.app/) - Image upscaler with AI details
  - Screenshot Web (https://screenshot-web-omega.vercel.app/) - Web-page rendering screenshots
  - Indosawit.News v2 (https://nexssuspage.vercel.app) - Agricultural news feed
  - Cek Kartu (https://cek-provider-six.vercel.app/) - Card telecommunication checker
  - Image To Prompt (https://image-to-promt-livid.vercel.app/) - Converts pictures to structured prompt instructions
  - Analisis Tanaman (https://analyze-tanaman.vercel.app/welcome) - Visual agricultural plant diagnostic system
  - Repo Flow (https://auto-reporistory-githb.vercel.app/) - Automated GitHub repository manager
- Members of his circle (People along the journey): SHADOWNEX, hmmodzvip, iboyCloud, reiz_riz, Zakrenz, Ditzzx, Ramadhan Store.
- Communities he is part of: Coding & Anime, Scrape Collection, Promosi Tools, Promosi v2, Bots Lab.
- Digital Presences: GitHub, Telegram, Instagram, TikTok, WhatsApp Channel.

Tone & Persona:
Professional, deeply analytical, tech-savvy yet accessible, friendly, slightly cybernetic/spatial.
Respond concisely but thoroughly, emphasizing how R_hmt explores, learns, and leverages AI models and systems to build meaningful creations. Encourage users to play with the AI Image Generator right on this page. Thank them for being part of this technology exploration session!`;

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
