import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "299px",
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
          light: { value: "#fefdfb" }, // "milk white"
          dark: { value: "#1a1a24ff" }, // dark blue background
        },
        text: {
          light: { value: "#1a1a1a" },
          dark: { value: "#e9ecf1" },
        },
        icon: {
          light: { value: "#e9ecf1" }, // gray.100 equivalent
          dark: { value: "#1a1a1a" },
        },
        iconButton: {
          light: { value: "#18181b" }, // gray.100 equivalent
          dark: { value: "#fefdfb" }, // gray.700 equivalent
        },
      },
    },
    semanticTokens: {
      colors: {
        // Background color
        bg: {
          value: {
            _light: "{colors.surface.light}",
            _dark: "{colors.surface.dark}",
          },
        },
        // Text color
        text: {
          value: {
            _light: "{colors.text.light}",
            _dark: "{colors.text.dark}",
          },
        },
        // Primary brand color
        primary: {
          value: {
            _light: "{colors.brand.500}",
            _dark: "{colors.brand.100}",
          },
        },
        // Icon color
        icon: {
          value: {
            _light: "{colors.icon.light}",
            _dark: "{colors.icon.dark}",
          },
        },
        // Icon button background - THIS IS THE KEY FIX
        iconButtonBg: {
          value: {
            _light: "{colors.iconButton.light}",
            _dark: "{colors.iconButton.dark}",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
