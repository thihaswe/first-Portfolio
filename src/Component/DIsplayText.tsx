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

  return <Typography>{displayText}</Typography>;
};

export default TypingEffect;
