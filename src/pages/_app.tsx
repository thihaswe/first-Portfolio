import Layout from "@/Component/Layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/general/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
