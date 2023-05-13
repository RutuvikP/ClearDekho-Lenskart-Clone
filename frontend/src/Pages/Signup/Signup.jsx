import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Swal from 'sweetalert2'
import {
  Center,
  Heading,
  HStack,
  InputGroup,
  InputLeftAddon,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
  Checkbox,
  InputRightElement,
  Text,
  Link,
} from "@chakra-ui/react";

const Signup = () => {
  const intial = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  };
  const [userInfo, setUserInfo] = useState(intial);
  const [username, setUserName] = useState();
  const [useraddress, setUserAddress] = useState();
  const [userPhone, setUserPhone] = useState();
  const [usermail, setUserMail] = useState();
  const [userpass, setUserPass] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // change the name required
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });

    switch (name) {
      case "name":
        setUserName(value);
        break;
      case "address":
        setUserAddress(value);
        break;
      case "phone":
        setUserPhone(value);
        break;
      case "email":
        setUserMail(value);
        break;
      case "password":
        setUserPass(value);
        break;
      default:
        break;
    }
  };

  const registerUser = (info) => {
    try {
      const response = fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((out) => {
          if (out) {
            if (out.error !== undefined) {
              // alert(out.error);
              Swal.fire({
                icon: 'info',
                // title: 'error',
                text: `${out.error}`,
                didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                    container.style.zIndex = 10000;
                  }
              });
            }  if (out.message == "Already Register please login") {
              Swal.fire({
                icon: 'error',
                title: 'error',
                text: `${out.message}`,
                didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                    container.style.zIndex = 10000;
                  }
              });
              // alert(out.message);
            } 
     
              setLoading(false)
              console.log("1", out);
              console.log("11", out.message);
              console.log("111", out.user);

              setUserInfo(intial);
            
          } else {
            // Registration failed, handle accordingly
            
            console.log(out.message);
            // console.log("2", out);
            // console.log('Failed to register user');
          }
        });
    } catch (error) {
      console.error("Error registering user:", error);
      console.log(error);
    }
  };

  const handleRegister = () => {
    registerUser(userInfo);
    setUserName("");
    setUserAddress("");
    setUserPhone("");
    setUserMail("");
    setUserPass("");
  };
  return (
    <div>
      <Center onClick={onOpen} fontWeight={"400"} fontSize="15px" w="60px">
        Sign Up
      </Center>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent w="lg" pt="5" rounded="3xl">
          <ModalCloseButton />

          <ModalBody p={"0px 0px "}>
            <Box m={"5px 45px 20px 45px"}>
              <Heading
                fontFamily={" Times, serif"}
                fontWeight="100"
                fontSize={"26px"}
                mb="20px"
                color={"#333368"}
              >
                Create an Account
              </Heading>

              <Input
                type="text"
                fontSize="16px"
                onChange={handleChange}
                focusBorderColor="rgb(206, 206, 223)"
                name="name"
                placeholder="Enter Your Full Name*"
                h={"45px"}
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 15px 0px"}
                rounded="2xl"
                value={username}
              />

             

              <Input
                fontSize="16px"
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="Address"
                h={"45px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 25px 0px"}
                rounded="2xl"
                value={useraddress}
              />
             

              <InputGroup
                w="100%"
                h="50px"
                fontSize="18px"
                borderRadius="xl"
                mb="14px"
              >
                <InputLeftAddon
                  children="+91"
                  h="45px"
                  fontSize="18px"
                  rounded="2xl"
                  bg="whiteAlpha.900"
                />

                <Input
                  onChange={handleChange}
                  type="number"
                  name="phone"
                  placeholder=" Mobile*"
                  w="100%"
                  h="45px"
                  fontSize="16px"
                  focusBorderColor="rgb(206, 206, 223)"
                  borderColor={"rgb(206, 206, 223)"}
                  rounded="2xl"
                  value={userPhone}
                />
              </InputGroup>
             

              <Input
                onChange={handleChange}
                fontSize="16px"
                name="email"
                placeholder="Email*"
                h={"45px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 18px 0px"}
                rounded="2xl"
                value={usermail}
              />
              

              <InputGroup mb="15px">
                <Input
                  onChange={handleChange}
                  fontSize="16px"
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password*"
                  h={"45px"}
                  focusBorderColor="rgb(206, 206, 223)"
                  borderColor={"rgb(206, 206, 223)"}
                  m={"8px 0px 8px 0px"}
                  rounded="2xl"
                  value={userpass}
                />

                <InputRightElement width="6.5rem" size="lg">
                  <Button
                    size="md"
                    borderRadius="3xl"
                    mt="20%"
                    onClick={() => setShow(!show)}
                    bg="white"
                  >
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
             

              <HStack>
                <Box
                  textDecoration={"underline"}
                  fontFamily={" sans-serif"}
                  color={"#333368"}
                  fontSize="14px"
                >
                  Got a Referral code?
                </Box>

                <Box fontFamily={" sans-serif"} color={"#333368"}>
                  (Optional)
                </Box>
              </HStack>

              <HStack>
                <Checkbox
                  mb={"20px"}
                  mt="20px"
                  size="sm"
                  fontFamily={" sans-serif"}
                >
                  Get Update on whatsapp
                </Checkbox>
                <Image
                  src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                  w={"22px"}
                  h="22px"
                />
              </HStack>

              <HStack spacing={"3px"} mb="10px">
                <Box
                  fontSize={"14px"}
                  fontFamily={" sans-serif"}
                  fontWeight="100"
                  letterSpacing={"-0.4px"}
                >
                  By creating this account, you agree to our
                </Box>
                <Box fontSize={"15px"} textDecoration="underline">
                  Privacy Policy
                </Box>
              </HStack>

              <Button
                //   isLoading={loading}
                onClick={handleRegister}
                bgColor={"#11daac"}
                width="100%"
                borderRadius={"35px/35px"}
                h="50px"
                _hover={{ backgroundColor: "#11daac" }}
                fontFamily={" sans-serif"}
                fontWeight="300"
                fontSize="18px"
              >
                Create an Account
              </Button>

              <Center mt={"14px"} fontSize="15px" gap="2">
                Have an account?{" "}
                <Center fontWeight={"500"} textDecoration="underline">
                  Sign In
                </Center>
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signup;
