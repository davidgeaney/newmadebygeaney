/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        'primary-black': 'var(--color-primary-black)',
        'pure-white': 'var(--color-pure-white)',
        'light-gray': 'var(--color-light-gray)',
        'medium-gray': 'var(--color-medium-gray)',
        'dark-gray': 'var(--color-dark-gray)',
      },
      fontSize: {
        'heading-lg': 'var(--text-heading-lg, 3.5rem)',
        'heading-md': 'var(--text-heading-md, 2.5rem)',
        'heading-sm': 'var(--text-heading-sm, 1.5rem)',
        'body-lg': 'var(--text-body-lg, 1.125rem)',
        'body-md': 'var(--text-body-md, 1rem)',
        'body-sm': 'var(--text-body-sm, 0.875rem)',
        'metadata': 'var(--text-metadata, 0.75rem)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
