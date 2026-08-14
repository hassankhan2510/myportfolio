'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Globe2 } from 'lucide-react';

export default function SocialImpact() {
    const impactExperience = experiences.filter(e => e.type === 'Leadership & Impact');

    return (
        <section id="impact" className="py-32 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-theme-void-900/50 to-transparent pointer-events-none" />
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-20">
                    <span className="text-sm font-mono text-theme-accent-pink tracking-wider">05. INITIATIVES</span>
                    <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mt-4">
                        Leadership & Social Impact
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {impactExperience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-theme-void-900 p-8 rounded-3xl border border-theme-void-800 hover:border-theme-accent-pink/40 transition-colors group"
                        >
                            <Globe2 className="w-8 h-8 text-theme-accent-pink mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-sm font-mono text-theme-accent-pink mb-4">{exp.company} <span className="text-theme-text-muted">({exp.date})</span></p>
                            
                            <ul className="space-y-2 text-theme-text-muted text-sm leading-relaxed">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
