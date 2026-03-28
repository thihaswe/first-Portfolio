import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import TerminalIcon from "@mui/icons-material/Terminal";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "@/content/themeContent.tsx";

const HireMe = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const { data } = useContext(ThemeContext);

  const services = [
    { 
      id: 1, 
      name: "Web Design", 
      icon: <WysiwygIcon sx={{ fontSize: 50 }} />,
      description: "Modern, responsive designs",
      color: "#e94560",
    },
    {
      id: 2,
      name: "Web Development",
      icon: <DomainVerificationIcon sx={{ fontSize: 50 }} />,
      description: "Full-stack solutions",
      color: "#558B99",
    },
    { 
      id: 3, 
      name: "Backend", 
      icon: <TerminalIcon sx={{ fontSize: 50 }} />,
      description: "Robust APIs & databases",
      color: "#667eea",
    },
    {
      id: 4,
      name: "Maintenance",
      icon: <SettingsSuggestIcon sx={{ fontSize: 50 }} />,
      description: "Support & updates",
      color: "#f093fb",
    },
  ];

  return (
    <Box
      sx={{
        mt: 8,
        pt: 6,
        borderTop: `1px solid ${data === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}`,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: "bold",
          textAlign: "center",
          color: "text.primary",
        }}
      >
        Services I Offer
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "text.secondary",
          mb: 6,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Professional solutions tailored to your needs
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                },
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: service.color,
                  transform: "scaleX(0)",
                  transition: "transform 0.3s ease",
                },
                "&:hover::before": {
                  transform: "scaleX(1)",
                },
                bgcolor: data === "light" ? "info.main" : "rgba(255,255,255,0.05)",
              }}
            >
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  bgcolor: data === "light" ? "white" : "rgba(255,255,255,0.1)",
                  color: service.color,
                  boxShadow: data === "light" ? "0 4px 14px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: service.color,
                    color: "white",
                    transform: "rotateY(360deg)",
                  },
                }}
              >
                {service.icon}
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  mb: 1,
                  color: "text.primary",
                }}
              >
                {service.name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: "text.secondary",
                  fontSize: "0.9rem",
                }}
              >
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HireMe;
