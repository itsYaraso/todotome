import { Scale, Scale3D } from "lucide-react";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

  module.exports = {
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
        },
        keyframes: {
          slidein: {
            "0%" : {
              transform: "translateX(-100px)",
            },
            "100%": {
              transform: "translateX(0)",
            }
          },
          
          growappear: {
            "0%": {
              transform: "scale(0,1)",
            },
            "100%": {
              transform: "scale(1,1)",
            },
          },

          fadein: {
            "0%": {
              opacity: 0
            },
            "50%": {
              opacity: 1
            },
            "100%": {
              opacity: 0
            },

          }
        },
        animation: {
          slidein: "slidein .25s ease-in-out",
          growappear: "growappear .25s ease-in-out",
          fadein: "fadein 1s ease-in-out"
        },
      },
      plugins: [],
    }
  };
  