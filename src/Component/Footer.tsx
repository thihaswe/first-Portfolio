import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,

        backgroundColor: "lightblue",
      }}
    >
      <Typography variant="h5">Contact me</Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <EmailIcon sx={{ mr: 5 }} />
        <Typography>thihais123@gmail.com</Typography>
      </div>
      <div></div>
    </Box>
  );
};

export default Footer;
