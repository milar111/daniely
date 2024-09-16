import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'],
      },
      colors: {
        grayISH: "#D9D9D9",
        lightGray: "#EBEBEB",
        darkGray: "#C7C7C7",
        border: "#555555",
      },
      fontSize: {
        fontLG1: "40px",
        fontSM1: "32px",
        fontLG2: "24px",
        fontSM2: "18px",
      },

      fontWeight: {
        light: '300',
      },

      boxShadow: {
        'bottom-left': '-2px 2px 5px rgba(0, 0, 0, 0.3)', 
      },
    },
  },
  plugins: [],
};

export default config;
