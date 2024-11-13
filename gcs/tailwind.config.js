/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "picton-blue": {
          50: "#eff9ff",
          100: "#daf1ff",
          200: "#bee7ff",
          300: "#91d9ff",
          400: "#5ec2fc",
          500: "#3ba6f9",
          600: "#2287ee",
          700: "#1a70db",
          800: "#1c5ab1",
          900: "#1c4e8c",
          950: "#163055",
        },
        atlantis: {
          50: "#f5fde8",
          100: "#e7fbcc",
          200: "#cff79f",
          300: "#afef67",
          400: "#90e239",
          500: "#7edf1d",
          600: "#55a010",
          700: "#427a11",
          800: "#376014",
          900: "#305215",
          950: "#162d06",
        },
        "wild-sand": {
          50: "#f5f5f5",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        "chathams-blue": {
          50: "#f3f7fc",
          100: "#e5eff9",
          200: "#c6dff1",
          300: "#94c5e5",
          400: "#5ba6d5",
          500: "#368bc2",
          600: "#266fa3",
          700: "#1f5985",
          800: "#1f4f73",
          900: "#1e405c",
          950: "#142a3d",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
