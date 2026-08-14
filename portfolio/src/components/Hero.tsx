'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24 relative overflow-hidden bg-theme-void-950">
            {/* Background decoration - Deep Tech Grid */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-theme-accent-cyan/10 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-theme-accent-purple/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="max-w-6xl w-full z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 space-y-8 text-center lg:text-left"
                >
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme-void-800 bg-theme-void-900/50 backdrop-blur-md mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-theme-accent-cyan animate-pulse" />
                            <span className="text-xs font-mono text-theme-text-muted uppercase tracking-wider">Systems Architect & Researcher</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[1.05]">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent-cyan via-white to-theme-accent-purple drop-shadow-sm">intelligent</span> systems that scale.
                        </h1>
                        <p className="text-lg md:text-xl text-theme-text-muted max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
                            I build AI-powered tools, autonomous agents, and deep-tech research prototypes—optimized for performance, reliability, and real-world impact.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Link
                            href="#research"
                            className="px-8 py-4 bg-white text-theme-void-950 font-bold rounded-full hover:bg-theme-accent-cyan hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                        >
                            View Deep-Tech
                        </Link>
                        <a
                            href="http://localhost:8080"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-theme-void-800 bg-theme-void-900/50 backdrop-blur-md text-theme-text-main font-medium rounded-full hover:bg-theme-void-800 hover:border-theme-accent-purple/50 transition-all duration-300 flex items-center gap-2"
                        >
                            <span>Download ATS CV</span>
                            <span className="text-theme-accent-purple">↓</span>
                        </a>
                    </div>
                </motion.div>

                {/* Abstract Geometric Element instead of standard photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group w-[280px] h-[280px] md:w-[400px] md:h-[400px] shrink-0"
                >
                    {/* Concentric rotating rings to simulate a deep-tech "engine" */}
                    <div className="absolute inset-0 border border-theme-accent-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-4 border border-theme-accent-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-8 border border-theme-void-800 rounded-full animate-[spin_10s_linear_infinite]" />
                    
                    <div className="absolute -inset-1 bg-gradient-to-tr from-theme-accent-cyan/10 via-theme-accent-purple/10 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000" />

                    <div className="absolute inset-4 rounded-full overflow-hidden border border-theme-void-800/50 shadow-2xl bg-theme-void-900 flex items-center justify-center backdrop-blur-xl">
                        <div className="w-full h-full relative">
                            <Image
                                src="/images/myprofile.jpeg"
                                alt="Hassan Khan"
                                fill
                                className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Deep tech overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-theme-void-950 via-theme-void-950/20 to-transparent" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
