import { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState("purple");

  return (
    <ColorContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </ColorContext.Provider>
  );
};
