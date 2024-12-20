import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cinza_escuro: "#212336",
        cinza_claro: "#b7b7b7",
        azul_cinzento: "#23263a",
        azul_cinzento_claro: "#2b2d41",
        azul_cinzento_meio_claro: "#282a41",
        vermelho: "#ff4b58"
      },
      screens: {
				'mobile': { 'max': '999px' },
				'desktop': { 'min': '1000px' },
        'desktop_g': {'min': '1280px'},
			},
    },
  },
  plugins: [],
} satisfies Config;
