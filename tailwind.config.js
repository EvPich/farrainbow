/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface:      '#FFFFFF',
        'surface-alt':'#F3F4F6',
        'surface-dark':'#080E1C',
        'fg-primary':  '#0F1117',
        'fg-secondary':'#6B7280',
        'fg-inverse':  '#FFFFFF',
        'fg-muted':    '#9CA3AF',
        primary:       '#2563EB',
        border:        '#E5E7EB',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
