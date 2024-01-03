import { Box } from "@mui/system";
import { ReactNode } from "react";
import TopBar from "./TopBar";
import { useRouter } from "next/router";

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        height: "100vh",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          padding: 5,
          backgroundColor: "primary.light",
        }}
      >
        <Box>
          <TopBar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
