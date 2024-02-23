import React, { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [darkModeView, setDarkModeView] = useState(true);

  const toggleDarkMode = () => setDarkModeView(!darkModeView);

  return (
    <DarkModeContext.Provider value={{ darkModeView, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
