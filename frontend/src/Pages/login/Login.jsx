import React, { useContext, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Swal from 'sweetalert2'
import {
  Box,
  Button,
  Center,
  Checkbox,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "../Signup/Signup";
const intial = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const [loginData, setLoginData] = useState(intial);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);


  const showToastMessage = () => {
    toast.success('Login Successfull !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  let isAuth = JSON.parse(localStorage.getItem("auth")) || false;
//   let token = JSON.parse(localStorage.getItem("token")) || "";
  let userdata=JSON.parse(localStorage.getItem("userData")) || "";




  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const loginUser = (info) => {
    try {
      const response = fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((out) => {
          if (out.success) {
            localStorage.setItem("token", out.token);
            localStorage.setItem("userData", JSON.stringify(out.user));
            localStorage.setItem("auth", JSON.stringify(true));
            showToastMessage()
            setTimeout(()=>{
                navigate("/")
            },1500)
         
           
           
          } else {
            // Registration failed, handle accordingly
            // alert(out.message);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${out.message}`,
              didOpen: () => {
                  const container = document.querySelector('.swal2-container');
                  container.style.zIndex = 10000;
                }
            });

            // console.log("2",out.message);
            // console.log("2", out);
            // console.log('Failed to register user');
          }
        });
    } catch (error) {
      //   console.error("Error registering user:", error);
      //   setAuth(false)
      console.log("out.2", error);
    }
  };
 

  const handlesign = () => {
    // setLoading(true);
    
    loginUser(loginData);
    
    // console.log(loginData)
    // setLoading(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Center onClick={handleOpen} fontWeight={"400"} fontSize="15px" w="80px">
        Sign In
      </Center>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        isCentered
        size={{ xl: "md", lg: "md", md: "md", sm: "sm", base: "sm" }}
      >
        <ModalOverlay />
        <ModalContent rounded="3xl">
          <ModalCloseButton
            borderRadius={"50%"}
            bg="white"
            m={"10px 10px 0px 0px"}
          />

          <ModalBody p={"0px 0px "} borderRadius={"15px 15px 15px 15px "}>
            <Image
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="pic"
              borderRadius={"10px 10px 0px 0px "}
            />
            <Box m={"34px 45px 50px 45px"}>
              <Heading
                fontFamily={" Times, serif"}
                fontWeight="100"
                fontSize={"28px"}
                mb="24px"
                color={"#333368"}
              >
                Sign In
              </Heading>
              <Input
                name="email"
                placeholder="Email"
                h={"50px"}
                fontSize="16px"
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                value={email}
                onChange={handleChange}
                rounded="2xl"
                mb={"5px"}
              />
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  h={"50px"}
                  fontSize="16px"
                  focusBorderColor="rgb(206, 206, 223)"
                  borderColor={"rgb(206, 206, 223)"}
                  value={password}
                  onChange={handleChange}
                  rounded="2xl"
                />

                <InputRightElement width="6.5rem" size="lg">
                  <Button
                    size="md"
                    borderRadius="3xl"
                    mt="10%"
                    onClick={() => setShow(!show)}
                    bg="white"
                  >
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Box
                
                m="15px 0px 0px 0px"
                color="#000042"
                fontSize="15px"
              >
                Forget Password ?
              </Box>
              <HStack fontSize="16px">
                <Checkbox mb={"20px"} mt="20px" size="sm">
                  Get Update on whatsapp
                </Checkbox>
                <Image
                  src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                  w={"22px"}
                  h="22px"
                />
              </HStack>
              <Button
                isLoading={loading}
                onClick={handlesign}
                bgColor={"#11daac"}
                width="100%"
                borderRadius={"35px/35px"}
                h="50px"
                fontSize="18px"
                _hover={{ backgroundColor: "#11daac" }}
              >
                Sign In
                <ToastContainer />
              </Button>
             
              <HStack spacing={"0px"} mt="19px" gap="2">
                <Box fontSize={"14px"}> New member?</Box>
                <Link
                  fontSize={"15px"}
                  fontWeight="500"
                  textDecoration={"underline"}
                >
                    <Signup/>
                 
                </Link>
                <Link fontSize={"15px"} fontWeight={"500"} textDecoration={"underline"} href="/adminlogin">Login as Admin?</Link>
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LoginPage;
