/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111827',
          black: '#0d1117',
          ink: '#121414',
          card: '#1c201f',
          red: '#a71e22',
          redHover: '#c52429',
          redDark: '#8c171b',
          redLight: '#fbebee',
          aluminum: '#a8adb4',
          deepBlue: '#163a5f',
          paper: '#fafaf6',
          paperCard: '#ffffff',
          paperAlt: '#f1f3ec',
          line: '#e1e4da',
          lineDark: '#2a2f2d',
          muted: '#646c67',
        }
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        arabic: ['var(--font-cairo)', 'Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 20px 40px -15px rgba(0, 0, 0, 0.07), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'apple-lg': '0 30px 60px -12px rgba(0, 0, 0, 0.12), 0 18px 36px -18px rgba(0, 0, 0, 0.12)',
        'glow-red': '0 0 25px rgba(167, 30, 34, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
      }
    },
  },
  plugins: [],
}
