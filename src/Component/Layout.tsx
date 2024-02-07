// ... (your existing imports)

import { Prop, ThemeContext } from "@/content/themeContent";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";
import TopBar from "./TopBar";
import CopyRight from "./CopyRight";

const Layout = ({ children }: Prop) => {
  const { toggleTheme, data } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          padding: 5,
          backgroundColor: "primary.light",
        }}
      >
        <TopBar />

        <Button
          sx={{
            position: "sticky",
            top: 50,
            left: "100%",
            margin: 2,
            borderRadius: 150,
            zIndex: 5,
          }}
          variant="contained"
          onClick={() => {
            toggleTheme(data);
          }}
        >
          {data === "light" ? (
            <LightModeIcon
              sx={{ borderRadius: 50, fontSize: 30 }}
            ></LightModeIcon>
          ) : (
            <DarkModeIcon
              sx={{ borderRadius: 50, fontSize: 30 }}
            ></DarkModeIcon>
          )}
        </Button>

        {children}
      </Box>
      <CopyRight></CopyRight>
    </Box>
  );
};

export default Layout;
