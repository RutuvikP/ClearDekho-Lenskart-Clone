import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import Cleardekhologo from "../Cleardekhologo.png";
import { MdWifiCalling3 } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import {
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  HStack,
  Image,
  Input,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  Heading,
  Avatar,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";
const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  return (
    <Box
      display={{ lg: "inherit", xl: "none" }}
      cursor="pointer"
      bg="#fbf9f7"
      p={1}
    >
      <HStack m="auto" gap={"2px"}>
        <Button background={"white"} p="0" onClick={onOpen}>
          <HamburgerIcon fontSize="20px" />
        </Button>
        <Box w={{ lg: "20%", md: "20%", sm: "18%", base: "30%" }}>
          <Link to="/">
            <Image
              src={Cleardekhologo}
              alt="logo"
              w={{ lg: "75%", md: "100%", sm: "100%", base: "100%" }}
            />
          </Link>
        </Box>
        <Box w="70%" display={{ sm: "inherit", base: "none" }}>
          <Input
            placeholder="What are you looking for"
            border="1px solid black"
            w="90%"
            fontSize="16px"
            h="35px"
          />
        </Box>

        <Box w={{ lg: "20%", md: "20%", sm: "18%", base: "30%" }}>
          <HStack fontSize="10px" fontWeight="bold">
            <MdWifiCalling3 />
            <Text>1800-111-111</Text>
          </HStack>
        </Box>
        <Box>
          <Box
            display={"grid"}
            gridTemplateColumns={"repeat(2,1fr)"}
            gap={"15px"}
          >
            <Link to="Wishlist Route">
              <Box
                fontSize="15px"
                p="4% 0%"
                color="black"
                _hover={{ fontWeight: "bold" }}
              >
                <AiFillHeart />
              </Box>
            </Link>

            <Link to="Cart Route">
              <Box
                fontSize="15px"
                p="4% 0%"
                color="black"
                _hover={{ fontWeight: "bold" }}
              >
                <HiShoppingBag />
              </Box>
            </Link>
          </Box>
          <Drawer
            size="xs"
            isOpen={isOpen}
            placement="left"
            initialFocusRef={firstField}
            onClose={onClose}
            
          >
            <DrawerOverlay />
            <DrawerContent color="white" backgroundColor={"#1D3E53"}>
              <DrawerCloseButton />
              <DrawerHeader
                backgroundColor={"#1D3E53"}
                borderBottom={"2px solid green"}
                m="5px 30px"
              >
                {/* <Authentication logic  */}
                <Box
                  style={{
                    padding: "5%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: "5px",
                      marginBottom: "-6%",
                    }}
                  >
                    <Box
                      bg="#007AFF"
                      p="3px 15px"
                      color={"white"}
                      // rounded="lg"
                      _hover={{ bg: "blue.200" }}
                    >
                      {/* login element */}
                      Login
                    </Box>
                    <Box
                      bg="#007AFF"
                      p="3px 15px"
                      color={"white"}
                      // rounded="lg"
                      _hover={{ bg: "blue.200" }}
                    >
                      {/* login element */}
                      Signup
                    </Box>
                  </Box>
                </Box>
              </DrawerHeader>
              <DrawerBody borderBottomWidth="1px" backgroundColor={"#1D3E53"}>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom={"2px solid grey"}
                      m="5px 5px"
                      fontSize="15px"
                      p="4% 0%"
                      fontWeight={"500"}
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Contact Us
                    </Box>
                  </Link>
                </Box>

                <Heading mt="15%"  
                      color="white" mb="5%" fontSize="15px">
                  HIGHLIGHTS
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Check Frame Size
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Gold Membership
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Try Frames in 3D
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="1px solid white"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Dowloads Apps
                    </Box>
                  </Link>
                </Box>
                <Heading mt="15%"  color="white" fontSize="15px" mb="5%">
                  SHOP NOW
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto">
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Men
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Women
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={5}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Kids
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <Heading mt="15%"  color="white" fontSize="15px" mb="5%">
                  Our Services
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      fontSize="15px"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Free Home Trail
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Home Eye check-up
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Store Locator
                    </Box>
                  </Link>
                </Box>
               
                <Heading mt="15%"  color="white" fontSize="15px" mb="5%">
                  INTERNATIONAL
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Singapore
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                     USA
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                     UAE
                    </Box>
                  </Link>
                </Box>

                <Heading mt="15%"  color="white" fontSize="15px" mb="5%">
                  FAQ's & POLICIES
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Frequently Asked Questions
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Cancellation & Return Policy
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      p="5% 0%"
                      color="white"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Cobrowsing
                    </Box>
                  </Link>
                </Box>

                <Accordion allowMultiple></Accordion>
              </DrawerBody>
              {/* signout logic for hamburgermenu */}
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    </Box>
  );
};

export default MobileNav;
