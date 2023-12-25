import Layout from "@/Component/Layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/general/theme";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage:
            "https://png.pngtree.com/thumb_back/fh260/background/20201009/pngtree-science-or-technology-background-with-dynamic-particles-trendy-colorful-design-template-image_406781.jpg",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </ThemeProvider>
  );
}
