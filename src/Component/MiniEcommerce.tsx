import { Box, Typography, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import mainpage from "../Images/mainPage.png";

const MiniEcommerce = () => {
  return (
    <Box>
      <Typography sx={{ textAlign: "start", marginBottom: 10 }} variant="h5">
        My E-commerce app
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={"row-reverse"}
      >
        <Image src={mainpage} alt={"foodiePos"} width={450} height={250} />

        <Box>
          <Paper
            elevation={3}
            style={{
              width: 500,
              height: 300,
              position: "relative",
            }}
          >
            <Paper
              elevation={3}
              style={{
                width: 530,
                height: 300,
                position: "relative",
                top: -15,
                right: -10,
                display: "flex",
                alignItems: "center", // Center vertically
              }}
            >
              <Box>
                <Typography sx={{ textAlign: "start", padding: 3 }}>
                  It is a mini-ecommerce app and it is just a mini-app,I didn't
                  deploy it in any cloud service but I will leave a link the git
                  repo of it
                </Typography>
                <Link href={"https://github.com/thihaswe/thiha-E-commerce"}>
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

export default MiniEcommerce;
