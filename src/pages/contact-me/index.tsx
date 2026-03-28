import HireMe from "@/Component/HireMe";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Button, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/content/themeContent.tsx";

const ContactMe = () => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  const { data } = useContext(ThemeContext);

  const contactMethods = [
    {
      id: 1,
      href: "tel:+959767029207",
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      label: "09 7670 29 207",
      sublabel: "Phone",
    },
    {
      id: 2,
      href: "mailto:thihaswe.work@gmail.com",
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      label: "thihaswe.work@gmail.com",
      sublabel: "Email",
    },
    {
      id: 3,
      href: "https://github.com/thihaswe",
      icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      label: "GitHub",
      sublabel: "Follow my work",
    },
    {
      id: 4,
      href: "https://www.linkedin.com/in/thiha-swe-0a168124a",
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      label: "LinkedIn",
      sublabel: "Connect professionally",
    },
    {
      id: 5,
      href: "https://t.me/TonyStark7492",
      icon: <TelegramIcon sx={{ fontSize: 40 }} />,
      label: "Telegram",
      sublabel: "Quick chat",
    },
  ];

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
          Get In Touch
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
          Have a project in mind or want to collaborate? Feel free to reach out!
        </Typography>
      </Box>

      {/* Resume Download */}
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Button
          component="a"
          href="/cv.docx"
          download="cv.docx"
          variant="contained"
          size="large"
          startIcon={<DownloadIcon />}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            borderRadius: 3,
          }}
        >
          Download My Resume
        </Button>
      </Box>

      {/* Contact Information */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <ChromeReaderModeIcon /> Contact Information
        </Typography>
        
        <Grid container spacing={3}>
          {contactMethods.map((method) => (
            <Grid item xs={12} sm={6} md={4} key={method.id}>
              <Link href={method.href} passHref style={{ textDecoration: "none" }}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    },
                    cursor: "pointer",
                    bgcolor: data === "light" ? "info.main" : "rgba(255,255,255,0.05)",
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      mx: "auto",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      bgcolor: data === "light" ? "primary.light" : "primary.dark",
                      color: data === "light" ? "primary.main" : "secondary.main",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: data === "light" ? "primary.main" : "secondary.main",
                        color: "white",
                      },
                    }}
                  >
                    {method.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 0.5,
                      color: "text.primary",
                    }}
                  >
                    {method.label}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "text.secondary",
                      fontSize: "0.875rem",
                    }}
                  >
                    {method.sublabel}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Hire Me Section */}
      <HireMe />
    </Box>
  );
};

export default ContactMe;
