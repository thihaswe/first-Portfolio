import TypingEffect from "@/Component/DIsplayText";
import { ThemeContext } from "@/content/themeContent";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const HomePage = () => {
  const flexWrap = useMediaQuery("(max-width:560px)");
  const nameText = "Hello I am thiha swe";
  const { data } = useContext(ThemeContext);

  const paragraphText =
    "I  am a fullstack-webdeveloper and I am really interested in ComputerScience.";

  return (
    <Box
      sx={{
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          maxWidth: 800,
          margin: "0 auto",
          height: { xs: 300, md: 200 },
        }}
      >
        <Box sx={{ marginBottom: flexWrap ? 5 : 0 }}>
          <Paper
            sx={{
              position: "relative",
              backgroundColor: data === "light" ? "lightblue" : "info.main",
              width: 250,
              height: 250,
            }}
            elevation={3}
          >
            <Paper
              sx={{
                textDecoration: "none",
                position: "relative",
                top: -10,
                right: -10,
                width: 250,
                height: 250,
                backgroundColor: data === "light" ? "lightblue" : "info.main",
                mb: { xs: 10, md: 0 },
              }}
              elevation={1}
            >
              <Typography
                sx={{
                  paddingTop: 3,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  textDecoration: "none",
                }}
                variant="h6"
              >
                <WavingHandIcon sx={{ color: "#E4A67B" }} /> {nameText}
              </Typography>
              <br />
              <TypingEffect text={paragraphText} />
            </Paper>
          </Paper>
        </Box>
        <Image
          src={"/myPhoto.png"}
          alt={"photo is unavailable now"}
          width={230}
          height={230}
          style={{ borderRadius: 130 }}
        />
      </Box>
      <Box
        sx={{
          margin: flexWrap ? "230px 0 0 50px" : "150px 0px 0px 50px",
        }}
      >
        <Typography
          sx={{
            textDecoration: "none",
            fontWeight: "light",
            textAlign: "start",
            color: "secondary.main",
          }}
        >
          I am using these stacks to develop full-stack web apps
        </Typography>

        <Box
          sx={{
            display: "flex",
            mt: 1,
            flexWrap: "wrap",
          }}
        >
          {stacks.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.id}
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    width: { xs: 50, md: 100 },
                    height: 50,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",

                    transition: "all 0.2s ease-in-out",
                    padding: 1,
                    "&:hover": {
                      transform: "scale(1.2,1.2 )",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: { xs: 10, md: 13 },
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Image
                    src={item.assetUrl}
                    alt={"photo is unavailable now"}
                    width={30}
                    height={30}
                    style={{
                      borderRadius: 10,
                    }}
                  />
                </Box>
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
    href: `https://en.wikipedia.o
    rg/wiki/JavaScript#:~:tex
    t=JavaScript%20is%20
    a%20high%2Dlevel,functional
    %2C%20and%20im
    perative%20programming%20styles.`,
  },
  {
    id: 4,
    assetUrl: "/typescript.jpg",
    label: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    id: 10,
    assetUrl: "/redux.png",
    label: "Redux Toolkit",
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
    label: "ExpressJS",
    href: "https://expressjs.com/",
  },
  {
    id: 8,
    assetUrl: "/prisma.png",
    label: "Prisma(ORM)",
    href: "https://www.prisma.io/",
  },
  {
    id: 9,
    assetUrl: "/postresql.png",
    label: "PostgreSql",
    href: "https://www.postgresql.org/",
  },
];
