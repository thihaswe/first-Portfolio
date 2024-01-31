import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface Prop {
  text: string;
}
const TypingEffect = ({ text }: Prop) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index += 1;

      if (index === text.length - 1) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval based on your preference

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <Typography sx={{ textDecoration: "none", p: 1 }}>{displayText}</Typography>
  );
};

export default TypingEffect;

// <Typography>
// &#169; 2023-2024 Thiha Swe
// <br /> All Rights Reserved
// </Typography>

//   <PhoneIcon sx={{ mr: 5 }} />
//   <Typography>09 - 767029207</Typography>
// <EmailIcon sx={{ mr: 5 }} />
//<Typography>thihais123@gmail.com</Typography>
