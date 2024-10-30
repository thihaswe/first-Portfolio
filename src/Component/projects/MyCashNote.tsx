import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cashNote from "../../Images/myCashNote.png";
import ProjectCard from "../ProjectCard";

const MyCashNote = () => {
  return (
    <ProjectCard
      prop={{
        title: "My-Cash-Note App",
        desc: `The Cash Note app is my latest app.In this app i focus more on
              data modelling than the design. I guarentee that this project is
              100 % coded by me with the help of google.`,
        href: "https://github.com/thihaswe/my_cash_note",
        image: cashNote,
        reverse: false,
      }}
    />
  );
};

export default MyCashNote;
