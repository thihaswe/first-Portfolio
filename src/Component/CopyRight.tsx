import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useContext } from "react";
import { ThemeContext } from "@/content/themeContent.tsx";

const CopyRight = () => {
  const { data } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: data === "light" ? "primary.light" : "primary.dark",
        py: 6,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
            mb: 4,
          }}
        >
          {/* Contact Section */}
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: "bold",
                mb: 2,
                color: data === "light" ? "primary.dark" : "white",
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <IconButton
                component="a"
                href="mailto:thihaswe.work@gmail.com"
                sx={{
                  bgcolor: data === "light" ? "white" : "rgba(255,255,255,0.1)",
                  color: data === "light" ? "primary.main" : "white",
                  "&:hover": {
                    bgcolor: data === "light" ? "primary.main" : "white",
                    color: data === "light" ? "white" : "primary.dark",
                  },
                }}
              >
                <EmailIcon />
              </IconButton>
              <Link
                href="mailto:thihaswe.work@gmail.com"
                sx={{
                  color: data === "light" ? "primary.dark" : "white",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                thihaswe.work@gmail.com
              </Link>
            </Box>
          </Box>

          {/* Social Links */}
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: "bold",
                mb: 2,
                color: data === "light" ? "primary.dark" : "white",
              }}
            >
              Follow Me
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/thiha-swe-0a168124a"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: data === "light" ? "white" : "rgba(255,255,255,0.1)",
                  color: "#0077b5",
                  "&:hover": {
                    bgcolor: "#0077b5",
                    color: "white",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/thihaswe"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: data === "light" ? "white" : "rgba(255,255,255,0.1)",
                  color: data === "light" ? "#333" : "white",
                  "&:hover": {
                    bgcolor: data === "light" ? "#333" : "white",
                    color: data === "light" ? "white" : "#333",
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider 
          sx={{ 
            mb: 4,
            borderColor: data === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
          }} 
        />

        {/* Footer Links & Copyright */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Link
              href="#"
              sx={{
                color: data === "light" ? "primary.dark" : "white",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: data === "light" ? "primary.dark" : "white",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Terms & Conditions
            </Link>
          </Box>

          <Typography 
            sx={{ 
              color: data === "light" ? "primary.dark" : "white",
              fontSize: "0.9rem",
              textAlign: { xs: "center", sm: "right" },
            }}
          >
            © {currentYear} Thiha Swe. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CopyRight;
