import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
  Heading,
  Text,
  useDisclosure,
  Link,
  useToast,
} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import AdminNavbar from "../AdminPage/AdminNavbar";


const AdminProducts=() => {

    const [data,setData]=useState([]);
    const [update,setUpdate]=useState(false);
    const toast=useToast();

    const handleDelete=(id)=>{
        axios.delete(`${process.env.REACT_APP_BASEURL}/eyeglasses/delete/${id}`)
        .then((res)=>{
            console.log(res);
            toast({
              title:`Product with ID:${id} deleted successfully!!`,
              status:'success',
              isClosable:true,
              duration:4000,
              position:'top'
            })
            setUpdate(!update)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASEURL}/eyeglasses`)
        .then((res)=>{
            console.log(res);
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[update])


    const bg = useColorModeValue("white", "gray.800");
    const bg2 = useColorModeValue("white", "gray.800");
    const bg3 = useColorModeValue("gray.100", "gray.700");
    return (
        <>
        <AdminNavbar/>
        <Text fontSize={'2xl'} w={'100%'} m={'auto'} textDecoration={'underline'}>List of All Products</Text>
      <Flex
        w="full"
        // bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={5}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{
            base: "column",
          }}
          w="full"
          bg={{
            md: bg,
          }}
          shadow="lg"
        >
          {data.map((token, tid) => {
            return (
              <Flex
                direction={{
                  base: "row",
                  md: "column",
                }}
                bg={bg2}
                key={tid}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 5,
                  }}
                  w={{
                    base: 120,
                    md: "full",
                  }}
                  textTransform="uppercase"
                  bg={bg3}
                  color={'black'}
                  py={{
                    base: 1,
                    md: 4,
                  }}
                  px={{
                    base: 2,
                    md: 10,
                  }}
                  fontSize="md"
                  fontWeight="medium"
                >
                  <span>Name</span>
                  <span>Price</span>
                  <span>Rating</span>
                  <span>Image</span>
                  <chakra.span
                    textAlign={{
                      md: "right",
                    }}
                  >
                    Action
                  </chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 5,
                  }}
                  alignItems={'center'}
                  w="full"
                  py={2}
                  px={10}
                  textColor={'gray.500'}
                  fontWeight="semibold"
                >
                  <span>{token.title}</span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    ₹{token.price}
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {token.rating}
                  </chakra.span>
                  <Flex justifyContent={'center'}>
                    <Image w={'100px'} src={token.image}/>
                  </Flex>
                  <Flex
                    justify={{
                      base:'center',
                      md: "end",
                    }}
                  >
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                     <Link href={`/adminproducts/update/${token._id}`}>
                      <IconButton
                        colorScheme="green"
                        icon={<AiFillEdit />}
                        aria-label="Edit"
                      />
                      </Link>
                      <IconButton
                        onClick={()=>handleDelete(token._id)}
                        colorScheme="red"
                        variant="solid"
                        icon={<BsFillTrashFill />}
                        aria-label="Delete"
                      />
                    </ButtonGroup>
                  </Flex>
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
      </>
    );
  };

export default AdminProducts;