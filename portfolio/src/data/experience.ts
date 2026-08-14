export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    type: 'Experience' | 'Leadership & Impact';
    date: string;
    description: string[];
    link?: string;
}

export const experiences: ExperienceItem[] = [
    {
        id: 'nexaura',
        role: 'Projects Lead',
        company: 'Nexaura',
        type: 'Experience',
        date: 'Feb 2026 – Present',
        description: [
            'Lead a remote cross-functional team delivering enterprise AI solutions for the Government of Pakistan and corporate clients.',
            'Delivered an AI-native Hospital Management System featuring bilingual EN/UR clinical scribing for outpatient clinics.',
            'Delivered an Enterprise AI Call QA Platform for SCO (Pakistan\'s Special Communications Organization), automating quality assurance for ~15,000 calls/month.',
            'Authored 47 technical documents spanning system architecture, ML lifecycle, and operations.'
        ],
        link: 'https://www.nexauragroup.co.uk'
    },
    {
        id: 'amna-aman-cto',
        role: 'Co-founder & CTO',
        company: 'AmnaAman',
        type: 'Experience',
        date: 'Dec 2025 – Present',
        description: [
            'Built Cortex, a mobile-to-PC remote-control application, owning product and technical direction.',
            'Co-organized accessibility events for people with disabilities in collaboration with the university.'
        ],
        link: 'https://amna-aman-project.vercel.app/'
    },
    {
        id: 'world-bank',
        role: 'Virtual Delegate',
        company: 'World Bank Youth Summit 2026',
        type: 'Leadership & Impact',
        date: '2026',
        description: [
            'Selected participant in global youth development policy dialogue.'
        ]
    },
    {
        id: 'nutech-idpd',
        role: 'Co-organizer',
        company: 'International Day of Persons with Disabilities',
        type: 'Leadership & Impact',
        date: '2025',
        description: [
            'Planned and executed a university-wide accessibility awareness initiative at NUTECH.',
            'Coordinated stakeholders for social-impact events through AmnaAman.'
        ]
    },
    {
        id: 'advocacy',
        role: 'Disability Advocacy',
        company: 'Through Engineering',
        type: 'Leadership & Impact',
        date: 'Ongoing',
        description: [
            'As a low-vision engineer, my research (like AlbiSight) and career are directly motivated by lived experience of visual impairment. I build the technology I need.'
        ]
    }
];
