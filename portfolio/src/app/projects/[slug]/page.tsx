import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen py-24 px-6 md:px-12 selection:bg-zinc-700 selection:text-white">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Navigation */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-100 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Header */}
                <header className="space-y-6 border-b border-zinc-800 pb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <span className="text-zinc-500 font-mono uppercase tracking-widest text-sm">{project.category}</span>
                        <div className="flex gap-2 text-xs font-mono text-zinc-400">
                            {project.stack.map(tech => (
                                <span key={tech} className="bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-bold text-zinc-100 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light">
                        {project.subtitle}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2">
                            <span className="text-xs text-zinc-500 block mb-1 uppercase tracking-widest">Role</span>
                            <span className="text-sm text-zinc-300 font-medium">{project.role}</span>
                        </div>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-zinc-100 text-zinc-900 rounded-lg px-6 py-4 hover:bg-white font-medium transition-colors"
                            >
                                <span>{project.linkText || 'Visit Project'}</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </header>

                {/* Content */}
                <div className="grid md:grid-cols-[1fr_200px] gap-12">
                    <div className="space-y-12 text-zinc-300 leading-relaxed text-lg">
                        <section>
                            <h3 className="text-xl font-display font-medium text-zinc-100 mb-4">Summary</h3>
                            <p className="text-zinc-400">{project.summary}</p>
                        </section>

                        {project.content.problem && (
                            <section>
                                <h3 className="text-xl font-display font-medium text-zinc-100 mb-4">The Problem</h3>
                                <p className="text-zinc-400">{project.content.problem}</p>
                            </section>
                        )}

                        {project.content.solution && (
                            <section>
                                <h3 className="text-xl font-display font-medium text-zinc-100 mb-4">The Solution</h3>
                                <p className="text-zinc-400">{project.content.solution}</p>
                            </section>
                        )}

                        {project.content.coreIdea && (
                            <section>
                                <h3 className="text-xl font-display font-medium text-zinc-100 mb-4">Core Idea</h3>
                                <p className="text-zinc-400">{project.content.coreIdea}</p>
                            </section>
                        )}

                        {/* Dynamic Key Features / Details */}
                        {(project.content.keyFeatures || project.content.technicalDetails) && (
                            <section className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                                <h3 className="text-xl font-display font-medium text-zinc-100 mb-6">Key Contributions</h3>
                                <ul className="space-y-4">
                                    {/* Merge lists if both exist, but usually they are distinct based on type */}
                                    {[...(project.content.keyFeatures || []), ...(project.content.technicalDetails || [])].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-base">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {project.content.results && (
                            <section>
                                <h3 className="text-xl font-display font-medium text-zinc-100 mb-4">Results</h3>
                                <ul className="space-y-2">
                                    {project.content.results.map((item, i) => (
                                        <li key={i} className="text-zinc-400 border-l-2 border-zinc-700 pl-4">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {project.content.impact && (
                            <section>
                                <h3 className="text-xl font-display font-medium text-zinc-100 mb-4">Impact</h3>
                                <p className="text-zinc-400 italic">{project.content.impact}</p>
                            </section>
                        )}
                    </div>

                    {/* Sidebar / Meta (Optional, can add more here later) */}
                    <div className="hidden md:block space-y-8">
                        <div className="sticky top-24">
                            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">About this project</p>
                            <p className="text-sm text-zinc-500">
                                This project represents a key part of my journey in building scalable, intelligent systems.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
