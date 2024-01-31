import { Box, Divider, Paper, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import mainpage from "../Images/mainPage.png";
import Link from "next/link";
import orderCard from "../Images/orderCard.png";
import orderHome from "../Images/orderHome.png";
import orderMenus from "../Images/orderMenus.png";
import activerOrder from "../Images/activeOrder.png";
import BackofficeOrder from "../Images/backofficeOrderCard.png";
import Cart from "../Images/cartPage.png";
import qr from "../Images/qr.png";
import menuDetail from "../Images/menuDetail.png";
import menus from "../Images/menus.png";

const MyFoodie = () => {
  const images = [
    { url: orderHome, id: 1 },
    { url: orderMenus, id: 2 },
    { url: orderCard, id: 3 },
    { url: Cart, id: 4 },
    { url: orderCard, id: 5 },
    { url: activerOrder, id: 6 },
    { url: BackofficeOrder, id: 7 },
    { url: menus, id: 8 },
    { url: menuDetail, id: 9 },
    { url: qr, id: 10 },
  ];
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const textUnderLink = `if my app doen't work i am sorry my database free
  trial is ended :) but i will going to add a new one soon
 `;
  const alert = `alert .... orderapp will always takes you to the table 1`;
  return (
    <Box marginBottom={15}>
      <Typography sx={{ textAlign: "start", marginBottom: 10 }} variant="h5">
        MY FOODIE POS App
      </Typography>
      <Box display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"}>
        <Image
          src={mainpage}
          alt={"foodiePos"}
          width={400}
          height={250}
          style={{ width: isSmallScreen ? 300 : 450 }}
        />

        <Box sx={{ marginTop: { xs: 10, md: 10, lg: 0 } }}>
          <Paper
            elevation={3}
            style={{
              width: isSmallScreen ? 300 : 500,
              height: isSmallScreen ? 350 : 300,
              position: "relative",
            }}
          >
            <Paper
              elevation={3}
              style={{
                width: isSmallScreen ? 300 : 500,
                height: isSmallScreen ? 350 : 300,
                position: "relative",
                top: -15,
                right: -10,
                display: "flex",
                alignItems: "center", // Center vertically
              }}
            >
              <Box>
                <Typography sx={{ textAlign: "start", padding: 3 }}>
                  This one is called foodie pos and it includes
                  <span style={{ color: "#88DF9D" }}> orderapp</span> for
                  customers and{" "}
                  <span style={{ color: "#88DF9D" }}> backoffice app </span>for
                  managers to add or remove and update items, status to the
                  orders that come from customers.
                </Typography>
                <Link href={`https://my-foodie-pos.vercel.app/`}>
                  <Box>To my app</Box>
                </Link>
                <Typography sx={{ textDecoration: "none" }}>
                  {textUnderLink}
                </Typography>
                <Typography color={"red"}>{alert}</Typography>
              </Box>
            </Paper>
          </Paper>
        </Box>
      </Box>

      <Typography mt={5} sx={{ textDecoration: "none" }}>
        In this app, I am using Next Js framework for frontend and
        backend.Material UI for displaying beautiful UI and using redux toolkit
        for data and state management. I am using postgres SQL for database and
        I am using Prisma for connecting between database and backend. I
        admitted that this is not my idea but I wrote the 80% of the code by
        myself but inmitae some of the code from my teacher.
      </Typography>

      {/* <Box sx={{ mt: 10 }}>
        <Typography sx={{ textDecoration: "none" }}>
          Here are some of the photos from my app
        </Typography>
        {images.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.url}
              alt={"foodiePos"}
              width={400}
              height={250}
              style={{ width: isSmallScreen ? 300 : 450, margin: 5 }}
            />
          );
        })}
      </Box> */}
    </Box>
  );
};

export default MyFoodie;
