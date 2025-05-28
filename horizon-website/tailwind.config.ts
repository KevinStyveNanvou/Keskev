import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Example: Add dark mode specific text and background colors
      colors: {
        dark: {
          background: '#1a202c', // Dark gray - example
          text: '#e2e8f0',       // Light gray - example
          card: '#2d3748',       // Slightly lighter dark gray for cards - example
          primary: '#4299e1',    // Blue for primary elements in dark mode - example
        }
      }
    },
  },
  plugins: [],
}
export default config
