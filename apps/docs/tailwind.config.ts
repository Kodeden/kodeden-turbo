import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './stories/**/*.tsx',

    // ⚠️ We need Tailwind to compile all of the classes from the UI package
    '../../packages/ui/src/**/*.tsx',
  ],
};

export default config;
