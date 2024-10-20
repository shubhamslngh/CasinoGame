/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.6)',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'imprint-bottom': 'inset 0px -1px 6px rgba(0, 0, 0, 0.6)', // Custom box-shadow for bottom imprint effect
      },
      borderColor: {
        'black-rgba': 'rgba(0, 0, 0, 0.6)', // Custom border color
      },
    },
  },
  plugins: [],
};
