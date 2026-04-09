import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './animations/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        stella: {
          bg: '#070b1a',
          neon: '#5af3ff',
          glow: '#a66bff'
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
