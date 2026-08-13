/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // wine.DEFAULT i wine.bright su POZADINSKE boje (dugmad, badge-evi).
        // Kao boja teksta na tamnoj podlozi padaju na WCAG AA (2.96:1 na kartici),
        // zato za tekst postoji wine.text — 5.5:1 na ink-surface, 5.9:1 na ink-bg.
        wine: {
          DEFAULT: '#8C2438',
          bright: '#B03A47',
          text: '#D9707C',
        },
        ink: {
          bg: '#14100E',
          surface: '#1E1815',
          'surface-hover': '#251E1A',
          text: '#F2EAE2',
          muted: '#A69A8F',
          // border je dekorativna ivica kartica; border-strong ispunjava
          // WCAG 1.4.11 (3:1) i ide na polja forme i interaktivne granice.
          border: '#2E2622',
          'border-strong': '#776A62',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
    },
  },
  plugins: [],
}
