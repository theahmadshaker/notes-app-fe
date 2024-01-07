import { useContext } from "react";
import { ColorContext } from "../context/ActiveColorContext";

// Custom hook to use the color context
export const useColor = () => {
  return useContext(ColorContext);
};
