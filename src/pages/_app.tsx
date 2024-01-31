import Layout from "@/Component/Layout";
import ThemeContentPage from "@/content/themeContent";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContentPage>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContentPage>
  );
}
