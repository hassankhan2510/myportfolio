'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24 relative overflow-hidden">

            {/* Background decoration - Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-theme-accent-purple/20 rounded-full blur-[128px] animate-pulse-glow" />
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-theme-accent-cyan/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="max-w-6xl w-full z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-8 text-center md:text-left"
                >
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.1]">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent-cyan to-theme-accent-purple">intelligent</span> systems that solve real problems.
                        </h1>
                        <p className="text-lg md:text-xl text-theme-text-muted max-w-2xl leading-relaxed mx-auto md:mx-0">
                            AI engineer focused on automation, agents, and production-ready applications — optimized for performance, reliability, and real-world use.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-theme-accent-cyan hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 border border-theme-accent-purple/50 text-theme-text-main font-medium rounded-full hover:bg-theme-accent-purple/10 hover:border-theme-accent-purple transition-all duration-300 backdrop-blur-sm"
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>

                {/* Image - Floating Prism Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative group w-64 h-64 md:w-96 md:h-96 shrink-0"
                >
                    {/* Rotating colored borders */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-theme-accent-cyan via-theme-accent-purple to-theme-accent-pink rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-theme-void-800/50 shadow-2xl">
                        <Image
                            src="/images/myprofile.jpeg"
                            alt="Hassan Khan"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-theme-void-950/60 to-transparent mix-blend-multiply" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
