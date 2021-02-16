import React, { useContext, useEffect, useState } from "react";
import { Theming } from "../Theme";

const ThemeContext = React.createContext(false);
const ThemeUpdateContext = React.createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpdateTheme() {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider: React.FC = ({ children }) => {
  const getTheme = sessionStorage.getItem("darkTheme");
  const [darkTheme, setdarkTheme] = useState(getTheme === "true" ? true : false);

  function toggleDark() {
    const theme = !darkTheme;
    setdarkTheme(theme);
    sessionStorage.setItem("darkTheme", theme.toString());
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleDark}>
        <Theming darkTheme={darkTheme}>{children}</Theming>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
