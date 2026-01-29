import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist"],
  },

  js.configs.recommended,

  reactHooks.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },

    plugins: {
      prettier,
      "react-refresh": reactRefresh,
    },

    rules: {
      "prettier/prettier": "error",
      "react-refresh/only-export-components": "warn",
    }
  }
]);
