import { Box } from "@mui/system";
import { ReactNode } from "react";
import TopBar from "./TopBar";
import { useRouter } from "next/router";

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  const router = useRouter();
  const isHome = router.pathname === "/aaa";
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        height: "100vh",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      {isHome && (
        <Box
          sx={{
            borderBottom: "2px solid black",
            position: "absolute",
            top: 10,

            height: 5,
            width: 300,
            marginLeft: 2,
          }}
        ></Box>
      )}

      <Box
        sx={{
          padding: 5,
          backgroundColor: "primary.light",
          display: isHome ? "flex" : "block",
        }}
      >
        {isHome && (
          <Box
            sx={{
              borderLeft: "2px solid black",
              position: "absolute",
              left: 5,
              top: 10,
              height: 300,
              width: 5,
              marginLeft: 2,
            }}
          ></Box>
        )}
        <Box>
          <TopBar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
