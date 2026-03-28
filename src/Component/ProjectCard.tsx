import { Box, Paper, Typography, useMediaQuery, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useContext } from "react";
import { ThemeContext } from "@/content/themeContent.tsx";

interface Prop {
  title: string;
  desc: string;
  href: string;
  image: StaticImageData;
  reverse: boolean;
}

const ProjectCard = ({ prop }: { prop: Prop }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const { data } = useContext(ThemeContext);

  return (
    <Box sx={{ mt: 10, mb: 10 }}>
      <Typography 
        sx={{ 
          textAlign: "start", 
          marginBottom: 6,
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "1.75rem" },
        }} 
        variant="h5"
      >
        {prop.title}
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={prop.reverse ? "row-reverse" : "row"}
        flexWrap={"wrap"}
        gap={4}
      >
        <Box
          sx={{
            position: "relative",
            width: isSmallScreen ? "100%" : { xs: "100%", md: 450 },
            height: isSmallScreen ? 200 : 280,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
            },
          }}
        >
          <Image
            src={prop.image}
            alt={prop.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Box 
          sx={{ 
            flex: isSmallScreen ? "1 1 100%" : "1 1 auto",
            minWidth: isSmallScreen ? "100%" : 300,
            maxWidth: isSmallScreen ? "100%" : 500,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: data === "light" ? "info.main" : "rgba(255,255,255,0.05)",
              border: `1px solid ${data === "light" ? "rgba(85, 139, 153, 0.2)" : "rgba(255,255,255,0.1)"}`,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                transform: "translateX(8px)",
              },
            }}
          >
            <Typography 
              sx={{ 
                textAlign: "start", 
                mb: 3,
                lineHeight: 1.8,
                color: "text.primary",
                fontSize: "1rem",
              }}
            >
              {prop.desc}
            </Typography>
            <Box sx={{ mt: "auto" }}>
              <Link href={prop.href} passHref style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                    "&:hover": {
                      boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  View on GitHub
                </Button>
              </Link>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
