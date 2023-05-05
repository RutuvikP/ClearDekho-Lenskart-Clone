import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import { AiFillStar,AiOutlineHeart } from "react-icons/ai";

import { BsHeartFill,BsHeart } from "react-icons/bs"
import { NavLink } from 'react-router-dom';
function ProductCard({ _id, title, size, rating, price, color, image }) {
    const [liked,setLiked] = useState(false)
    console.log(liked)
    return (
        <Flex cursor={"pointer"} gap={10} w="full" alignItems="center" justifyContent="center">
           
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                position="relative">
             <NavLink to={`/eyeglasses/${_id}`} >
                <Image
                    src={image}
                    alt={`Picture of ${title}`}
                    roundedTop="lg"
                />
            </NavLink>
                <Box p="6">
                    <Box pos={"relative"} right={"8vw"} >
                        <Badge p={"6px"} textAlign={"center"} rounded="full" px="2" h={"4vh"} w={"5vw"}  fontSize="12px" fontWeight={"700"} bgColor={"#eeeef5"}>
                            {rating}
                            <Icon as={AiFillStar} h={3} w={3} color={"#329c92"} alignSelf={'center'}/>
                            <span style={{color:"#66668e",fontWeight:"lighter"}}>245</span>
                        </Badge>
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="md"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {title}
                        </Box>
                        <Tooltip
                            label="Whishlist"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                            <Box display={'flex'} onClick={()=>{setLiked(!liked)}}>
                                {
                                    liked ? 
                                    <Icon as={BsHeartFill} fill={"red"} h={7} w={7} alignSelf={'center'}   />
                                    :
                                    <Icon as={BsHeart} h={7} w={7} alignSelf={'center'}   />
                                }
                                
                            </Box>
                        </Tooltip>
                    </Flex>

                    <Flex direction={"column"} align={"start"}>
                        <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="sm">
                               Size:
                            </Box>
                            {size}
                        </Box>
                        <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="sm">
                               Color:
                            </Box>
                            {color}
                        </Box>
                        <Box fontSize="md" fontWeight={"semibold"} color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" fontWeight={"semibold"} color={'gray.600'} fontSize="md">
                                ₹
                            </Box>
                            {price}
                        </Box>
                        {/* <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="sm">
                               color:
                            </Box>
                            {color}
                        </Box> */}
                    </Flex>
                </Box>
            </Box>
            
        </Flex>
    );
}

export default ProductCard;