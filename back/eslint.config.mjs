import js from "@eslint/js";
import globals from "globals";

export default [
js.configs.recommended,
{
    languageOptions: {
    globals: {
        ...globals.browser,
        ...globals.node
    },
     },
    rules: {
    "semi": "error",
    "indent": ["error", 2],
    }
},
// MODIF ICI
{
    // Configuration spécifique pour HTML et CSS
    files: ["**/*.html", "**/*.css"],
    rules: {
      "indent": ["error", 4],
    }
  }
];

