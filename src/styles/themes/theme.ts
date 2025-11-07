import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        brand: {
          50: { value: "#faf7ff" },
          100: { value: "#e5d9ff" },
          500: { value: "#7a33ff" },
          700: { value: "#5320b8" },
          900: { value: "#1b0f40" },
        },
        surface: {
          light: { value: "#fefdfb" }, // “milk white”
          dark: { value: "#113a23ff" }, // dark blue background
        },
        text: {
          light: { value: "#1a1a1a" },
          dark: { value: "#e9ecf1" },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          value: {
            _light: "{colors.surface.light}",
            _dark: "{colors.surface.dark}",
          },
        },
        text: {
          value: {
            _light: "{colors.text.light}",
            _dark: "{colors.text.dark}",
          },
        },
        primary: {
          value: {
            _light: "{colors.brand.500}",
            _dark: "{colors.brand.100}",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
