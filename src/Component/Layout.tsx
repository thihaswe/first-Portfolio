import { Box } from "@mui/system";
import { ReactNode } from "react";
import TopBar from "./TopBar";

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box sx={{ padding: 5, backgroundColor: "primary.light" }}>
        <TopBar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
