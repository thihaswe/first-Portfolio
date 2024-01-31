import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import basket from "../Images/download (1).png";

const MiniEcommerce = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Typography sx={{ textAlign: "start", marginBottom: 10 }} variant="h5">
        My E-commerce app
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={"row-reverse"}
        flexWrap={"wrap"}
      >
        <Image
          src={basket}
          alt={"foodiePos"}
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
                  It is a mini-ecommerce app and it is just a mini-app,I did not
                  deploy it in any cloud service but I will leave a link to the
                  git repo of it.
                </Typography>
                <Link href={"https://github.com/thihaswe/thiha-E-commerce"}>
                  <Box>To my github repo</Box>
                </Link>
              </Box>
            </Paper>
          </Paper>
        </Box>
      </Box>
      {/* <Typography mt={5}>
        I had not finished that app becuase that was one of the app I wrote
        during the class in order not to forget what I have learned in the
        class.But It is absolutely working
        <span style={{ fontSize: "20px", marginLeft: "5px" }}>{":)"}</span>
      </Typography> */}
    </Box>
  );
};

export default MiniEcommerce;
