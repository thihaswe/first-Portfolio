import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import htmlTag from "../Images/htmlLogo.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/content/themeContent.tsx";

const TopBar = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isActive = (href: string): boolean => router.pathname === href;
  const { data } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <Box>
      {/* Desktop Navigation */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          height: 70,
          borderRadius: 4,
          mb: 5,
          backgroundColor: data === "light" ? "info.main" : "info.main",
          px: 4,
          border: `1px solid ${data === "light" ? "rgba(85, 139, 153, 0.2)" : "rgba(255,255,255,0.1)"}`,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              position: "relative",
              width: 50,
              height: 50,
              mr: 2,
            }}
          >
            <Image
              src={htmlTag}
              alt="Logo"
              fill
              style={{
                borderRadius: 12,
                objectFit: "contain",
              }}
            />
          </Box>
        </Link>

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          {topBarItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  px: 3,
                  py: 2,
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: isActive(item.href) ? 600 : 500,
                    color: isActive(item.href) ? "primary.main" : "text.primary",
                    position: "relative",
                    "&::after": {
                      content: isActive(item.href) ? '""' : "none",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      backgroundColor: "primary.main",
                      borderRadius: "3px 3px 0 0",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>

      {/* Mobile Navigation */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Button
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            minWidth: "auto",
            p: 2,
            borderRadius: 2,
            bgcolor: data === "light" ? "info.main" : "info.main",
            zIndex: 100,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>

        {/* Mobile Menu */}
        {menuOpen && (
          <Box
            sx={{
              position: "absolute",
              top: 70,
              right: 16,
              width: 200,
              bgcolor: data === "light" ? "white" : "#1a1a2e",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              overflow: "hidden",
              zIndex: 99,
            }}
          >
            <List sx={{ py: 1 }}>
              {topBarItems.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    px: 3,
                    py: 2,
                    cursor: "pointer",
                    bgcolor: isActive(item.href) 
                      ? (data === "light" ? "primary.light" : "primary.dark")
                      : "transparent",
                    borderLeft: isActive(item.href)
                      ? `3px solid ${data === "light" ? "primary.main" : "secondary.main"}`
                      : "none",
                    "&:hover": {
                      bgcolor: data === "light" ? "info.main" : "rgba(255,255,255,0.05)",
                    },
                  }}
                  component={Link}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <Typography
                    sx={{
                      fontWeight: isActive(item.href) ? 600 : 400,
                      color: isActive(item.href) ? "primary.main" : "text.primary",
                    }}
                  >
                    {item.title}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TopBar;

export const topBarItems = [
  { id: 1, href: "/", title: "Home" },
  { id: 2, href: "/my-projects", title: "Projects" },
  { id: 3, href: "/contact-me", title: "Contact" },
];
