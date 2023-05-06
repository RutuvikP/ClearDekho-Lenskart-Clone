import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const HomepageContent2 = ({ data }) => {
  return (
    <Box cursor="pointer" p="-1" width={"100%"}>
      <Box>
        <Slide>
          {data.map((e) => (
            <Box key={e}>
              <Image src={`${e.img}`} alt={e.caption} w="100%" />
            </Box>
          ))}
        </Slide>
      </Box>
    </Box>
  );
};

export default HomepageContent2;
