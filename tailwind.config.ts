import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['meteocons', 'mi', 'ic', 'skill-icons', 'file-icons'])
    }),
    nextui(),
  ],
};
export default config;
