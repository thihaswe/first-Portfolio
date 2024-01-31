import MiniEcommerce from "@/Component/MiniEcommerce";
import MyCashNote from "@/Component/MyCashNote";
import MyFoodie from "@/Component/MyFoodie";

import { Box } from "@mui/material";

const MyProject = () => {
  return (
    <Box>
      <MyFoodie />
      <MiniEcommerce />
      <MyCashNote />
    </Box>
  );
};

export default MyProject;
