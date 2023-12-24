import TypingEffect from "@/Component/DIsplayText";
import roboto from "next/font/google";
import { Box, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import WavingHandIcon from "@mui/icons-material/WavingHand";

const index = () => {
  const nameText = "Hello I am thiha swe";

  const paragraphText =
    "I  am a fullstack-webdeveloper and I am really interested in ComputerScience.";

  return (
    <Box sx={{ marginTop: "15px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 500,
          margin: "0 auto",
          height: 200,
        }}
      >
        <Paper
          sx={{ width: 200, backgroundColor: "lightskyblue" }}
          elevation={1}
        >
          <Typography
            sx={{ fontWeight: "bold", fontStyle: "italic" }}
            variant="h5"
          >
            <WavingHandIcon sx={{ color: "#E4A67B" }} /> {nameText}
          </Typography>
          <br />
          <TypingEffect text={paragraphText} />
        </Paper>

        <Image
          src={"/myPhoto.png"}
          alt={"photo is unavailable now"}
          width={180}
          height={180}
          style={{ borderRadius: 100 }}
        />
      </Box>
      <Box sx={{ margin: "50px 0px 0px 50px" }}>
        <Typography variant="h5" fontWeight={"light"} textAlign={"start"}>
          My technical skills
        </Typography>
        <Divider
          sx={{
            width: 250,
            fontStyle: "bold",
            height: 15,
            borderBottomWidth: 5,
            borderColor: "black",
          }}
        ></Divider>
        <Box
          sx={{
            display: "flex",

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
                    width: 150,
                    height: 70,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",

                    transition: "all 0.2s ease-in-out",
                    padding: 1,
                    "&:hover": {
                      transform: "scale(1.3,1.3)",

                      backgroundColor: "lightskyblue",
                      borderRadius: 15,
                    },
                  }}
                >
                  <Typography sx={{ color: "black" }}>{item.label}</Typography>
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

export default index;

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
