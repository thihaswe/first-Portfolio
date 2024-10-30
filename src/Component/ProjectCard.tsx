import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Prop {
  title: string;
  desc: string;
  href: string;
  image: StaticImageData;
  reverse: boolean;
}

const ProjectCard = ({ prop }: { prop: Prop }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ mt: 15 }}>
      <Typography sx={{ textAlign: "start", marginBottom: 10 }} variant="h5">
        {prop.title}
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={prop.reverse ? "row-reverse" : "row"}
        flexWrap={"wrap"}
      >
        <Image
          src={prop.image}
          alt={"myCashNote"}
          width={400}
          height={250}
          style={{ width: isSmallScreen ? 300 : 450 }}
        />

        <Box sx={{ marginTop: { xs: 10, md: 10, lg: 0 } }}>
          <Paper
            elevation={3}
            style={{
              width: isSmallScreen ? 300 : 500,
              height: isSmallScreen ? 350 : 300,
              position: "relative",
            }}
          >
            <Paper
              elevation={3}
              style={{
                width: isSmallScreen ? 300 : 500,
                height: isSmallScreen ? 350 : 300,
                position: "relative",
                top: -15,
                right: -10,
                display: "flex",
                alignItems: "center", // Center vertically
              }}
            >
              <Box>
                <Typography sx={{ textAlign: "start", padding: 3 }}>
                  {prop.desc}
                </Typography>
                <Link href={prop.href}>
                  <Box>To my github repo</Box>
                </Link>
              </Box>
            </Paper>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
