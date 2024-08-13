// theme/index.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Inter', sans-serif",
        color: "gray.800",
        bg: "gray.100",
        lineHeight: "tall",
      },
    },
  },
});

export default theme;

