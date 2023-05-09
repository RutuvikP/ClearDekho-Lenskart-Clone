import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import Cleardekhologo from "../Cleardekhologo.png";
import { MdWifiCalling3 } from "react-icons/md";
import { TriangleDownIcon } from "@chakra-ui/icons";

import {
  Box,
  Spacer,
  Flex,
  Text,
  Image,
  Input,
  Button,
  HStack,
  Center,
  Avatar,
  Heading,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MobileNav from "./MobileNav";
import Login from "../Pages/login/Login";
import Signup from "../Pages/Signup/Signup";

const NavbarTopDescription = [
  {
    Tag: "Do more, Be More  | ",
  },
  {
    Tag: "Try in 3D  | ",
  },
  {
    Tag: "Store Locator  | ",
  },
  {
    Tag: "Quality  | ",
  },
  {
    Tag: "USA  | ",
  },
  {
    Tag: "Singapore  | ",
  },
  {
    Tag: "UAE  | ",
  },
  {
    Tag: "John Jacobs  | ",
  },
  {
    Tag: "Aqualens  | ",
  },
  {
    Tag: "Cobrowsing  | ",
  },
  {
    Tag: "Engineering Blog  | ",
  },
  {
    Tag: "Lenskart Franchise  | ",
  },
  {
    Tag: "Lenskart Optom Partner Program  ",
  },
];

const Navbar = () => {
  let isAuth = JSON.parse(localStorage.getItem("auth")) || false;
  let userdata = JSON.parse(localStorage.getItem("userData")) || "";

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEyeglassesOpen, setIsEyeglassesOpen] = useState(false);
  const [isComputerGlassesOpen, setIsComputerGlassesOpen] = useState(false);

  const showToastMessage = () => {
    toast.success("Logout Successfull !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Box overflow="hidden" bg="white">
      <Box display={{ base: "none", xl: "inherit" }} color="blackAlpha.800">
        {/* Top part of the navbar start */}
        <Box
          cursor="pointer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Flex gap={2} pl={5} pt={2}>
            {NavbarTopDescription.map((e, index) => (
              <Box key={index}>
                <Text fontSize="13px" _hover={{ textDecoration: "underline" }}>
                  {e.Tag}
                </Text>
                <Spacer />
              </Box>
            ))}
          </Flex>
          <Text
            fontSize="12px"
            _hover={{ textDecoration: "underline" }}
            pr={5}
            pt={2}
          >
            Contact us
          </Text>
        </Box>

        {/* Top part of the navbar end  */}

        {/* Middle part of the navbar start */}

        <Box
          cursor="pointer"
          //   onMouseEnter={() => setIsOpen(false)}
        >
          <HStack m="auto">
            <Box w="15%">
              <Link to="/">
                <Image
                  pt={"30px"}
                  pb={"10px"}
                  pl={"20px"}
                  pr={"20px"}
                  src={Cleardekhologo}
                  alt="logo"
                  w="100%"
                />
              </Link>
            </Box>
            <HStack w="90%" m="auto">
              <Box w="15%">
                <HStack fontSize="18px" fontWeight="bold">
                  <MdWifiCalling3 />
                  <Text>1800-111-111</Text>
                </HStack>
              </Box>
              <Box w="55%">
                <Input
                  placeholder="What are you looking for"
                  border="1px solid black"
                  w="95%"
                  fontSize="17px"
                  h="45px"
                />
              </Box>
              <HStack w="35%">
                <Button
                  size="lg"
                  bg="white"
                  _hover={{ bg: "white" }}
                  fontSize="16px"
                  fontWeight="400"
                  //   onClick={() => navigate("History Route")}  history route need to be added
                >
                  Track Order
                </Button>
                {isAuth === true ? (
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <Box
                        fontWeight={"600"}
                        fontSize="15px"
                        m="auto"
                        mt="-2px"
                        w="90px"
                        textAlign="center"
                      >
                        {userdata.name}
                        <TriangleDownIcon
                          ml="2px"
                          fontSize={"9px"}
                          _hover={{ transform: "rotate(180deg)" }}
                        />
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent
                      w="120px"
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                    >
                      <PopoverBody
                        h={"40px"}
                        pl="6"
                        fontSize="15px"
                        _hover={{ fontWeight: "bold" }}
                      >
                        <Box
                          color="#333368"
                          onClick={() => {
                            localStorage.removeItem("auth");
                            localStorage.removeItem("userData");
                            localStorage.removeItem("token");
                            showToastMessage();
                            setTimeout(() => {
                              navigate("/");
                            }, 1000);
                          }}
                        >
                          <ToastContainer />
                          Sign Out
                        </Box>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Box display={"flex"}>
                    <Login />
                    <Signup />
                  </Box>
                )}

                <Button
                  leftIcon={<CiHeart />}
                  size="lg"
                  bg="white"
                  fontSize="16px"
                  _hover={{ bg: "white" }}
                  fontWeight="400"
                  //   onClick={() => navigate("Wishlist Route")}
                >
                  Wishlist
                </Button>
                 <Link to="/cart">     {/*  // Cart route */}
                  <Button
                    leftIcon={<CgShoppingCart />}
                    size="lg"
                    bg="whiteAlpha.900"
                    _hover={{ bg: "white" }}
                    fontSize="16px"
                    fontWeight="400"
                  >
                    Cart
                  </Button>
                </Link>
              </HStack>
            </HStack>
          </HStack>
        </Box>
        {/* Middle part of the navbar end */}

        {/* Lower part of navbar start  */}

        <Box cursor="pointer" bg="#fbf9f7" p={2.5}>
          <Flex gap={4} pl={5} pt={2} justifyContent="space-between">
            <Flex bg="#fbf9f7" cursor="pointer" gap="6" alignItems={'center'}>
              <Menu
              //    isOpen={isOpen} onClose={() => setIsOpen(false)}
              >
                <MenuButton
                  bg="#fbf9f7"
                  fontSize="15px"
                  fontWeight="600"
                  _hover={{
                    borderBottom: "4px solid teal",
                  }}
                  // onMouseEnter={() => setIsEyeglassesOpen(true)}
                  //   onMouseLeave={() => setIsEyeglassesOpen(false)}

                  //   onMouseEnter={() => setIsOpen(true)}
                  //   onMouseLeave={() => setIsOpen(false)}
                >
                  EYEGLASSES
                </MenuButton>

                <MenuList
                  color="blackAlpha.900"
                  h="400px"
                  bg="white"
                  w="95vw"
                  p="5"
                  zIndex={1200}
                  // onMouseEnter={() => setIsEyeglassesOpen(true)}
                  // onMouseLeave={() => setIsEyeglassesOpen(false)}
                  //   onMouseEnter={() => setIsOpen(true)}
                  //   onMouseLeave={() => setIsOpen(false)}
                >
                  <Link to="/eyeglasses">
                    <Box>
                      <Grid gridTemplateColumns="repeat(6, 1fr)" w="100%">
                        <Flex
                          direction="column"
                          justifyContent="space-evenly"
                          mt="20"
                        >
                          <Flex
                            gap="5"
                            fontSize="15px"
                            _hover={{ bgColor: "blackAlpha.200" }}
                          >
                            <Avatar
                              name="Male Avatar"
                              src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                              alt="men"
                              size="md"
                            />
                            <Box
                              fontSize="lg"
                              fontWeight="bold"
                              _hover={{ textDecoration: "underline" }}
                            >
                              Men
                            </Box>
                          </Flex>

                          <Flex gap="5" _hover={{ bgColor: "blackAlpha.200" }}>
                            <Avatar
                              name="women avatar"
                              src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                              alt="women"
                              size="md"
                            />
                            <Box
                              fontSize="lg"
                              fontWeight="bold"
                              _hover={{ textDecoration: "underline" }}
                            >
                              Women
                            </Box>
                          </Flex>

                          <Flex gap="5" _hover={{ bgColor: "blackAlpha.200" }}>
                            <Avatar
                              name="Kids avatar"
                              src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                              alt="kid"
                              size="md"
                            />
                            <Box
                              fontSize="lg"
                              fontWeight="bold"
                              _hover={{ textDecoration: "underline" }}
                            >
                              Kids
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            SELECT CATEGORY
                          </Box>
                          <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                            CLASSIC EYE-GLASSES
                            <p>
                              Starting From ₹ <span>1000</span>
                            </p>
                          </Box>
                          <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                            PREMIUM EYE-GLASSES
                            <p>
                              Starting From ₹ <span>3200</span>
                            </p>
                          </Box>
                          <Box
                            fontSize="md"
                            _hover={{ bg: "blackAlpha.200" }}
                            p="2"
                          >
                            COMPUTER EYE-GLASSES
                            <p>
                              Starting From ₹ <span>599</span>
                            </p>
                          </Box>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Our Top Picks
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>
                              New Arrivals
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Best Seller
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Lenskart BLU lenses
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Trending</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Tinted Eyeglasses
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Computer Eyeglasses
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Progressive Eyeglasses
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Frame Type
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>
                              Rectangle Frames
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Wayfarer Frames
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Round Frames
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Aviator Frames
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Cat-Eye Frames
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Rimless Frames
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Half Rim Frames
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Geometric Frames{" "}
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Collection
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>
                              Crystal Clear
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Gradient</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Sleek Steel
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Switch-Magnetic Clips-On
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Air Flex</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Air Wrap</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Classic Acetate
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Series A</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Indian Accent
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Float Pop</Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Brands
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>
                              Vincent Chase
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Lenskart Air
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              John Jacobs
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>OJOS</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              New Balance
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Carrera</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Fossil</Box>
                          </Flex>
                        </Flex>
                      </Grid>
                    </Box>
                  </Link>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  bg="#fbf9f7"
                  fontSize="15px"
                  fontWeight="600"
                  _hover={{
                    borderBottom: "4px solid teal",
                  }}
                  //   onMouseEnter={() => setIsOpen(true)}
                >
                  COMPUTER GLASSES
                </MenuButton>

                <MenuList
                  color="blackAlpha.900"
                  h="400px"
                  bg="white"
                  w="95vw"
                  p="5"
                  zIndex={1200}
                  //   onMouseEnter={() => setIsOpen(true)}
                  //   onMouseLeave={() => setIsOpen(false)}
                >
                  <Link to="/eyeglasses">
                    <Box>
                      <Grid gridTemplateColumns="repeat(5, 1fr)" w="100%">
                        <Flex
                          direction="column"
                          gap="4"
                          justifyContent="space-evenly"
                          mt="20"
                        >
                          <Flex gap="5" _hover={{ bgColor: "blackAlpha.200" }}>
                            <Avatar
                              name="Men avatar"
                              src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                              alt="men"
                              size="md"
                            />
                            <Box
                              _hover={{ textDecoration: "underline" }}
                              fontSize="md"
                              fontWeight="bold"
                            >
                              Men
                            </Box>
                          </Flex>

                          <Flex gap="5" _hover={{ bgColor: "blackAlpha.200" }}>
                            <Avatar
                              name="Women avatar"
                              src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                              alt="women"
                              size="md"
                            />
                            <Box
                              _hover={{ textDecoration: "underline" }}
                              fontSize="md"
                              fontWeight="bold"
                            >
                              Women
                            </Box>
                          </Flex>

                          <Flex gap="5" _hover={{ bgColor: "blackAlpha.200" }}>
                            <Avatar
                              name="kids"
                              src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                              alt="kid"
                              size="md"
                            />
                            <Box
                              _hover={{ textDecoration: "underline" }}
                              fontSize="md"
                              fontWeight="bold"
                            >
                              Kids
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            SELECT CATEGORY
                          </Box>

                          <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                            Blu 0 Computer Glasses
                            <p>
                              Starting From ₹ <span>1299</span>
                            </p>
                          </Box>
                          <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                            PREMIUM RANGE
                            <p>
                              Starting From ₹ <span>3000</span>
                            </p>
                          </Box>
                        </Flex>
                      </Grid>
                    </Box>
                  </Link>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  bg="#fbf9f7"
                  fontSize="15px"
                  fontWeight="600"
                  _hover={{
                    borderBottom: "4px solid teal",
                  }}
                >
                  KIDS GLASSES
                </MenuButton>

                <MenuList
                  color="blackAlpha.900"
                  h="400"
                  bg="white"
                  w="95vw"
                  zIndex={1200}
                  //   p="2"
                >
                  <Link to="/eyeglasses">
                    <Box>
                      <Grid
                        gridTemplateColumns="repeat(3, 1fr)"
                        justifyContent="center"

                        // m={"auto"}
                        // p={"20"}
                      >
                        <Box bg="whiteAlpha.900" h="350px" w="240px">
                          <img
                            className="navImg1"
                            src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                            alt="kidsIcon_1"
                          />
                          <Box mt="10px" textAlign="center" fontSize="lg">
                            Eye Glasses
                          </Box>
                        </Box>
                        <Box bg="whiteAlpha.900" h="250px" w="240px">
                          <img
                            className="navImg2"
                            src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                            alt="kidsIcon_2"
                          />
                          <Box mt="10px" textAlign="center" fontSize="lg">
                            Zero Power Computer Glasses
                          </Box>
                        </Box>
                        <Box bg="whiteAlpha.900" h="250px" w="240px">
                          <img
                            className="navImg2"
                            src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                            alt="kidsIcon_3"
                          />
                          <Box mt="10px" textAlign="center" fontSize="lg">
                            Sun Glasses
                          </Box>
                        </Box>
                      </Grid>
                    </Box>
                  </Link>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  bg="#fbf9f7"
                  fontSize="15px"
                  fontWeight="600"
                  _hover={{
                    borderBottom: "4px solid teal",
                  }}
                >
                  CONTACT LENSES
                </MenuButton>

                <MenuList
                  color="blackAlpha.900"
                  h="400px"
                  bg="white"
                  p="5"
                  w="95vw"
                  zIndex={1200}
                >
                  <Link to="/eyeglasses">
                    <Box>
                      <Grid gridTemplateColumns="repeat(5, 1fr)" p="1" w="100%">
                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Brands
                          </Box>
                          <Flex direction="column" gap="2" fontSize="md">
                            <Box _hover={{ fontWeight: "bold" }}> Aqualens</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Bausch Lomb
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Johnson & Johnson
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Soflens</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Acuvue</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Iconnect</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Alcon</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Air Optix</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Pure Vision
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Explore by Disposability
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}> Monthly</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Day & Night
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Daily</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Yearly</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Bi-weekly</Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Explore by Power
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>
                              Spherical - (CYL 0.5)
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Spherical + (CYL 0.5)
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Cylindrical Power (0.75)
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Toric Power
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Explore by Colors
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>Green</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Blue</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Brown</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Turquoise</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              View all colors
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Solution
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>Small</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Large</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              View all solutions
                            </Box>
                          </Flex>
                        </Flex>
                      </Grid>
                    </Box>
                  </Link>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  bg="#fbf9f7"
                  fontSize="15px"
                  fontWeight="600"
                  _hover={{
                    borderBottom: "4px solid teal",
                  }}
                >
                  SUN GLASSES
                </MenuButton>

                <MenuList
                  color="blackAlpha.900"
                  h="400px"
                  bg="white"
                  w="100%"
                  p="5"
                  zIndex={1200}
                >
                  <Link to="/eyeglasses">
                    <Box>
                      <Grid gridTemplateColumns="repeat(6, 1fr)">
                        <Flex direction="column" justifyContent="space-evenly">
                          <Flex gap="5" _hover={{ bgColor: "blackAlpha.200" }}>
                            <Avatar
                              name="men avatar"
                              src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                              alt="men"
                              size="md"
                            />
                            <Box
                              _hover={{ textDecoration: "underline" }}
                              fontSize="md"
                              fontWeight="bold"
                            >
                              Men
                            </Box>
                          </Flex>

                          <Flex
                            gap="5"
                            mt="-40%"
                            _hover={{ bgColor: "blackAlpha.200" }}
                          >
                            <Avatar
                              name="female avatar"
                              src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                              alt="women"
                              size="md"
                            />
                            <Box
                              _hover={{ textDecoration: "underline" }}
                              fontSize="md"
                              fontWeight="bold"
                            >
                              Women
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            SELECT CATEGORY
                          </Box>
                          <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                            CLASSIC SUNGLASSES
                            <p>
                              Starting From ₹ <span>1299</span>
                            </p>
                          </Box>
                          <Box
                            _hover={{ bg: "blackAlpha.200" }}
                            fontSize="md"
                            p="2"
                          >
                            PREMIUM SUNGLASSES
                            <p>
                              Starting From ₹ <span>2500</span>
                            </p>
                          </Box>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Our Top Picks
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>
                              New Arrivals
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Best Seller
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Pilot Style
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Power Sunglasses
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Polarized Sunglasses
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Shape
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>Aviator</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Rounders</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Wayfarer</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Rectangle</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Hexagon</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Cat-Eye</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Clubmaster
                            </Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Colections
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>Glam Slam</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Havana</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Polarized</Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Power Sunglasses
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Designer Sunglasses
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              Reflectors
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>Marble</Box>
                            <Box _hover={{ fontWeight: "bold" }}>Tinted</Box>
                          </Flex>
                        </Flex>

                        <Flex direction="column" gap="6">
                          <Box
                            fontSize="md"
                            fontWeight="bold"
                            borderBottom="1px solid black"
                            p="1"
                          >
                            Brand
                          </Box>
                          <Flex direction="column" fontSize="md" gap="2">
                            <Box _hover={{ fontWeight: "bold" }}>
                              Vincent Chase
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>
                              John Jacobs
                            </Box>
                            <Box _hover={{ fontWeight: "bold" }}>OJOS</Box>
                          </Flex>
                        </Flex>
                      </Grid>
                    </Box>
                  </Link>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  bg="#fbf9f7"
                  fontSize="15px"
                  fontWeight="600"
                  _hover={{
                    borderBottom: "4px solid teal",
                  }}
                >
                  HOME EYE-TEST
                </MenuButton>

                <MenuList
                  color="blackAlpha.900"
                  h="400px"
                  bg="white"
                  w="100%"
                  zIndex={1200}
                >
                  <Box>
                    <Grid gridTemplateColumns="repeat(2, 1fr)">
                      <Box>
                        <Image
                          h="100%"
                          w="100%"
                          src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png"
                          alt="doctor_img"
                        />
                      </Box>
                      <Box>
                        <Box m="auto">
                          <Heading
                            color="black"
                            fontWeight=""
                            fontSize="5xl"
                            fontFamily="sans-serif"
                            textAlign="center"
                            mt="10%"
                          >
                            Get your eyes checked <br />
                            <span>at home</span>
                          </Heading>
                          <Text
                            color="black"
                            fontSize="lg"
                            fontWeight="400"
                            textAlign="center"
                            mt="2%"
                          >
                            A certified refractionist will visit you with
                          </Text>
                          <Text
                            color="black"
                            fontSize="lg"
                            fontWeight="400"
                            textAlign="center"
                            mt="2%"
                          >
                            latest eye testing machines & 100 trail frames
                          </Text>
                          <Button
                            colorScheme="black"
                            variant="outline"
                            bg="whiteAlpha.900"
                            rounded="50px"
                            p="7"
                            fontSize="15px"
                            mt="20"
                            ml="30%"
                            _hover={{ bg: "#020043", color: "white" }}
                          >
                            Book appointment
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Box>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  bg="#fbf9f7"
                  fontSize="15px"
                  fontWeight="600"
                  _hover={{
                    borderBottom: "4px solid teal",
                  }}
                >
                  STORE LOCATOR
                </MenuButton>

                <MenuList
                  color="blackAlpha.900"
                  h="400px"
                  bg="white"
                  w="100%"
                  p="5"
                  zIndex={1200}
                >
                  <Grid gridTemplateColumns="repeat(2, 1fr)" gap={"50px"}>
                    <Box>
                      <Heading
                        color="black"
                        fontWeight=""
                        fontSize="50px"
                        fontFamily="sans-serif"
                        textAlign="center"
                        mt="15%"
                      >
                        Over 1100+ Lenskart Store
                      </Heading>
                      <Box
                        color="black"
                        fontSize="15px"
                        textAlign="center"
                        mt="6%"
                      >
                        Experience eyewear in a whole new way: Visit your
                        nearest store
                      </Box>
                      <Box
                        color="black"
                        fontSize="15px"
                        textAlign="center"
                        mt="1.5%"
                      >
                        and treat yourself to 5000+ eyewear styles.
                      </Box>
                      <Button
                        colorScheme="black"
                        variant="outline"
                        bg="whiteAlpha.900"
                        rounded="50px"
                        p="6"
                        fontSize="15px"
                        mt="10"
                        ml="30%"
                        _hover={{ bg: "#020043", color: "white" }}
                      >
                        Locate a store
                      </Button>
                    </Box>
                    <Flex mt="30%" fontSize="14px" fontWeight="600">
                      <Box>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Delhi1.png"
                          alt="Delhi"
                        ></Image>
                        <Text mt="-8px" ml="22px">
                          Delhi
                        </Text>
                      </Box>
                      <Box>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Banglore1.png"
                          alt="Banglore"
                        ></Image>
                        <Text mt="-8px" ml="15px">
                          Banglore
                        </Text>
                      </Box>
                      <Box>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Mumbai1.png"
                          alt="Mumbai"
                        ></Image>
                        <Text mt="-8px" ml="15px">
                          Mumbai
                        </Text>
                      </Box>
                      <Box>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Ahmedabad1.png"
                          alt="Ahemdabad"
                        ></Image>
                        <Text mt="-8px" ml="10px">
                          Ahmedabad
                        </Text>
                      </Box>
                      <Box>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Chennai1.png"
                          alt="Chennai"
                        ></Image>
                        <Text mt="-8px" ml="15px">
                          Chennai
                        </Text>
                      </Box>
                      <Box>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Hyderabad1.png"
                          alt="Hyderabad"
                        ></Image>
                        <Text mt="-8px" ml="15px">
                          Hyderabad
                        </Text>
                      </Box>
                      <Box>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Cities1.png"
                          alt="+100_cities"
                        ></Image>
                        <Text mt="-8px" ml="15px">
                          +100 cities
                        </Text>
                      </Box>
                    </Flex>
                  </Grid>
                </MenuList>
              </Menu>
              {userdata.role=="admin"?<Link to={'/admindashboard'} style={{fontSize:"15px",fontWeight:"600"}}>ADMIN</Link>:null}
            </Flex>

            <HStack w="20%" ml="5%" justifyContent="right">
              <Image
                src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
                alt="img1"
                w="70px"
                borderRadius="base"
              />
              <Image
                src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
                alt="img2"
                w="70px"
                borderRadius="base"
              />
              <Image
                src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
                alt="img3"
                w="70px"
                borderRadius="base"
              />
            </HStack>
          </Flex>
        </Box>
      </Box>

      {/* Lower Navbar Completed  */}

      <MobileNav />
    </Box>
  );
};

export default Navbar;
