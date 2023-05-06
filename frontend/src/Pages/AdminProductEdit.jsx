import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
  
  export default function AdminProductEdit() {
    const {id}=useParams();

    const [title,setTitle]=useState("");
    const [price,setPrice]=useState();
    const [rating,setRating]=useState();

    const handleUpdate=()=>{
      const payload={};
      if(title){
        payload.title=title;
      }
      if(price){
        payload.price=price;
      }
      if(rating){
        payload.rating=rating;
      }

      axios.patch(`http://localhost:8080/eyeglasses/updae/${id}`,payload)
      .then((res)=>{
        console.log(res);
        alert("Updated!!")
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Editing Product with ID:{id}</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="title">
                <FormLabel>Brand</FormLabel>
                <Input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
              </FormControl>
              <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <Input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
              </FormControl>
              <FormControl id="rating">
                <FormLabel>Rating</FormLabel>
                <Input type="number" value={rating} onChange={(e)=>setRating(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Button
                onClick={handleUpdate}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Update
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }