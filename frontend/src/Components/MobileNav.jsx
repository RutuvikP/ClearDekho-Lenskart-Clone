import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
import Login from "../Pages/login/Login"
import Signup from "../Pages/Signup/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MobileNav = () => {
  let isAuth = JSON.parse(localStorage.getItem("auth")) || false;
  let userdata = JSON.parse(localStorage.getItem("userData")) || "";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Field = React.useRef();

  const navigate=useNavigate()

  const showToastMessage = () => {
    toast.success("Logout Successfull !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
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

            <Link to="/cart">
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
            initialFocusRef={Field}
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
                {isAuth ? (
                  <Flex
                    
                    p="5%"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                  >
                    <Flex w="100%">
                      <Avatar
                        src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
                        size="lg"
                        mr="2"
                      />
                      <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        <Text mt="10px" fontSize="20px" color="blackAlpha.900">
                          {userdata.name}
                        </Text>
                        <Text color="gray.500" mt="5%" fontSize="sm">
                          Enjoy Buy 1 Get 1 offer for 365 days
                        </Text>
                      </Flex>
                    </Flex>
                    <Button
                      w="100%"
                      h="35px"
                      mt="5%"
                      colorScheme="blue"
                      fontSize="15px"
                      _hover={{ bg: "blue.400" }}
                    >
                      GET GOLD MEMBERSHIP
                    </Button>
                  </Flex>
                ) : ( <Box
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
                      
                      _hover={{ bg: "blue.200" }}
                    >
                      <Login />
                    </Box>
                    <Box
                      bg="#007AFF"
                      p="3px 15px"
                      color={"white"}
                      
                      _hover={{ bg: "blue.200" }}
                    >
                      <Signup/>
                    </Box>
                  </Box>
                </Box>)}
                {userdata.role=="admin"?<Link to={'/admindashboard'} style={{fontSize:"15px",fontWeight:"600"}}>ADMIN</Link>:null}
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
                        <Link to="/eyeglasses">
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
                        <Link to="/eyeglasses">
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
                        <Link to="/eyeglasses">
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
              {isAuth && (
                <DrawerFooter bg="#1D3E53">
                  <Button
                    mt="5%"
                    fontSize="18px"
                    colorScheme="blue"
                    borderBottom="1px solid #526171"
                    p="6% 15%"
                    _hover={{ bg: "blue.200" }}
                    onClick={() => {
                      localStorage.removeItem("auth");
                      localStorage.removeItem("userData");
                      localStorage.removeItem("token");
                      showToastMessage();
                      setTimeout(() => {
                        navigate("/");
                      }, 1000);
                    }}
                  ><ToastContainer />
                    Sign Out
                  </Button>
                </DrawerFooter>
              )}
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    </Box>
  );
};

export default MobileNav;
