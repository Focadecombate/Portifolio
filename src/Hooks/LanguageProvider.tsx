import React, { useState, useContext } from "react";
import { languageOptions } from "../utils/types";

const LanguageContext = React.createContext<languageOptions>("portuguese");
const LanguageUpdateContext = React.createContext(() => {});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useUpdateLanguage() {
  return useContext(LanguageUpdateContext);
}

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<languageOptions>("portuguese");

  function toggleLanguage() {
    setLanguage(language === "portuguese" ? "english" : "portuguese");
  }

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};
