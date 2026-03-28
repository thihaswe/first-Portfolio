import { Prop, ThemeContext } from "@/content/themeContent.tsx";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button, Container, Fab, Zoom } from "@mui/material";
import { useContext, useState } from "react";
import CopyRight from "./CopyRight";
import TopBar from "./TopBar";

const Layout = ({ children }: Prop) => {
  const { toggleTheme, data } = useContext(ThemeContext);
  const [fabVisible, setFabVisible] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          paddingTop: 4,
          backgroundColor: "background.default",
          flex: 1,
        }}
      >
        <TopBar />

        {/* Theme Toggle FAB */}
        <Zoom in={true} timeout={600}>
          <Fab
            color="secondary"
            sx={{
              position: "fixed",
              top: 80,
              right: 24,
              zIndex: 1000,
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              "&:hover": {
                transform: "scale(1.1) rotate(30deg)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onClick={() => {
              toggleTheme();
              setFabVisible(!fabVisible);
            }}
            aria-label="toggle theme"
          >
            {data === "light" ? (
              <DarkModeIcon sx={{ fontSize: 28 }} />
            ) : (
              <LightModeIcon sx={{ fontSize: 28 }} />
            )}
          </Fab>
        </Zoom>

        <Container 
          sx={{ 
            minHeight: "calc(100vh - 200px)",
            py: 4,
          }}
        >
          {children}
        </Container>
      </Box>
      <CopyRight />
    </Box>
  );
};

export default Layout;
