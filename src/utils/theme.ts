import { createTheme } from "@mui/material/styles";

export const getDesignTheme = (data: string) => {
  if (data === "dark") {
    return createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: "#1a1a2e",
          light: "#16213e",
          dark: "#0f0f1a",
        },
        secondary: {
          main: "#e94560",
          light: "#ff6b6b",
          dark: "#c0392b",
        },
        info: {
          main: "#0f3460",
          light: "#1a4a7a",
        },
        background: {
          default: "#1a1a2e",
          paper: "#16213e",
        },
      },
      typography: {
        fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          fontWeight: 700,
        },
        h2: {
          fontWeight: 600,
        },
        h3: {
          fontWeight: 600,
        },
        h4: {
          fontWeight: 600,
        },
        h5: {
          fontWeight: 600,
        },
        h6: {
          fontWeight: 600,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              textTransform: "none",
              fontWeight: 600,
              padding: "10px 24px",
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 16,
            },
          },
        },
      },
    });
  } else {
    return createTheme({
      palette: {
        mode: "light",
        primary: {
          main: "#558B99",
          light: "#78a3b0",
          dark: "#3d6a77",
        },
        secondary: {
          main: "#2c3e50",
          light: "#34495e",
          dark: "#1a252f",
        },
        info: {
          main: "#e8f4f8",
          light: "#f0f9fc",
        },
        background: {
          default: "#f5f7fa",
          paper: "#ffffff",
        },
      },
      typography: {
        fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          fontWeight: 700,
        },
        h2: {
          fontWeight: 600,
        },
        h3: {
          fontWeight: 600,
        },
        h4: {
          fontWeight: 600,
        },
        h5: {
          fontWeight: 600,
        },
        h6: {
          fontWeight: 600,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              textTransform: "none",
              fontWeight: 600,
              padding: "10px 24px",
              boxShadow: "0 4px 14px rgba(85, 139, 153, 0.3)",
              "&:hover": {
                boxShadow: "0 6px 20px rgba(85, 139, 153, 0.4)",
              },
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 16,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 16,
            },
          },
        },
      },
    });
  }
};
