/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0056b3',      // Blue
        'primary-light': '#4a86e8', // Lighter blue
        'primary-dark': '#003b7a',  // Darker blue
        'accent': '#27ae60',        // Green
        'accent-light': '#4cd380',  // Lighter green
        'accent-dark': '#1f8b4c',   // Darker green
      },
    },
  },
  plugins: [],
}
