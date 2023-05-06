import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
const HomepageContent4 = ({ text, src }) => {
  return (
    <Box mt="10">
      <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center">
        {text}
      </Text>
      <Image src={src} alt="img" />
    </Box>
  );
};

export default HomepageContent4;
