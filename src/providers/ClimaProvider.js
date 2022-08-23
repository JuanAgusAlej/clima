import React, { createContext, useContext, useState } from 'react';

const climaContex = createContext();
const climaToggleContex = createContext();

export const useClimaContex = () => {
  return useContext(climaContex);
};

export const useClimaToggleContex = () => {
  return useContext(climaToggleContex);
};

export const ClimaProvider = ({ children }) => {
  const [clima, setClima] = useState();
  return (
    <climaContex.Provider value={clima}>
      <climaToggleContex.Provider value={setClima}>
        {children}
      </climaToggleContex.Provider>
    </climaContex.Provider>
  );
};
