import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import imgtext from "./imgtext.png"
import HomepageContent1 from "./HomepageContent1";
import HomepageContent2 from "./HomepageContent2";
import HomepageContent3 from "./HomepageContent3";

import { HompePageitem} from"./HompepageItems"
import { HompePageitem2} from"./HompepageItems"
import { HompePageitem3} from"./HompepageItems"
import HomepageContent4 from "./HomepageContent4";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <HomepageContent1 data={HompePageitem}/>
      <HomepageContent2 data={HompePageitem2}/>
      
      <Box mt="20">
      <Image src="https://static1.lenskart.com/media/desktop/img/23apr/summer-sale/home/exrta-60_-off.gif" alt="img" />
    </Box>
    <Image
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        alt="img"
        mt="10"
      />
      <HomepageContent3 data={HompePageitem3} src={imgtext} />
      <br />
      <br />
      <br />
      <br />
      <HomepageContent4
        text="Premium Eyeglasses - Buy 1 Get 1 + Free Membership"
        src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/PREMIUM%20BRANDS%20WEB.jpg"
      />
       <br />
      <br />
      <br />
      <br />
      <HomepageContent4
        text="As Seen on Shark Tank"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      />
        <br />
      <br />
      <br />
      <br />
      <HomepageContent4
        text="As Seen On Karan Johar"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
      />
        <br />
      <br />
      <br />
      <br />
      <HomepageContent4
        text="Trending Sunglasses"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />
        <br />
      <br />
      <br />
      <br />
      <HomepageContent4
        text="OJOS"
        src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/ojos%20banner/ojos%20banner/web%20banner/ojos-web-1199.gif"
      />
        <br />
      <br />
      <br />
      <br />
      <HomepageContent4
        text="Aquacolor - Glam Up With Color Lenses"
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
      />
    </Box>
  );
};

export default Home;
