import { Box } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import HomepageContent1 from "./HomepageContent1";
import HomepageContent2 from "./HomepageContent2";

import { HompePageitem} from"./HompepageItems"
import { HompePageitem2} from"./HompepageItems"

const Home = () => {
  return (
    <Box>
      <Navbar />
      <HomepageContent1 data={HompePageitem}/>
      <HomepageContent2 data={HompePageitem2}/>
    </Box>
  );
};

export default Home;
