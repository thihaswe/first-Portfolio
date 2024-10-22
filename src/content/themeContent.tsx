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
      setData("light");
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
      <ThemeProvider theme={theme} >{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContentPage;

// Interface for the theme context data
// interface ThemeData {
//   data: string;
//   setData: (data: string) => void;
//   toggleTheme: () => void;
//   theme: Theme;
// }

// // Default value for the theme context
// const themeValue: ThemeData = {
//   data: "",
//   setData: (data?: string) => {},
//   toggleTheme: () => {},
//   theme: getDesignTheme("light"), // Default theme is light
// };

// // Creating the theme context
// export const ThemeContext = createContext<ThemeData>(themeValue);

// // Interface for the component props
// export interface Prop {
//   children: ReactNode;
// }

// // Theme content page component
// const ThemeContentPage = ({ children }: Prop) => {
//   const { isReady, ...router } = useRouter();

//   const [data, setData] = useState("");
//   const [transitioning, setTransitioning] = useState(false); // State for transition

//   // Effect to set theme data from local storage on mount
//   useEffect(() => {
//     const current = localStorage.getItem("theme");

//     if (current) {
//       setData(current);
//     } else {
//       localStorage.setItem("theme", "light");
//       setData("light");
//     }
//   }, [isReady]);

//   // Function to toggle theme between light and dark
//   const toggleTheme = () => {
//     setTransitioning(true); // Set transitioning state to true
//     setTimeout(() => {
//       setData((data) => {
//         const newValue = data === "light" ? "dark" : "light";
//         localStorage.setItem("theme", newValue);
//         return newValue;
//       });
//       setTransitioning(false); // Set transitioning state to false after the transition completes
//     }, 500); // Adjust the duration as per your transition duration
//   };

//   const theme: Theme = getDesignTheme(data);

//   return (
//     <ThemeContext.Provider value={{ data, setData, toggleTheme, theme }}>
//       <div className={transitioning ? "theme-transition" : ""}>
//         <ThemeProvider theme={theme}>{children}</ThemeProvider>
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// // CSS styles for transition
// const useStyles = makeStyles({
//   "@global": {
//     ".theme-transition": {
//       transition: "background-color 0.5s ease",
//     },
//   },
// });

// export default function ThemedContentPage(props: Prop) {
//   useStyles(); // Apply the styles
//   return <ThemeContentPage {...props} />;
// }
