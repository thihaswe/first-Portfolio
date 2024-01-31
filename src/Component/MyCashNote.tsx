import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cashNote from "../Images/myCashNote.png";

const MyCashNote = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ mt: 15 }}>
      <Typography sx={{ textAlign: "start", marginBottom: 10 }} variant="h5">
        My-Cash-Note App
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <Image
          src={cashNote}
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
                  The Cash Note app is my latest app.In this app i focus more on
                  data modelling than the design. I guarentee that this project
                  is 100 % coded by me with the help of google.
                </Typography>
                <Link href={"https://github.com/thihaswe/my_cash_note"}>
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

export default MyCashNote;
