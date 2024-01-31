import HireMe from "@/Component/HireMe";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const ContactMe = () => {
  const ListItemList = [
    {
      id: 1,
      href: "tel:+95 9 767029207",
      icon: (
        <PhoneIcon
          style={{ fontSize: 35, color: "secondary.main" }}
          sx={{
            transition: "all ease-in-out 0.3s",
            ":hover": { transform: "scale(1.8)" },
          }}
        />
      ),
    },
    {
      id: 2,
      href: "mailto:thihais123@gmail.com",
      icon: (
        <EmailIcon
          style={{ fontSize: 35, color: "secondary.main" }}
          sx={{
            transition: "all ease-in-out 0.3s",
            ":hover": { transform: "scale(1.8)" },
          }}
        />
      ),
    },
    {
      id: 3,
      href: "https://t.me/TonyStark7492",
      icon: (
        <TelegramIcon
          style={{ fontSize: 35, color: "secondary.main", margin: 15 }}
          sx={{
            transition: "all ease-in-out 0.3s",
            ":hover": { transform: "scale(1.8)" },
          }}
        />
      ),
    },
    {
      id: 4,
      href: `https://www.linkedin.com/in/thiha-swe-0a168124a?utm_
    source=share&utm_campaign=share_via&utm_content=profile&utm
    _medium=android_app`,
      icon: (
        <LinkedInIcon
          style={{ fontSize: 35, color: "secondary.main", margin: 15 }}
          sx={{
            transition: "all ease-in-out 0.3s",
            ":hover": { transform: "scale(1.8)" },
          }}
        />
      ),
    },
    {
      id: 5,
      href: "https://github.com/thihaswe",
      icon: (
        <GitHubIcon
          style={{ fontSize: 35, color: "secondary.main", margin: 15 }}
          sx={{
            transition: "all ease-in-out 0.3s",
            ":hover": { transform: "scale(1.8)" },
          }}
        />
      ),
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 900,
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <Box sx={{ textAlign: "start", alignItems: "center", m: 5 }}>
          <a href="/CV_20240130THS.pdf" download="/CV_20240130THS.pdf">
            <Button sx={{ borderRadius: 3 }} variant="contained">
              <Typography>My Resume</Typography>
              <DownloadIcon></DownloadIcon>
            </Button>
          </a>
        </Box>
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            How to Contact?
          </Typography>
          <Box
            sx={{ color: "secondary.main", fontSize: 35, fontStyle: "italic" }}
          >
            <List>
              <ListItem>
                <ChromeReaderModeIcon sx={{ mr: 3 }} />
                Name - Thiha Swe
              </ListItem>
              <ListItem>
                <Link
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.3)")
                  }
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  href="tel:+95 9 767029207"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    transition: "transform ease-in-out 0.3s",
                  }}
                  className="phone"
                >
                  <PhoneIcon sx={{ mr: 3 }} />
                  Ph - 09 7670 29 207
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="mailto:thihais123@gmail.com"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all ease-in-out 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.3)")
                  }
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <EmailIcon sx={{ mr: 3 }} />
                  Email - thihais123@gmail.com
                </Link>
              </ListItem>
              <ListItem>
                {ListItemList.filter((item) => item.id > 2)
                  .sort((a, b) => b.id - a.id)
                  .map((item) => {
                    return (
                      <Link
                        key={item.id}
                        href={`${item.href}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {item.icon}
                      </Link>
                    );
                  })}
                {/* <Link
                  href="https://t.me/TonyStark7492"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <TelegramIcon
                    sx={{ fontSize: 35, color: "secondary.main" }}
                  />
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  href={`https://www.linkedin.com/in/thiha-swe-0a168124a?utm_
                  source=share&utm_campaign=share_via&utm_content=profile&utm
                  _medium=android_app`}
                >
                  <LinkedInIcon
                    sx={{ fontSize: 35, color: "secondary.main", m: "0 15px" }}
                  ></LinkedInIcon>
                </Link>
                <Link href={`https://github.com/thihaswe`}>
                  <GitHubIcon
                    sx={{ fontSize: 33, color: "secondary.main" }}
                  ></GitHubIcon>
                </Link> */}
              </ListItem>
            </List>
          </Box>
        </Box>
        <HireMe />
      </Box>
    </Box>
  );
};

export default ContactMe;
