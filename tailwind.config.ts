import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        boxShadow: {
            primary: '0 0 10px 0 rgba(0, 0, 0, 0.09)',
        },
        textColor: {
            hover: '#FF3B5C',
        },
        screens: {
            xs: '500px',
            sm: '640px',
            md: '768px',
            lgm: '850px',
            lgmax: '950px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
};
export default config;
