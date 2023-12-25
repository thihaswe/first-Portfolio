import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import htmlTag from "../Images/htmlLogo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const TopBar = () => {
  const router = useRouter();
  const isActive = (href: string): Boolean => router.pathname === href;
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      height={60}
      sx={{
        mb: 5,
        backgroundColor: "lightblue",
      }}
      border="1px solid grey"
      textAlign={"center"}
    >
      <Image
        src={htmlTag}
        alt="Cat Image"
        style={{ borderRadius: 50, width: 50, height: 50 }}
        width={100}
        height={100}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "50px",
          textDecoration: "none",
        }}
      >
        {topBarItems.map((item) => {
          return (
            <Link
              href={item.href}
              style={{ textDecoration: "none" }}
              key={item.id}
            >
              <Typography
                sx={{
                  color: "black",
                  mr: 5,
                  borderBottom: isActive(item.href)
                    ? "3px solid black "
                    : "none",
                }}
              >
                {item.title}
              </Typography>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default TopBar;

export const topBarItems = [
  { id: 1, href: "/", title: "Home" },
  { id: 2, href: "/my-projects", title: "My projects" },
];
