import React from "react";
import { Box, Grid, Center } from "@chakra-ui/react";
import { services, about, helps } from "./footerlist";
import { FooterContent, FooterContent1, FooterContent2 } from "./FooterContent";

const Footer = () => {
  return (
    <Box
      bgColor="#000042"
      color="whiteAlpha.900"
      p={{ lg: "0", md: "5", base: "5" }}
    >
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        justifyContent="space-between"
        textAlign="left"
        ml="2%"
      >
        <Box w="60%" pl="5">
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap="5"
          >
            <FooterContent1 data={services} text="Services" />
            <FooterContent1 data={about} text="About Us" />
            <FooterContent1 data={helps} text="Help" />
          </Grid>
        </Box>
        <Center>
          <FooterContent2 />
        </Center>
      </Grid>
      <hr />
      <FooterContent />
    </Box>
  );
};

export default Footer;
