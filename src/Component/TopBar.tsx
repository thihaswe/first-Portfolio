import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CancelIcon from "@mui/icons-material/Cancel";
import { useRouter } from "next/router";
import htmlTag from "../Images/htmlLogo.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/content/themeContent";

const TopBar = () => {
  const router = useRouter();

  const isActive = (href: string): Boolean => router.pathname === href;
  const { data } = useContext(ThemeContext);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [isSmallScreen, router.pathname]);

  return (
    <Box>
      <Box
        justifyContent={"space-around"}
        alignItems={"center"}
        height={60}
        sx={{
          borderRadius: 10,
          mb: 5,
          backgroundColor: data === "light" ? "lightblue" : "info.main",
          display: { xs: "none", sm: "flex" },
        }}
        border="1px solid grey"
        textAlign={"center"}
      >
        <Image
          src={htmlTag}
          alt="Cat Image"
          style={{
            borderRadius: 50,
            width: 50,
            height: 50,
          }}
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
                    transition: "all 0.2s ease-in-out",
                    borderBottom: isActive(item.href)
                      ? "3px solid black "
                      : "none",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Box display={{ xs: "block", sm: "none" }}>
          <Button
            sx={{
              position: "relative",
              left: -100,
            }}
            onClick={() => {
              setVisible(visible ? false : true);
            }}
          >
            {!visible ? <MenuIcon></MenuIcon> : <CancelIcon></CancelIcon>}
          </Button>
        </Box>

        <Box
          className="menuBox"
          sx={{
            display: visible ? "block" : "none",
            position: "absolute",
            zIndex: 5,
            backgroundColor: "primary.dark",
            borderRadius: 5,
          }}
        >
          {topBarItems.map((item) => {
            return (
              <Box key={item.id} sx={{ m: 3 }}>
                <Link
                  href={`${item.href}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  {item.title}
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;

export const topBarItems = [
  { id: 1, href: "/", title: "Home" },
  { id: 2, href: "/my-projects", title: "My projects" },
  { id: 3, href: "/contact-me", title: "Contact me" },
];
