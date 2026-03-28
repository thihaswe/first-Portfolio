import MiniEcommerce from "@/Component/projects/MiniEcommerce";
import MyCashNote from "@/Component/projects/MyCashNote";
import MyFoodie from "@/Component/projects/MyFoodie";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "@/content/themeContent.tsx";

const MyProject = () => {
  const { data } = useContext(ThemeContext);

  return (
    <Box sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 2,
            background: data === "light" 
              ? "linear-gradient(135deg, #558B99 0%, #3d6a77 100%)"
              : "linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Projects
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: "text.secondary",
            maxWidth: 600,
            mx: "auto",
            fontSize: "1.1rem",
          }}
        >
          A collection of projects I&apos;ve built to solve real-world problems and learn new technologies
        </Typography>
      </Box>

      {/* Projects List */}
      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <MyFoodie />
        <MiniEcommerce />
        <MyCashNote />
      </Box>
    </Box>
  );
};

export default MyProject;
