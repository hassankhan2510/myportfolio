'use client';

import { motion } from 'framer-motion';

const skills = {
    "Languages": ["Python (Expert)", "JavaScript / TypeScript", "Rust", "SQL"],
    "Frameworks": ["Next.js", "React", "FastAPI", "PyTorch", "LangChain", "LangGraph"],
    "AI & ML": ["Deep Learning", "Reinforcement Learning (RL)", "LLM Fine-tuning", "Computer Vision"],
    "Agents & Auto": ["Multi-Agent Systems", "n8n Workflows", "Browser Use", "RAG Pipelines"],
    "Security & Cloud": ["AI Guardrails", "Adversarial Defense", "Docker", "Vercel", "Supabase"]
};

export default function TechStack() {
    return (
        <section className="py-24 px-6 border-y border-theme-void-800 bg-theme-void-900/10">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-mono text-theme-accent-purple uppercase tracking-widest">Technical Arsenal</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                    {Object.entries(skills).map(([category, items], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="space-y-6"
                        >
                            <h3 className="text-white font-display font-medium border-b border-theme-void-800 pb-3">{category}</h3>
                            <ul className="space-y-3">
                                {items.map(item => (
                                    <li key={item} className="text-theme-text-muted text-sm hover:text-theme-accent-cyan transition-colors cursor-default">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
