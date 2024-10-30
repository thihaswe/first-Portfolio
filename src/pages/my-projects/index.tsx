import MiniEcommerce from "@/Component/projects/MiniEcommerce";
import MyCashNote from "@/Component/projects/MyCashNote";
import MyFoodie from "@/Component/projects/MyFoodie";

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
