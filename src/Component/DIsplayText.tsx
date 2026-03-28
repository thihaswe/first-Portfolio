import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";

interface Prop {
  text: string;
}

const TypingEffect = ({ text }: Prop) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Typing animation
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, index + 1));
      index += 1;

      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, 50);

    // Cursor blink animation
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <Box sx={{ position: "relative", display: "inline" }}>
      <Typography 
        sx={{ 
          color: "text.primary",
          lineHeight: 1.8,
          fontSize: { xs: "0.95rem", md: "1.05rem" },
        }}
      >
        {displayText}
      </Typography>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "2px",
          height: "1.2em",
          backgroundColor: "primary.main",
          ml: 0.5,
          verticalAlign: "middle",
          opacity: showCursor ? 1 : 0,
          animation: "blink 1s infinite",
          "@keyframes blink": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0 },
          },
        }}
      />
    </Box>
  );
};

export default TypingEffect;
