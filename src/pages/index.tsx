import TypingEffect from "@/Component/DisplayText";
import { ThemeContext } from "@/content/themeContent.tsx";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import CodeIcon from "@mui/icons-material/Code";
import { Box, Paper, Typography, useMediaQuery, Chip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const HomePage = () => {
  const flexWrap = useMediaQuery("(max-width:560px)");
  const nameText = "Thiha Swe";
  const { data } = useContext(ThemeContext);

  const paragraphText =
    "I am a fullstack web developer passionate about building modern web applications. I love exploring new technologies and turning ideas into reality through code.";

  return (
    <Box
      sx={{
        marginTop: "20px",
        maxWidth: 1200,
        margin: "0 auto",
        px: 2,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          marginBottom: 8,
          py: 4,
        }}
      >
        <Box 
          sx={{ 
            order: flexWrap ? 2 : 1,
            textAlign: flexWrap ? "center" : "left",
          }}
        >
          <Paper
            sx={{
              position: "relative",
              backgroundColor: data === "light" ? "info.main" : "info.main",
              p: 4,
              maxWidth: 400,
              "&::before": {
                content: '""',
                position: "absolute",
                top: -2,
                left: -2,
                right: 2,
                bottom: 2,
                zIndex: -1,
                backgroundColor: data === "light" ? "primary.light" : "primary.dark",
                borderRadius: 4,
              },
            }}
            elevation={0}
            className="fade-in"
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              variant="h5"
            >
              <WavingHandIcon sx={{ color: "#E4A67B", fontSize: 32 }} /> 
              Hello, I am {nameText}
            </Typography>
            <TypingEffect text={paragraphText} />
            <Box sx={{ mt: 3, display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip 
                label="Frontend" 
                size="small" 
                sx={{ bgcolor: data === "light" ? "primary.light" : "primary.dark", color: data === "light" ? "primary.dark" : "white" }}
              />
              <Chip 
                label="Backend" 
                size="small"
                sx={{ bgcolor: data === "light" ? "primary.light" : "primary.dark", color: data === "light" ? "primary.dark" : "white" }}
              />
              <Chip 
                label="Full Stack" 
                size="small"
                sx={{ bgcolor: data === "light" ? "primary.light" : "primary.dark", color: data === "light" ? "primary.dark" : "white" }}
              />
            </Box>
          </Paper>
        </Box>
        <Box 
          sx={{ 
            order: flexWrap ? 1 : 2,
            position: "relative",
          }}
          className="fade-in"
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 200, md: 260 },
              height: { xs: 200, md: 260 },
              borderRadius: "50%",
              overflow: "hidden",
              border: `4px solid ${data === "light" ? "primary.main" : "secondary.main"}`,
              boxShadow: `0 8px 32px ${data === "light" ? "rgba(85, 139, 153, 0.3)" : "rgba(233, 69, 96, 0.3)"}`,
              "&::after": {
                content: '""',
                position: "absolute",
                top: -2,
                left: -2,
                right: -2,
                bottom: -2,
                borderRadius: "50%",
                background: `linear-gradient(45deg, ${data === "light" ? "#558B99" : "#e94560"}, transparent)`,
                zIndex: -1,
              },
            }}
          >
            <Image
              src={"/myPhoto.png"}
              alt={"Thiha Swe"}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* Tech Stack Section */}
      <Box
        sx={{
          py: 6,
        }}
        className="fade-in"
      >
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "secondary.main",
            fontSize: { xs: "28px", md: "36px" },
            mb: 1,
          }}
        >
          <CodeIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          Tech Stack
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mb: 6,
            fontSize: "1rem",
          }}
        >
          Technologies I work with
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
            justifyContent: "center",
            gap: 3,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          {stacks.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    height: "100%",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.05)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    },
                    cursor: "pointer",
                  }}
                  elevation={3}
                  className="hover-lift"
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 1,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.assetUrl}
                      alt={item.label}
                      fill
                      style={{
                        objectFit: "contain",
                        borderRadius: 8,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "11px", md: "13px" },
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Paper>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

export const stacks = [
  {
    id: 1,
    assetUrl: "/html.png",
    label: "HTML",
    href: "https://en.wikipedia.org/wiki/HTML",
  },
  {
    id: 2,
    assetUrl: "/css.png",
    label: "CSS",
    href: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    id: 3,
    assetUrl: "/javascript.jpg",
    label: "JavaScript",
    href: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    id: 4,
    assetUrl: "/typescript.jpg",
    label: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  { id: 11, assetUrl: "/react.png", label: "React", href: "https://react.dev" },
  {
    id: 10,
    assetUrl: "/redux.png",
    label: "Redux",
    href: "https://redux-toolkit.js.org/",
  },
  {
    id: 5,
    assetUrl: "/nextjs.png",
    label: "NextJS",
    href: "https://nextjs.org/",
  },
  {
    id: 6,
    assetUrl: "/nodeJs.jpg",
    label: "NodeJS",
    href: "https://nodejs.org/en",
  },
  {
    id: 7,
    assetUrl: "/express.jpg",
    label: "Express",
    href: "https://expressjs.com/",
  },
  {
    id: 8,
    assetUrl: "/prisma.png",
    label: "Prisma",
    href: "https://www.prisma.io/",
  },
  {
    id: 9,
    assetUrl: "/postresql.png",
    label: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
];
