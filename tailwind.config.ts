import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'leeim-mint': '#0EB39F',
        'leeim-white': '#B9CAC8',
        'leeim-black': '#151414',
      },
    },
  },
  plugins: [],
};
export default config;
