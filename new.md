Experiment in 𝐀𝐈 𝐟𝐢𝐧𝐞-𝐭𝐮𝐧𝐢𝐧𝐠!
I successfully fine-tuned 𝐐𝐰𝐞𝐧𝟐.𝟓-𝟎.𝟓𝐁 𝐛𝐚𝐬𝐞 on English → Urdu financial text translation.
𝐖𝐨𝐫𝐤𝐟𝐥𝐨𝐰 & 𝐃𝐚𝐭𝐚𝐬𝐞𝐭:
Generated 𝟑,𝟎𝟎𝟎+ financial sentences.
Cleaned, labeled, and structured the dataset for translation consistency.
Preprocessed for tokenization and quality checks.

𝐓𝐫𝐚𝐢𝐧𝐢𝐧𝐠 𝐃𝐞𝐭𝐚𝐢𝐥𝐬:
Model: Qwen2.5-0.5B (Base)
Method: LoRA fine-tuning (parameter-efficient)
Epochs: 3
Batch size: 1 (with gradient accumulation 4)
Learning rate: 2e-4
Final training loss: 0.6110
Training steps: 2,340
Samples/sec: 5.25 | Steps/sec: 1.313
Runtime: ~30 min on Colab GPU T4
Observations:
Model accurately translates unseen financial sentences with professional Urdu terms.
Reduced epochs helped mitigate overfitting, improving generalization.
Next steps: Experiment with LoRA adapters + quantization for low-latency deployment in real-time translation & TTS applications.
𝐄𝐱𝐩𝐥𝐨𝐫𝐞, 𝐁𝐮𝐢𝐥𝐝, 𝐄𝐯𝐨𝐥𝐯𝐞.

Part 2: 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 𝐦𝐲 𝐔𝐫𝐝𝐮 𝐅𝐢𝐧𝐚𝐧𝐜𝐞 𝐀𝐈 𝐨𝐧 𝐭𝐡𝐞 𝐄𝐝𝐠𝐞 (𝟗 𝐓𝐨𝐤𝐞𝐧𝐬/𝐬!) ⚡

In my last post, I shared how I fine-tuned Qwen2.5-0.5B to translate Financial English to Urdu.

Now, I've taken it to the next level: Quantization.

I didn't just want a smart model; I wanted a fast one that runs locally. So, I took my custom fine-tuned model and compressed it using `llama.cpp` to q4_0 (4-bit).
 The Results are Massive:
📉 Size: Shrink from 1.08 GB to 330 MB (67% smaller!)
⚡ Speed: ~9.22 tokens/second on standard hardware.
🚀 Load Time: 0.84 seconds (Instant start-up).

This proves you don't need a massive GPU server to run specialized AI agents. specific domain knowledge (Fine-tuning) + Optimization (Quantization) = High-performance Edge AI.

DeepResearch - AI-Powered Knowledge Engine
DeepResearch Hero Image

🚀 Project Overview
DeepResearch is an advanced research assistant that transforms how users consume complex information. By aggregating content from 50+ global sources and applying domain-specific AI analysis, it turns information overload into actionable insights.

The platform solves the "reading gap" by providing instant, expert-level breakdowns of technical papers, long-form articles, and breaking news.

✨ Key Features
🧠 Smart Briefing & Auto-Explain
Zero-Wait Analysis: A background cron system pre-fetches and analyzes top stories hourly.
Instant Insights: Explanations are cached and ready the moment the user opens the app.
Daily Deep Dives: Curated research papers (ArXiv) and tech news, fully explained.
🔍 Multi-Source Intelligence
Unified Feed: Aggregates 50+ sources including TechCrunch, Dawn, The Verge, and ArXiv.
Cross-Platform Search: Simultaneously searches Google News, Hacker News, Reddit, and ArXiv.
Read Later Queue: A dedicated queue for managing reading lists.
💬 Interactive Research
Deep Explain: One-click analysis using 9 expert personas (e.g., "The Engineer", "The Skeptic", "The Historian").
Chat with Article: Users can ask follow-up questions to the specific article context.
PDF Export: Generate professional PDF reports of any analysis.
🎨 Next-Gen UI/UX
Glassmorphism Design: Modern, frosted-glass aesthetic with 3D depth and tilt effects.
Responsive & Accessible: Fully optimized for mobile, tablet, and desktop.
Dark Mode: System-aware theming with rich contrast.
🛠️ Tech Stack
Frontend: Next.js 16 (App Router), React 19, TypeScript, TailwindCSS 4
Backend: Next.js API Routes, Vercel Serverless
Database: Supabase (PostgreSQL)
AI/LLM: Groq (Llama 3.3 70B), OpenRouter
Automation: Vercel Cron Jobs
Design: Lucide Icons, Custom CSS Variables
🏗️ System Architecture
Aggregation Layer: Fetches RSS feeds and API data (ArXiv, Reddit, HN).
Intelligence Layer:
Prompt Engineering: Uses a "Master Pedagogy Framework" to ensure consistent, high-quality explanations.
Caching Strategy: Hashes URLs to store and retrieve AI generation, reducing latency and costs.
Delivery Layer: A high-performance React UI that renders Markdown, LaTeX, and interactive components.
💡 Engineering Highlights
Parallel Processing: The Briefing API fetches and analyzes multiple data sources concurrently using Promise.all for sub-second response times (on cache hit).
Robustness: Custom Markdown parsers were written to handle complex table rendering and edge cases in LLM output.
Scalability: Stateless architecture deployable to the edge.
🔮 Future Roadmap
 Voice Mode: Listen to briefings on the go.
 User Accounts: Personalized feeds and history.
 Browser Extension: Explain any page on the web.