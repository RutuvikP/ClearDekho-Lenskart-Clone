import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Spacer,
  useStatStyles,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { color } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
const SinglePage = () => {
  const token = localStorage.getItem("token")
  //console.log(token,"token-local")
  const toast = useToast()
  const { id } = useParams()
  console.log(id)
  const [data, setData] = useState({})
  const { products } = useSelector(state => {
    return {
      products: state.productReducer.products
    }
  })
  useEffect(() => {
    const data = products.find((el) => el._id === id)
    setData(data)
  }, [])
  const handleClick=()=>{
    const obj={
      image:data.image,
      title:data.title,
      price:data.price,
      quantity:1
    }

    axios.post(`${process.env.REACT_APP_BASEURL}/cart/addtocart`,obj,{
      headers:{
        Authorization: `${token}`
      }
    }).then((res)=>{
      console.log(res)
      if(res.data.msg==="Please Login First!!"){
        toast({
          title: 'Login First!',
          description: "Please do login to your account or signup to start a new journey with us!",
          status: 'error',
          duration: 4000,
          isClosable: true,
          position:'top'
        })
      }
      else{
        toast({
          title: 'Product added to cart!!',
          description: "The product is added to your cart",
          status: 'success',
          duration: 4000,
          isClosable: true,
          position:"top"
        })
      }
    }).catch((err)=>{
      toast({
        title: 'Login First!',
        description: "Please do login to your account or signup to start a new journey with us!",
        status: 'error',
        duration: 1000,
        isClosable: true,
        position:"top"
      })
    })
    
    // console.log(obj,"objClick")
  }

  // console.log(data)

  return (
    <Box width={"100%"}>
      <Flex
        margin={"auto"}
        width={"96%"}
        direction={["column","column","column","row","row"]}
        py={{ base: 18, md: 24 }}>
        <Flex position={"relative"} bottom={["1vh","1vh","1vh","8vh","8vh"]} width={["100%","100%","100%","80vw","80vw"]}>
          <Image
            border={"0.5px solid lightgrey"}
            rounded={'md'}
            alt={'product image'}
            src={
              data.image
            }
            fit={"contain"}
            align={'center'}
            w={'100%'}
            h={{ base: '80vh', sm: '80vh', lg: '100vh' }}
          />
        </Flex>
        <Spacer />
        <Stack align={["center","center","center","start","start"]} width={["100%","100%","100%","38vw","38vw"]} ml={["0vw","0vw","0vw","10vw","10vw"]} position={"relative"} top={["8vh","8vh","8vh","0vh","0vh"]} bottom={["0vh","0vh","0vh","8vh","8vh"]} right={["0vh","0vh","0vh","7vh","7vw"]} spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Text
              align={["center","center","center","start","start"]}
              color={"#999"}

              fontWeight={"semibold"}
              pb={"2vh"}
              fontSize={"14px"}>
              {data.title}
            </Text>
            <Heading
              lineHeight={1.1}
              fontWeight="bold"
              fontSize={{ base: 'sm', sm: 'sm', lg: 'md' }}>
              Gunmetal Green Full Rim Round Eyeglasses
            </Heading>
            <Text
              align={"start"}
              color={"#999"}
              fontWeight={"semibold"}
              pt={"1vh"}
              fontSize={"19px"}>
              Size:{data.size}
            </Text>
            <Text
              align={"start"}
              color={"teal"}
              fontWeight={"semibold"}
              pt={"1vh"}
              fontSize={"25px"}>
              ₹{data.price}
            </Text>
            <Text
              align={"start"}
              color={"blake"}
              textTransform={'uppercase'}
              fontWeight={"normal"}
              fontSize={"12px"}>
              {data.shape}
            </Text>
            <Text
              align={"start"}
              color={"blake"}
              textTransform={'uppercase'}
              fontWeight={"normal"}
              fontSize={"12px"}>
              {data.color}
            </Text>
          </Box>
          <Button
            rounded={'5px'}
            w={'full'}
            size={'lg'}
            py={'7'}
            border={'1px'}
            bg={'#00bac6'}
            color={"white"}

            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            <VStack>
              <Text pos={"relative"} top={"1vh"} textTransform={'uppercase'} fontWeight={"normal"} fontSize={"14px"} >
                SELECT LENSES
              </Text>
              <Text pos={"relative"} bottom={"1vh"} fontWeight={"normal"} fontSize={"10px"} >
                (with 1 Year Warranty & 14 Day Return)
              </Text>
            </VStack>

          </Button>
          <Button
            rounded={'5px'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={"white"}
            color={'gray.900'}
            textTransform={'uppercase'}
            border={"1px solid black"}
            onClick={handleClick}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            <Text pos={"relative"} top={"1vh"} textTransform={'uppercase'} textAlign={"center"} fontWeight={"normal"} fontSize={"14px"} >
              Add To Cart
            </Text>
          </Button>



          <Accordion width={["100%","100%","100%","28vw","28vw"]} defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontSize={"15px"} fontWeight={"semibold"} textAlign='start'>
                    Technical Information
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack align={"start"}>
                  <Text fontSize={"13px"} color={"grey"}>Product id  <span style={{ position: "relative", left: "5vw", color: "black", textAlign: "start" }}>152841</span></Text>
                  <Text fontSize={"13px"} color={"grey"}>Model No.  <span style={{ position: "relative", left: "5vw", color: "black", textAlign: "start" }}>VC E14716</span></Text>
                  <Text fontSize={"13px"} color={"grey"}>Frame Size  <span style={{ position: "relative", left: "5vw", color: "black", textAlign: "start" }}>{data.size}</span></Text>
                  <Text fontSize={"13px"} color={"grey"}>Frame Width  <span style={{ position: "relative", left: "4vw", color: "black", textAlign: "start" }}>137 mm</span></Text>
                  <Text fontSize={"13px"} color={"grey"}>Frame Dimensions <span style={{ position: "relative", left: "2vw", color: "black", textAlign: "start" }}>53-18-135</span></Text>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontSize={"15px"} fontWeight={"semibold"} textAlign='start'>
                    Visit Nearby Store
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <HStack>
                  <Image src='https://static.lenskart.com/media/desktop/img/pdp/visit_store.png' />
                  <VStack gap={0} align={"start"} >
                    <Text align={"start"} fontSize={"13px"} color={"grey"}>Please Share Your Location To See Nearby Stores</Text>
                    <Text fontSize={"14px"} color={"teal"} fontWeight={"semibold"}>Store Locator</Text>
                  </VStack>
                </HStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontSize={"15px"} fontWeight={"semibold"} textAlign='start'>
                    Check Delivery Options
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <HStack>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      placeholder='Enter Pin Code'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button variant={"ghost"} h='1.75rem' size='sm'>
                        CHECK
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>

      </Flex>

    </Box>



  );
}

export default SinglePage;