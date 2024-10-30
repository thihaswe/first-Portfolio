import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import basket from "../../Images/e-ecommerce.png";
import ProjectCard from "../ProjectCard";

const MiniEcommerce = () => {
  return (
    <ProjectCard
      prop={{
        title: "My E-commerce app",
        desc: `It is a mini-ecommerce shopping website`,
        href: "https://github.com/thihaswethiha-E-commerce",
        image: basket,
        reverse: true,
      }}
    />
  );

  {
    /* <Typography mt={5}>
        I had not finished that app becuase that was one of the app I wrote
        during the class in order not to forget what I have learned in the
        class.But It is absolutely working
        <span style={{ fontSize: "20px", marginLeft: "5px" }}>{":)"}</span>
      </Typography> */
  }
};

export default MiniEcommerce;
