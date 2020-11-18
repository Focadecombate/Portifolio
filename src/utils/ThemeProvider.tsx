import React, { useContext, useState } from "react";
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
  const [darkTheme, setdarkTheme] = useState(false);

  function toggleDark() {
    setdarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleDark}>
        <Theming darkTheme={darkTheme}>{children}</Theming>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
