'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, FlaskConical } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ResearchSection() {
    const researchProjects = projects.filter(p => p.category === 'Deep-Tech Research' || p.category === 'Assistive Tech & Hardware');

    return (
        <section id="research" className="py-32 px-6 bg-theme-void-950 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-20">
                    <span className="text-sm font-mono text-theme-accent-cyan tracking-wider flex items-center gap-2">
                        <FlaskConical className="w-4 h-4" /> 03. RESEARCH
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mt-4">
                        Deep-Tech & Sciences
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {researchProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/projects/${project.slug}`} className="group block h-full">
                                <div className="h-full p-8 rounded-3xl bg-theme-void-900/60 backdrop-blur-sm border border-theme-void-800 hover:border-theme-accent-cyan/50 transition-all duration-500 flex flex-col relative overflow-hidden">
                                    
                                    {/* Tech lines decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-theme-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-theme-accent-cyan transition-colors">{project.title}</h3>
                                                <p className="text-sm font-mono text-theme-accent-purple">{project.subtitle}</p>
                                            </div>
                                            <span className="text-theme-text-muted group-hover:text-white transition-colors">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </span>
                                        </div>

                                        <p className="text-theme-text-muted text-sm leading-relaxed mb-6 group-hover:text-theme-text-main transition-colors">
                                            {project.summary}
                                        </p>

                                        <div className="mt-auto flex flex-wrap gap-2 text-xs font-mono">
                                            {project.stack.map(tech => (
                                                <span key={tech} className="text-theme-accent-cyan/70 bg-theme-accent-cyan/10 px-2 py-1 rounded">
                                                    {tech}
                                                </span>
                                            ))}
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
