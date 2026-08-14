'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
    const workExperience = experiences.filter(e => e.type === 'Experience');

    return (
        <section id="experience" className="py-32 px-6 relative border-t border-theme-void-800 bg-theme-void-900/30">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <span className="text-sm font-mono text-theme-accent-cyan tracking-wider">04. CAREER</span>
                    <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mt-4">
                        Experience & Ventures
                    </h2>
                </div>

                <div className="space-y-12 border-l-2 border-theme-void-800 ml-4 md:ml-0 pl-8 md:pl-12 relative">
                    {workExperience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="absolute -left-[43px] md:-left-[59px] w-6 h-6 md:w-8 md:h-8 bg-theme-void-950 border-2 border-theme-accent-purple rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                                <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-theme-accent-purple" />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-theme-accent-cyan font-mono text-sm mt-1">{exp.company}</p>
                                </div>
                                <span className="text-theme-text-muted text-sm font-mono bg-theme-void-900 px-3 py-1 rounded-full border border-theme-void-800 w-fit">
                                    {exp.date}
                                </span>
                            </div>

                            <ul className="space-y-3 mt-4 text-theme-text-muted">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-theme-accent-purple mr-2 mt-1">▹</span>
                                        <span className="leading-relaxed">{desc}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {exp.link && (
                                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-mono text-theme-accent-cyan hover:text-white transition-colors underline underline-offset-4">
                                    Visit Site →
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
