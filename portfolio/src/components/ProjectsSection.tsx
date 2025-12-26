'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <span className="text-sm font-mono text-theme-accent-cyan tracking-wider">03. SELECTED WORKS</span>
                    <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mt-4">
                        Case Studies
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/projects/${project.slug}`} className="group block h-full">
                                <div className="h-full p-8 rounded-3xl bg-theme-void-900 border border-theme-void-800 hover:border-theme-accent-purple/50 transition-all duration-300 flex flex-col relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">

                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-theme-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 flex flex-col h-full space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <span className="text-xs font-mono text-theme-accent-pink uppercase tracking-widest">{project.category}</span>
                                                <h3 className="text-2xl font-display font-medium text-white group-hover:text-theme-accent-cyan transition-colors">{project.title}</h3>
                                            </div>
                                            <span className="text-theme-text-muted group-hover:text-white transition-colors bg-theme-void-800 p-2 rounded-full group-hover:bg-theme-accent-purple">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </span>
                                        </div>

                                        <p className="text-theme-text-muted leading-relaxed line-clamp-3 group-hover:text-theme-text-main transition-colors">
                                            {project.summary}
                                        </p>

                                        <div className="pt-4 mt-auto flex flex-wrap gap-2 text-xs text-theme-text-muted font-mono">
                                            {project.stack.slice(0, 3).map(tech => (
                                                <span key={tech} className="bg-theme-void-950 px-3 py-1 rounded-full border border-theme-void-800 group-hover:border-theme-accent-purple/30 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.stack.length > 3 && (
                                                <span className="px-2 py-1">+ {project.stack.length - 3}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
