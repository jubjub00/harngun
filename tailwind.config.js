import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layouts/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                noto: ['var(--font-noto)'],
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                'purple-light': {
                    extend: 'light',
                    colors: {
                        background: '#eef2f7',
                        foreground: '#ffffff',
                        primary: {
                            50: '#eef2f7',
                            100: '#d8e4ef',
                            200: '#b6cce0',
                            300: '#8eb2d0',
                            400: '#6d9cc0',
                            500: '#4e87b0',
                            600: '#3b6f9b',
                            700: '#2b577f',
                            800: '#1e4063',
                            900: '#152d4c',
                            DEFAULT: '#4e87b0',
                            foreground: '#ffffff',
                        },
                        focus: '#DEE5D4',
                    },
                    layout: {
                        disabledOpacity: '0.3',
                        radius: {
                            small: '4px',
                            medium: '8px',
                            large: '16px',
                        },
                        borderWidth: {
                            small: '1px',
                            medium: '2px',
                            large: '3px',
                        },
                    },
                },
            },
        }),
    ],
}
