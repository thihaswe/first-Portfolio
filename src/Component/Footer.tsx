import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography, useMediaQuery } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        mt: 5,
        padding: 2,
        backgroundColor: "lightblue",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Contact me
      </Typography>
      <Box
        sx={
          isSmallScreen
            ? {}
            : { display: "flex", justifyContent: "space-between" }
        }
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 200,
              justifyContent: "space-between",
            }}
          >
            <EmailIcon sx={{ mr: 5 }} />
            <Typography>thihais123@gmail.com</Typography>
          </div>

          <div
            style={{
              display: "flex",
              width: 200,
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            <PhoneIcon sx={{ mr: 5 }} />
            <Typography>09 - 767029207</Typography>
          </div>
        </Box>
        <Box>
          <Typography>
            &#169; 2023-2024 Thiha Swe
            <br /> All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
