// ThemeContext.js

import { getDesignTheme } from "@/utils/theme";
import { Theme, ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useState } from "react";

interface ThemeData {
  data: string;
  setData: (data: string) => void;
  toggleTheme: (data?: any) => void;
  theme: Theme;
}

const themeValue: ThemeData = {
  data: "",
  setData: (data?: string) => {},
  toggleTheme: () => {},
  theme: getDesignTheme("light"),
};
export const ThemeContext = createContext<ThemeData>(themeValue);

export interface Prop {
  children: ReactNode;
}
const ThemeContentPage = ({ children }: Prop) => {
  const { isReady, ...router } = useRouter();

  const [data, setData] = useState("");

  useEffect(() => {
    const current = localStorage.getItem("theme");

    if (current) {
      setData(current);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isReady]);

  const toggleTheme = () => {
    setData((data) => {
      const newValue = data === "light" ? "dark" : "light";
      localStorage.setItem("theme", newValue);
      return newValue;
    });
  };

  const theme: Theme = getDesignTheme(data);

  return (
    <ThemeContext.Provider value={{ data, setData, toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContentPage;
