/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: '#000000',
          white: '#FFFFFF',
          gray1: '#111111',
          gray2: '#1a1a1a',
          gray3: '#2d2d2d',
          gray4: '#404040',
          gray5: '#666666',
          gray6: '#888888',
          gray7: '#aaaaaa',
          gray8: '#cccccc',
          gray9: '#e0e0e0',
        },
        accent: {
          cyan: '#00d4ff',
          blue: '#0088ff',
          purple: '#bb86fc',
          amber: '#ffa500',
          green: '#00ff88',
          pink: '#ff006e',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
          '50%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
