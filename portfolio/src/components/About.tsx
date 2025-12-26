'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="py-32 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-theme-accent-purple/5 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-mono text-theme-accent-cyan tracking-wider">01. ABOUT</span>
                    <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mt-4 mb-8 leading-tight">
                        I build AI-powered systems that are <span className="text-theme-accent-purple">meant to be used</span> — not just demonstrated.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 text-theme-text-muted leading-relaxed text-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p>
                            My work sits at the intersection of machine learning, automation, and software engineering. I focus on designing systems that can reason, integrate with real platforms, handle failure, and scale beyond prototypes.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            I’m particularly interested in AI agents, workflow automation, and LLM-driven systems that interact with real interfaces, APIs, and data sources. Instead of isolated models, I build end-to-end systems: from data ingestion and decision logic to deployment and observability.
                        </p>
                    </motion.div>
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="border-l-4 border-theme-accent-pink pl-6 italic text-theme-text-main bg-theme-void-900/50 p-6 rounded-r-xl"
                        >
                            <p>
                                My approach is practical by default. If a system cannot run reliably, scale predictably, or solve a real operational problem, it doesn’t matter how impressive the model is.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
