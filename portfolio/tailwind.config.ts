import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                theme: {
                    void: {
                        950: '#030014', // Deepest background
                        900: '#0a0520', // Card background
                        800: '#120a35', // Borders / Secondary BG
                    },
                    accent: {
                        purple: '#a855f7',
                        cyan: '#22d3ee',
                        pink: '#f472b6',
                    },
                    text: {
                        main: '#e2e8f0',
                        muted: '#94a3b8',
                    }
                },
                // Keeping zinc for backward compatibility if needed, but we should migrate off it
                zinc: {
                    900: '#181818',
                    800: '#27272a',
                    500: '#71717a',
                    400: '#a1a1aa',
                    300: '#d4d4d8',
                    100: '#f4f4f5',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-outfit)', 'sans-serif'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
            },
            animation: {
                'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
                    '50%': { opacity: '0.8', filter: 'blur(25px)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
