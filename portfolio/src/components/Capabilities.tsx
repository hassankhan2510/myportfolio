'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Cog, Layout, Database, Cloud, ShieldCheck } from 'lucide-react';

const capabilities = [
    {
        title: 'Autonomous Agents',
        icon: BrainCircuit,
        items: ['Multi-agent orchestration (LangGraph)', 'Tool-use & planning loops', 'Memory systems (RAG + Vector DBs)', 'Self-correcting workflows'],
        color: 'text-theme-accent-purple'
    },
    {
        title: 'Deep Learning & RL',
        icon: Cpu,
        items: ['Custom architecture design (PyTorch)', 'Reinforcement Learning (PPO, DQN)', 'Fine-tuning LLMs (LoRA/QLoRA)', 'Computer Vision pipelines'],
        color: 'text-theme-accent-cyan'
    },
    {
        title: 'AI Security & Safety',
        icon: ShieldCheck,
        items: ['Adversarial attack defense', 'Prompt injection guardrails', 'PII detection & masking', 'Ethical AI alignment'],
        color: 'text-theme-accent-pink'
    },
    {
        title: 'Enterprise Automation',
        icon: Cog,
        items: ['High-throughput n8n workflows', 'Human-in-the-loop systems', 'Intellligent document processing', 'API integration hubs'],
        color: 'text-theme-accent-purple'
    },
    {
        title: 'Full-Stack AI Apps',
        icon: Layout,
        items: ['Real-time streaming UIs', 'Chat interfaces (React/Next.js)', 'Edge AI deployment', 'Scalable backend architecture'],
        color: 'text-theme-accent-cyan'
    },
    {
        title: 'MLOps & Infrastructure',
        icon: Cloud,
        items: ['Model serving & monitoring', 'Docker & Kubernetes', 'GPU cluster management', 'CI/CD for ML pipelines'],
        color: 'text-theme-accent-pink'
    }
];

export default function Capabilities() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16">
                    <span className="text-sm font-mono text-theme-accent-pink tracking-wider">02. CAPABILITIES</span>
                    <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mt-4">
                        Outcome-Based Expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-theme-void-900/50 border border-theme-void-800 backdrop-blur-md hover:border-theme-accent-purple/30 transition-all group hover:bg-theme-void-800/80 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-theme-void-950 flex items-center justify-center mb-6 border border-theme-void-800 group-hover:border-theme-accent-purple/50 transition-colors shadow-lg`}>
                                <cap.icon className={`w-7 h-7 ${cap.color} group-hover:scale-110 transition-transform duration-300`} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-4">{cap.title}</h3>
                            <ul className="space-y-3">
                                {cap.items.map(item => (
                                    <li key={item} className="text-sm text-theme-text-muted flex items-start group-hover:text-theme-text-main transition-colors">
                                        <span className={`mr-2 ${cap.color} opacity-60 text-lg leading-none`}>•</span>
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
