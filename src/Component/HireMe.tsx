import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import TerminalIcon from "@mui/icons-material/Terminal";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
const HireMe = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const list = [
    { id: 1, name: "web design", icon: <WysiwygIcon sx={{ fontSize: 50 }} /> },
    {
      id: 2,
      name: "web development",
      icon: <DomainVerificationIcon sx={{ fontSize: 50 }} />,
    },
    { id: 3, name: "backend", icon: <TerminalIcon sx={{ fontSize: 50 }} /> },
    {
      id: 4,
      name: "service and maintanence",
      icon: <SettingsSuggestIcon sx={{ fontSize: 50 }} />,
    },
  ];
  return (
    <Box
      sx={{
        mt: 5,

        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: "secondary.main",
            fontWeight: "bold",
            justifyContent: "center",
          }}
        >
          {` < You can hire me for />`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {list.map((item) => {
            return (
              <Paper
                key={item.id}
                sx={{
                  width: 200,
                  height: 200,
                  bgcolor: "info.main",
                  m: 1,
                  elevation: 9,
                }}
              >
                <h3>{item.name}</h3>
                {item.icon}
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HireMe;
