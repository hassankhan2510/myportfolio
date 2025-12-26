'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MoveRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-theme-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-mono text-theme-accent-cyan tracking-wider">04. CONTACT</span>
                    <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mt-6 mb-4">
                        Ready to build something <span className="text-theme-accent-purple">real</span>?
                    </h2>
                    <p className="text-xl text-theme-text-muted">
                        Let's talk.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="mailto:contact@hassankhan.me"
                        className="group relative px-8 py-4 bg-white text-theme-void-950 font-bold rounded-full hover:bg-theme-accent-cyan hover:text-white transition-all duration-300 shadow-xl flex items-center gap-2"
                    >
                        <span>Email Me</span>
                        <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                <div className="flex justify-center gap-8 pt-12 border-t border-theme-void-800/50">
                    <a href="https://linkedin.com/in/hassankhan" target="_blank" rel="noopener noreferrer" className="p-3 decoration-0 rounded-xl hover:bg-theme-void-800 transition-colors group">
                        <Linkedin className="w-6 h-6 text-theme-text-muted group-hover:text-white" />
                    </a>
                    <a href="https://github.com/hassankhan" target="_blank" rel="noopener noreferrer" className="p-3 decoration-0 rounded-xl hover:bg-theme-void-800 transition-colors group">
                        <Github className="w-6 h-6 text-theme-text-muted group-hover:text-white" />
                    </a>
                    <a href="mailto:contact@hassankhan.me" className="p-3 decoration-0 rounded-xl hover:bg-theme-void-800 transition-colors group">
                        <Mail className="w-6 h-6 text-theme-text-muted group-hover:text-white" />
                    </a>
                </div>

                <footer className="text-sm text-theme-text-muted/60 pt-24 font-mono">
                    &copy; {new Date().getFullYear()} Hassan Khan. Built with Next.js & Tailwind.
                </footer>
            </div>
        </section>
    );
}
