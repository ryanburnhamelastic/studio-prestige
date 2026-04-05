/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary: Warm clay/rose — "The Nurtured Elite"
        primary: '#825b55',
        'primary-dim': '#754f49',
        'primary-container': '#ffcbc4',
        'on-primary': '#fff5f3',
        'on-primary-container': '#5a3a35',
        // Secondary: Warm gold
        secondary: '#78604b',
        'secondary-dim': '#6b5440',
        'secondary-container': '#ffdea5',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#644d3a',
        // Tertiary: Oatmeal warmth
        tertiary: '#716252',
        'tertiary-dim': '#645647',
        'tertiary-container': '#fde7d3',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#635445',
        // Backgrounds & Surfaces: Layered vellum
        background: '#fffcf7',
        'on-background': '#383833',
        surface: '#fffcf7',
        'surface-bright': '#fffcf7',
        'surface-dim': '#e4e3d7',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fcf9f3',
        'surface-container': '#f6f3ed',
        'surface-container-high': '#f0eee5',
        'surface-container-highest': '#eae8de',
        'surface-variant': '#eae8de',
        // Text
        'on-surface': '#383833',
        'on-surface-variant': '#65655c',
        // Borders & outlines
        outline: '#818178',
        'outline-variant': '#bbb9b2',
        // Error
        error: '#a54731',
        'error-container': '#fe8b70',
        'on-error': '#ffffff',
        // Inverse
        'inverse-surface': '#0e0e0c',
        'inverse-on-surface': '#9e9d98',
        'inverse-primary': '#ffcbc4',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      fontFamily: {
        headline: ['"Noto Serif"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        // Ambient shadows: 40px blur, 6% opacity, tinted (never pure black)
        'ambient': '0 40px 60px -15px rgba(56,56,51,0.06)',
        'ambient-lg': '0 40px 60px -15px rgba(56,56,51,0.08)',
      },
    },
  },
  plugins: [],
}
