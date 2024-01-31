import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
const CopyRight = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        height: 150,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "start",
          p: 1,
        }}
      >
        <Box>
          <Typography sx={{ color: "secondary.main" }}>contact us</Typography>
          <Typography sx={{ color: "secondary.main" }}>
            privacy and policy
          </Typography>
          <Typography sx={{ color: "secondary.main" }}>
            Terms & Conditions
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link
            style={{ textDecoration: "none" }}
            href={`https://www.linkedin.com/in/thiha-swe-0a168124a?utm_
            source=share&utm_campaign=share_via&utm_content=profile&utm
            _medium=android_app`}
          >
            <LinkedInIcon
              sx={{ fontSize: 35, color: "white", m: "0 15px" }}
            ></LinkedInIcon>
          </Link>
          <Link href={`https://github.com/thihaswe`}>
            <GitHubIcon sx={{ fontSize: 33, color: "white" }}> </GitHubIcon>
          </Link>
        </Box>
      </Box>
      <Typography sx={{ color: "secondary.main" }}>
        &#169; 2023-2024 Thiha Swe <br /> All Rights Reserved
      </Typography>
    </Box>
  );
};

export default CopyRight;
