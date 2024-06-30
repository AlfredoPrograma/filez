/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
