import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const fonts = createMuiTheme({
  typography: {
    allVariants: { fontFamily: "'Space Grotesk', sans-serif" },
    h1: {
      fontFamily: "'Staatliches', cursive",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    button: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
});

const lightTheme = createMuiTheme({
  ...fonts,
  palette: {
    primary: { main: "#00272B " },
    secondary: { main: "#00272B" },
    background: { default: "#FFFBFF ", paper: "#FFFBFF " },
  },
});

export const darktheme = createMuiTheme({
  ...fonts,
  palette: {
    type: "dark",
    primary: { main: "#06D6A0" },
    secondary: { main: "#FFFBFF" },
    background: { default: "#00272B ", paper: "#00272B " },
  },
});

export const Theming: React.FC<{ darkTheme: boolean }> = ({
  children,
  darkTheme,
}) => {
  return (
    <ThemeProvider theme={{ ...(darkTheme ? darktheme : lightTheme) }}>
      {children}
    </ThemeProvider>
  );
};
