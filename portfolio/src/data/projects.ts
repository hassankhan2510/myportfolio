export interface Project {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    role: string;
    stack: string[];
    summary: string;
    content: {
        problem?: string;
        solution?: string;
        keyFeatures?: string[];
        technicalDetails?: string[];
        impact?: string;
        coreIdea?: string;
        results?: string[];
        futureDirection?: string;
        ethicalPositioning?: string;
    };
    link?: string;
    linkText?: string;
    category: 'Deep-Tech Research' | 'Enterprise AI Systems' | 'Assistive Tech & Hardware' | 'Full Stack Apps';
}

export const projects: Project[] = [
    {
        id: 'albisight',
        slug: 'albisight',
        title: 'AlbiSight',
        subtitle: 'Assistive Computational Optics Engine',
        role: 'Researcher & Lead Engineer',
        stack: ['PyTorch', 'Differentiable Optics', 'Python'],
        category: 'Deep-Tech Research',
        summary: 'A validated differentiable optics engine that designs personalized corrective lenses tailored to a single person\'s eyes, bypassing mass-produced limitations.',
        content: {
            problem: 'Mass-produced eyewear fails to serve individuals with complex or highly specific visual impairments (like ocular albinism).',
            solution: 'An inverse-design computational engine that optimizes lens topologies specific to the patient.',
            technicalDetails: [
                'Engine passes 8/8 physics ground-truth tests in PyTorch.',
                'Analyzed 1,765 real pediatric eyes.',
                'Currently in simulation stage, preparing for physical lens fabrication.',
                'Two research papers drafted on the methodology.'
            ],
            impact: 'Born from my own lived experience with low vision, this technology aims to bring precision vision to those left behind by standard optometry.'
        },
        link: 'https://albisightlabs.vercel.app/',
        linkText: 'View Venture Site'
    },
    {
        id: 'phononic-armor',
        slug: 'phononic-armor',
        title: 'PhononicArmor',
        subtitle: 'Reusable Impact-Protection Metamaterials',
        role: 'Materials Computation Researcher',
        stack: ['NumPy', 'SciPy', 'Inverse Design', 'Machine Learning'],
        category: 'Deep-Tech Research',
        summary: 'Computationally designed reusable protective padding (negative-stiffness lattices) that absorbs impact 14–36% better than commercial honeycomb at equal mass.',
        content: {
            coreIdea: 'Using machine learning surrogate models and inverse design algorithms to discover novel metamaterial geometries for impact absorption.',
            technicalDetails: [
                'Developed a computational pipeline in NumPy/SciPy.',
                'Achieved 14–36% better energy absorption compared to standard honeycomb structures.',
                'Lattices recover elastically for repeated use (unlike single-use foams).'
            ],
            impact: 'Applications span sports helmets, worker safety gear, and automotive bumpers. Manuscript ready for publication.'
        },
        link: 'https://phononicarmor.vercel.app/',
        linkText: 'View Venture Site'
    },
    {
        id: 'syndar',
        slug: 'syndar',
        title: 'Syndar',
        subtitle: 'Spaceborne SAR Remote-Sensing Concept',
        role: 'Concept Architect',
        stack: ['InSAR', 'Remote Sensing', 'AI Analysis'],
        category: 'Deep-Tech Research',
        summary: 'A satellite-intelligence product concept utilizing Synthetic Aperture Radar (SAR) for property verification and mining monitoring.',
        content: {
            problem: 'Traditional optical satellite imagery fails in poor weather or at night, and lacks granular deformation data.',
            solution: 'An InSAR/SAR based intelligence platform that can monitor ground deformation and verify structures regardless of cloud cover.'
        },
        link: 'https://syndar.vercel.app/',
        linkText: 'View Concept Site'
    },
    {
        id: 'mineguard',
        slug: 'mineguard',
        title: 'MineGuard',
        subtitle: 'Federated Edge AI for Mine Worker Safety',
        role: 'Systems Engineer',
        stack: ['Edge AI', 'Federated Learning', 'C++', 'Microcontrollers'],
        category: 'Deep-Tech Research',
        summary: 'A system that pushes predictive AI into underground mine shafts on low-cost microcontrollers, predicting seismic hazards locally in milliseconds.',
        content: {
            keyFeatures: [
                'Survives network failures that would blind traditional centralized monitoring.',
                'Sub-KB federated model updates for highly constrained network links.',
                'Real-time seismic hazard prediction on the edge.'
            ]
        }
    },
    {
        id: 'nexaura-hms',
        slug: 'nexaura-hms',
        title: 'Nexaura HMS',
        subtitle: 'AI-Native Hospital Management System',
        role: 'Projects Lead',
        stack: ['Next.js', 'PostgreSQL', 'NLP', 'Enterprise AI'],
        category: 'Enterprise AI Systems',
        summary: 'An AI-native hospital management platform for Pakistani healthcare featuring bilingual (English/Urdu) AI clinical scribing.',
        content: {
            keyFeatures: [
                'Live AI clinical scribing for outpatient clinics.',
                'Bilingual English and Urdu support for local healthcare context.',
                'Secure patient data management and robust enterprise architecture.'
            ],
            impact: 'Streamlined clinical workflows for government and corporate healthcare clients in Pakistan.'
        },
        link: 'https://www.nexauragroup.co.uk',
        linkText: 'Nexaura Group'
    },
    {
        id: 'nexaura-qa',
        slug: 'nexaura-qa',
        title: 'SCO Call QA Platform',
        subtitle: 'Enterprise AI Call Quality Assurance',
        role: 'Projects Lead',
        stack: ['Python', 'Speech-to-Text', 'LLMs', 'FastAPI'],
        category: 'Enterprise AI Systems',
        summary: 'Automated quality assurance platform for Pakistan\'s Special Communications Organization (SCO) contact-center operations.',
        content: {
            keyFeatures: [
                'Processes ~15,000 calls per month.',
                'Replaced manual auditing with 100% AI-driven call coverage.',
                'Extracts sentiment, compliance, and resolution metrics automatically.'
            ]
        },
        link: 'https://www.nexauragroup.co.uk',
        linkText: 'Nexaura Group'
    },
    {
        id: 'deep-research',
        slug: 'deep-research',
        title: 'DeepResearch',
        subtitle: 'AI-Powered Knowledge Engine',
        role: 'Lead AI Engineer',
        stack: ['Next.js', 'Llama 3.3 70B', 'LangChain', 'Supabase'],
        category: 'Enterprise AI Systems',
        summary: 'An advanced research assistant that aggregates 50+ sources and transforms information overload into actionable insights using domain-specific AI analysis.',
        content: {
            problem: 'Information overload makes it difficult to consume complex technical papers and breaking news efficiently.',
            solution: 'A platform that aggregates, analyzes, and explains content from multiple sources using expert personas.',
            keyFeatures: [
                'Smart Briefing & Auto-Explain',
                'Multi-Source Intelligence (TechCrunch, ArXiv, etc.)',
                'Deep Explain with 9 Expert Personas',
                'Chat with Article'
            ],
            technicalDetails: [
                'Parallel processing for sub-second response times',
                'Custom Markdown parsers for complex rendering',
                'Vercel Cron Jobs for background analysis'
            ]
        }
    },
    {
        id: 'urdu-finance-ai',
        slug: 'urdu-finance-ai',
        title: 'Urdu Finance AI',
        subtitle: 'Fine-Tuned Qwen2.5 & Quantized',
        role: 'AI Researcher',
        stack: ['PyTorch', 'LoRA', 'Qwen2.5', 'llama.cpp'],
        category: 'Deep-Tech Research',
        summary: 'Fine-tuned Qwen2.5-0.5B on financial text and quantized it for high-performance edge deployment.',
        content: {
            coreIdea: 'Democratizing financial AI by enabling high-accuracy Urdu translation on edge devices.',
            technicalDetails: [
                'Fine-tuned Qwen2.5-0.5B on 3k+ financial sentences',
                'Used LoRA for parameter-efficient training',
                'Quantized to 4-bit (q4_0) using llama.cpp',
                'Reduced model size by 67% (330MB)'
            ],
            results: [
                'Achieved 9.22 tokens/sec on standard hardware',
                '0.6110 final training loss'
            ]
        }
    },
    {
        id: 'narrative-engine',
        slug: 'narrative-engine',
        title: 'NarrativeEngine',
        subtitle: 'AI Content Production System',
        role: 'AI Systems Architect',
        stack: ['Python', 'GitHub Actions CI/CD', 'TTS', 'Generative AI'],
        category: 'Enterprise AI Systems',
        summary: 'An end-to-end pipeline that turns a topic into a finished, professional video across platforms in multiple languages.',
        content: {
            keyFeatures: [
                'AI script generation to neural voice to auto-sourced visuals to cinematic render.',
                'Multilingual support (EN/UR/HI).',
                '$0 production cost, fully automated via GitHub Actions CI/CD pipelines.'
            ]
        }
    },
    {
        id: 'dynamic-affinity',
        slug: 'dynamic-affinity-scheduling',
        title: 'Dynamic Affinity Scheduling',
        subtitle: 'For Web Workers',
        role: 'Researcher & Systems Engineer',
        stack: ['JavaScript', 'SharedArrayBuffer', 'Atomics', 'Web Workers'],
        category: 'Deep-Tech Research',
        summary: 'Proposed and implemented a human-in-the-loop thread scheduling system for modern web browsers.',
        content: {
            coreIdea: 'Default browser schedulers act as black boxes. This research introduces Interactive Scheduling, where users visually monitor worker load and directly control task affinity.',
            technicalDetails: [
                'Designed a SharedArrayBuffer-based shared memory architecture for high-frequency coordination',
                'Used Atomics.wait / notify to eliminate busy-waiting and reduce CPU waste'
            ],
            results: [
                'Achieved up to 127% throughput improvement when migrating stalled tasks',
                'Observed transient performance spikes up to 2.7M ops/sec'
            ]
        },
        link: 'https://www.npmjs.com/package/dynamic-affinity-scheduler-research',
        linkText: 'View Package'
    },
    {
        id: 'safe-band',
        slug: 'safe-band',
        title: 'Smart Safety Band',
        subtitle: 'For Autistic Children',
        role: 'Inventor',
        stack: ['Python', 'ML', 'IoT', 'Biosensors'],
        category: 'Assistive Tech & Hardware',
        summary: 'A next-generation wearable system that predicts emotional meltdowns and ensures safety through AI-driven behavioral analysis.',
        content: {
            keyFeatures: [
                'Micro-Behavior Prediction Engine analyzing tapping and tremor patterns',
                'Environmental trigger correlation (noise, light, crowd density)',
                'Offline decentralized emergency broadcast'
            ]
        }
    },
    {
        id: 'amna-aman',
        slug: 'amna-aman',
        title: 'AmnaAman',
        subtitle: 'Inclusive Tech Platform',
        role: 'Co-founder & CTO',
        stack: ['React (Vite)', 'Tailwind CSS', 'Supabase'],
        category: 'Full Stack Apps',
        summary: 'A fully responsive, accessibility-first organization website with authentication-gated learning content.',
        content: {
            keyFeatures: [
                'Accessibility-friendly contrast and Light/Dark modes',
                'Supabase-based authentication for protected student courses'
            ]
        },
        link: 'https://amna-aman-project.vercel.app/',
        linkText: 'Visit Site'
    },
    {
        id: 'mind-bridge',
        slug: 'mind-bridge',
        title: 'MindBridge',
        subtitle: 'AI Mental Health Support',
        role: 'AI Engineer',
        stack: ['React', 'Python', 'NLP'],
        category: 'Enterprise AI Systems',
        summary: 'AI-driven mental health platform analyzing emotional patterns from text and voice to deliver personalized support.',
        content: {
            keyFeatures: [
                'Voice stress analysis for hidden emotional signals',
                'Mental health risk scoring engine'
            ]
        }
    }
];
