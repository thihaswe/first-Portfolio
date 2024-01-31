import { createTheme } from "@mui/material/styles";

export const getDesignTheme = (data: string) => {
  if (data === "dark") {
    return createTheme({
      palette: {
        primary: {
          main: "#000000",
        },
        secondary: {
          main: "#FFFFFF",
        },
        info: {
          main: "#F0EEEF",
        },
      },
    });
  } else {
    return createTheme({
      palette: {
        primary: {
          // main: "#14668B",
          main: "#558B99",
        },
        secondary: {
          main: "#000000",
        },
        info: {
          main: "#CDF5FD",
        },
      },
    });
  }
};
