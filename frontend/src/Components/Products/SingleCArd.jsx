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

const SinglePage = () => {
  const { id } = useParams()
  console.log(id)
  const [data, setData] = useState({})
  const { products } = useSelector(state => {
    return {
      products: state.productReducer.products
    }
  })
  // const capitalizeFirstLowercaseRest = (str) => {
  //   return (
  //     str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  //   );
  // };
  useEffect(() => {
    const data = products.find((el) => el._id === id)
    setData(data)
  }, [])
  console.log(data)

  return (
    <Box width={"100%"}>
      <Flex
        margin={"auto"}
        width={"96%"}
        direction={"row"}
        py={{ base: 18, md: 24 }}>
        <Flex position={"relative"} bottom={"8vh"} width={"80vw"}>
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
            h={{ base: '100%', sm: '400px', lg: '100vh' }}
          />
        </Flex>
        <Spacer />
        <Stack align={"start"} width={"38vw"} ml={"10vw"} position={"relative"} bottom={"8vh"} right={"7vw"} spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Text
              align={"start"}
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
              <Text textTransform={'uppercase'} fontWeight={"normal"} fontSize={"14px"} >
                SELECT LENSES
              </Text>
              <Text fontWeight={"normal"} fontSize={"10px"} >
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
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            <Text textTransform={'uppercase'} fontWeight={"normal"} fontSize={"14px"} >
              Add To Cart
            </Text>
          </Button>



          <Accordion width={"28vw"} defaultIndex={[0]} allowMultiple>
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