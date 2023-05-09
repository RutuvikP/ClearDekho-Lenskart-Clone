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


const AdminOrders=() => {

    const [data,setData]=useState([]);
    const [update,setUpdate]=useState(false);
    const toast=useToast();

    // const handleDelete=(id)=>{
    //     axios.delete(`http://localhost:8080/eyeglasses/delete/${id}`)
    //     .then((res)=>{
    //         console.log(res);
    //         setUpdate(!update)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    const handleUpdate=(ID)=>{
        let payload={status:""}
        data.map((el)=>{
            if(el._id==ID){
                if(el.status=="Placed"){
                    payload.status="Shipped"
                }else if(el.status=="Shipped"){
                    payload.status="Delivered"
                }
            }
        })
        axios.patch(`${process.env.REACT_APP_BASEURL}/orders/update/${ID}`,payload)
        .then((res)=>{
            console.log(res);
            toast({
                title:`Status of product with ID: ${ID} updated!`,
                status:"success",
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
        axios.get(`${process.env.REACT_APP_BASEURL}/orders`)
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
        <Text fontSize={'2xl'} w={'100%'} m={'auto'} textDecoration={'underline'}>List of All Orders</Text>
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
                  <span>User Name</span>
                  <span>Price</span>
                  <span>Status</span>
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
                  <span>{token.userName}</span>
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
                    {token.status}
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
                    <ButtonGroup variant="solid" size="md">
                      <IconButton
                        isDisabled={token.status=="Delivered"?true:false}
                        onClick={()=>handleUpdate(token._id)}
                        colorScheme="green"
                        icon={<AiFillEdit />}
                        aria-label="Edit"
                      />
                      {/* <IconButton
                        onClick={()=>handleDelete(token._id)}
                        colorScheme="red"
                        variant="solid"
                        icon={<BsFillTrashFill />}
                        aria-label="Delete"
                      /> */}
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

export default AdminOrders;