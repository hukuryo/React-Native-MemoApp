/** @type {import('tailwindcss').Config} */
import { create } from "tailwind-rn";
import styles from "./styles.json";

const { tailwind } = create(styles);
export { tailwind };

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
