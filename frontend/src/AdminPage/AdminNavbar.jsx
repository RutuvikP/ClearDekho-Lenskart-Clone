import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast
  } from '@chakra-ui/react'
import axios from 'axios';

const AdminNavbar = () => {
    const {isOpen,onOpen,onClose}=useDisclosure();
    const toast=useToast();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [title,setTitle]=useState();
    const [size,setSize]=useState();
    const [rating,setRating]=useState();
    const [price,setPrice]=useState();
    const [shape,setShape]=useState();
    const [image,setImage]=useState();
    const [color,setColor]=useState();

    const handleAdd=()=>{
        let payload={title,size,rating,price,shape,image,color};
        axios.post(`${process.env.REACT_APP_BASEURL}/eyeglasses/add`,payload)
        .then((res)=>{
            console.log(res);
            toast({
                title:`Product added to Database`,
                status:"success",
                isClosable:true,
                duration:4000,
                position:'top'
            })
            setTitle("");
            setSize("");
            setRating("");
            setPrice("");
            setShape("");
            setImage("");
            setColor("");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{color:"#4A148C"}}>Welcome Admin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/admindashboard">Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/allusers">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminproducts">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminorders">Orders</a>
                    </li>
                    <li className="nav-item" onClick={onOpen}>
                        <a className="nav-link" href="#">Add Products</a>
                    </li>
                </ul>

            </div>
        </nav>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} value={title} placeholder='Brand' onChange={(e)=>setTitle(e.target.value)} />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Size</FormLabel>
              <Input value={size} placeholder='Size' onChange={(e)=>setSize(e.target.value)} />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Rating</FormLabel>
              <Input value={rating} placeholder='Rating' type='number' onChange={(e)=>setRating(e.target.value)} />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Price</FormLabel>
              <Input value={price} placeholder='Price' type='number' onChange={(e)=>setPrice(e.target.value)} />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Shape</FormLabel>
              <Input value={shape} placeholder='Shape' onChange={(e)=>setShape(e.target.value)} />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Image</FormLabel>
              <Input value={image} placeholder='Image URL' onChange={(e)=>setImage(e.target.value)} />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Color</FormLabel>
              <Input value={color} placeholder='Color' onChange={(e)=>setColor(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleAdd} bgColor='#11DAAC' color={'white'} variant={'solid'} mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}

export default AdminNavbar;
