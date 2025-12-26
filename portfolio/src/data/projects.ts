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
    category: 'Full Stack' | 'AI & Agents' | 'Research' | 'Hardware' | 'Automation';
}

export const projects: Project[] = [
    {
        id: 'amna-aman',
        slug: 'amna-aman',
        title: 'AmnaAman',
        subtitle: 'Inclusive Tech Organization Platform',
        role: 'Expert Full-Stack Developer & UI/UX Designer',
        stack: ['React (Vite)', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
        category: 'Full Stack',
        summary: 'A fully responsive, accessibility-first organization website with authentication-gated learning content.',
        content: {
            keyFeatures: [
                'Designed and implemented Light/Dark mode with accessibility-friendly contrast',
                'Built Supabase-based authentication for protected student course access',
                'Developed modular pages: Projects, Volunteer Registration, Donations, Contact',
                'Implemented protected routes for an online student portal',
                'Optimized for free-tier deployment on Vercel/Netlify'
            ],
            impact: 'Enabled a youth-led organization to deliver inclusive education and community programs through a modern, scalable web platform.'
        },
        link: 'https://amna-aman-project.vercel.app/',
        linkText: 'Visit Site'
    },
    {
        id: 'global-truck-tire',
        slug: 'global-truck-tire',
        title: 'Global Truck Tire',
        subtitle: 'Production Business Website & Ordering System',
        role: 'Senior Full-Stack Architect',
        stack: ['React (Vite)', 'Tailwind CSS', 'PHP (API)', 'MySQL'],
        category: 'Full Stack',
        summary: 'Architected and built a production-ready tire shop platform under strict hosting constraints.',
        content: {
            keyFeatures: [
                'Designed MySQL schema supporting products, discounts, admin auth, and orders',
                'Built a PHP REST API with CORS support for React integration',
                'Implemented admin dashboard for product and order management',
                'Created a simulated checkout flow persisting orders directly to the database',
                'Delivered a Dark-Mode capable, professional UI optimized for real customers'
            ],
            impact: 'Delivered a real-world commercial system that works within shared hosting limits while maintaining modern UX and clean architecture.'
        }
    },
    {
        id: 'dynamic-affinity',
        slug: 'dynamic-affinity-scheduling',
        title: 'Dynamic Affinity Scheduling',
        subtitle: 'For Web Workers',
        role: 'Researcher & Systems Engineer',
        stack: ['JavaScript', 'SharedArrayBuffer', 'Atomics', 'Web Workers'],
        category: 'Research',
        summary: 'Proposed and implemented a human-in-the-loop thread scheduling system for modern web browsers.',
        content: {
            coreIdea: 'Default browser schedulers act as black boxes. This research introduces Interactive Scheduling, where users visually monitor worker load and directly control task affinity.',
            technicalDetails: [
                'Designed a SharedArrayBuffer-based shared memory architecture for high-frequency coordination',
                'Used Atomics.wait / notify to eliminate busy-waiting and reduce CPU waste',
                'Built a real-time radial heatmap UI for visualizing worker throughput',
                'Enabled live task migration between workers without restarting computation'
            ],
            results: [
                'Achieved up to 127% throughput improvement when migrating stalled tasks',
                'Observed transient performance spikes up to 2.7M ops/sec',
                'Demonstrated that human-in-the-loop scheduling can outperform automatic schedulers'
            ],
            futureDirection: 'Proposed training an ML model to learn from user migrations and gradually automate affinity decisions.'
        },
        link: 'https://www.npmjs.com/package/dynamic-affinity-scheduler-research',
        linkText: 'View Package'
    },
    {
        id: 'safe-band',
        slug: 'safe-band',
        title: 'Smart Emotional & Safety Monitoring Band',
        subtitle: 'For Autistic Children',
        role: 'Inventor · AI Systems Designer',
        stack: ['Python', 'ML', 'IoT', 'Biosensors'],
        category: 'Hardware',
        summary: 'A next-generation wearable system that predicts emotional meltdowns and ensures safety through AI-driven behavioral analysis.',
        content: {
            keyFeatures: [
                'Micro-Behavior Prediction Engine analyzing tapping, pressure, and tremor patterns',
                'Environmental trigger correlation (noise, light, crowd density)',
                'Automatic calming protocol using vibrations, LED transitions, and ultrasonic tones',
                'Triple-layer pressure-sensitive band to detect anxiety rubbing',
                'Non-verbal vibration language for guidance',
                'GPS + motion fusion to detect wandering checks',
                'Offline decentralized emergency broadcast'
            ]
        }
    },
    {
        id: 'mind-bridge',
        slug: 'mind-bridge',
        title: 'MindBridge',
        subtitle: 'AI-Powered Mental Health Support System',
        role: 'AI Engineer · Full-Stack Developer',
        stack: ['React', 'Python (FastAPI)', 'NLP', 'TensorFlow'],
        category: 'AI & Agents',
        summary: 'AI-driven mental health platform analyzing emotional patterns from text and voice to deliver personalized support.',
        content: {
            keyFeatures: [
                'AI-based emotion detection from text input',
                'Voice stress analysis for hidden emotional signals',
                'Mental health risk scoring engine',
                'Caregiver alerts only in high-risk scenarios',
                'Privacy-preserving architecture'
            ],
            ethicalPositioning: 'Does not diagnose conditions or replace professionals; focuses on early detection, support, and awareness.'
        }
    },
    {
        id: 'edu-ai',
        slug: 'edu-ai',
        title: 'EduAI',
        subtitle: 'AI-Powered Educational Assistant',
        role: 'Product Engineer',
        stack: ['AI', 'Next.js'],
        category: 'AI & Agents',
        summary: 'Dynamically adapts explanations based on grade level, presenting the same concept with appropriate depth.',
        content: {
            problem: 'Students fail not because of lack of effort, but because explanations aren’t tailored to their level.',
            solution: 'EduAI dynamically adapts explanations based on grade level (5–10).',
            keyFeatures: [
                'Grade-aware explanations',
                'AI-driven content adaptation',
                'Clean, student-focused interface'
            ]
        },
        link: 'https://edu-ai-lac.vercel.app/',
        linkText: 'Try EduAI'
    },
    {
        id: 'reddit-auto-poster',
        slug: 'reddit-auto-poster',
        title: 'Reddit Auto Poster',
        subtitle: 'AI-Driven Reddit Posting System',
        role: 'Automation Engineer',
        stack: ['Python', 'Reddit API', 'LLMs'],
        category: 'Automation',
        summary: 'Automated system that generates context-aware posts for relevant subreddits.',
        content: {
            problem: 'Manual subreddit posting is time-consuming and inconsistent.',
            solution: 'An automated system that generates context-aware posts and provides direct links for publishing.',
            keyFeatures: [
                'Community-aware content generation',
                'Automation logic',
                'Scalable posting workflow'
            ]
        }
    },
    {
        id: 'cortex-ai',
        slug: 'cortex-ai',
        title: 'Cortex AI',
        subtitle: 'AI Agent System (Internal)',
        role: 'AI Engineer',
        stack: ['LangChain', 'Python', 'Agents'],
        category: 'AI & Agents',
        summary: 'AI agent orchestration system built to explore autonomous behavior in real operational scenarios.',
        content: {
            keyFeatures: [
                'AI agent orchestration',
                'Tool usage',
                'Decision logic',
                'Real operational scenario testing'
            ]
        }
    },
    {
        id: 'accessibility-hub',
        slug: 'accessibility-hub',
        title: 'Accessibility Hub',
        subtitle: 'Chrome Extension',
        role: 'Extension Developer',
        stack: ['JavaScript', 'Chrome API', 'AI'],
        category: 'Full Stack',
        summary: 'AI-powered browser extension designed to assist users with accessibility needs in real time.',
        content: {
            problem: 'Accessibility tools are often fragmented and manual.',
            solution: 'An embedded AI assistant for real-time web accessibility improvements.'
        }
    },
    {
        id: 'lead-gen-agent',
        slug: 'lead-gen-agent',
        title: 'Lead Generation Agent',
        subtitle: 'LinkedIn + Google Maps Automation',
        role: 'Automation Engineer',
        stack: ['Puppeteer', 'AI', 'Node.js'],
        category: 'Automation',
        summary: 'AI-driven agent that extracts, cleans, and structures leads from LinkedIn and Google Maps.',
        content: {
            problem: 'Lead generation is repetitive and error-prone.',
            solution: 'An AI agent that handles extraction, cleaning, and outreach prep.',
            keyFeatures: [
                'Extracts leads from LinkedIn and Google Maps',
                'Cleans and structures data',
                'Feeds results into outreach workflows'
            ]
        }
    },
    {
        id: 'ai-automation-builder',
        slug: 'ai-automation-builder',
        title: 'AI Automation Builder',
        subtitle: 'Natural Language to n8n',
        role: 'AI Systems Architect',
        stack: ['n8n', 'AI', 'Graph Logic'],
        category: 'Automation',
        summary: 'AI-powered system that converts natural language into production-ready n8n workflows.',
        content: {
            problem: 'Automation tools like n8n are powerful but complex for non-technical users.',
            solution: 'Generates real automation graphs from text prompts.',
            keyFeatures: [
                'Converts natural language into production-ready n8n workflows',
                'Integrates directly with the n8n editor',
                'Supports collaboration, observability, and customization'
            ]
        }
    }
];
