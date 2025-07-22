/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kvm-yellow': '#F5DF72',
        'kvm-black': '#000000',
      },
    },
  },
  plugins: [],
};