import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Center, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
//import { CartContext } from "../Context/CartContextProvider";
import axios from "axios";

function Cart() {
    const [refresh, setRefresh] = useState(false)
    const token = localStorage.getItem("token")
    const [cartData, setCartData] = useState([]);
    //const {cartData,handleDelete, handleIncrease, handleDecrease, cleanCart}=useContext(CartContext)
    const navigate = useNavigate();



    useEffect(() => {
        // const cart=JSON.parse(localStorage.getItem('cartData')) || [];
        // setCartData(cart)
        getData()
    }, [refresh])

    const getData = () => {
        axios.get("http://localhost:8080/cart", {
            headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            console.log(res)
            setCartData(res.data)
        })
    }
    const handleDelete = (id) => {
        // const updatedCart=cartData.filter(item=>item._id!==itemtoDelete._id);
        // setCartData(updatedCart);
        //localStorage.setItem('cartData',JSON.stringify(updatedCart))
        console.log(id)
        axios.delete(`http://localhost:8080/cart/delete/${id}`, {
            headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            console.log(res)
            alert("Deleted Successfully!")
            getData()
        })
    }

    const handleIncrease = (id) => {
        cartData.map((el) => {
            if (el._id === id) {
                //return {...el,quantity:el.quantity+1}
                axios.patch(`http://localhost:8080/cart/update/${id}`, { quantity: el.quantity + 1 }, {
                    headers: {
                        Authorization: `${token}`
                    }
                }).then((res) => {
                    console.log(res)
                    setRefresh(!refresh)
                })
            }

        })
        // setCartData(updatedCart)
        // console.log(updatedCart)
        // localStorage.setItem('cartData',JSON.stringify(updatedCart))

    }

    const handleDecrease = (item) => {
        const updatedCart = cartData.map((el) => {
            if (el._id === item._id) {
                return { ...el, quantity: el.quantity - 1 }
            }
            return el;
        })
        setCartData(updatedCart)
        localStorage.setItem('cartData', JSON.stringify(updatedCart))
    }

    const totalPrice = cartData.reduce((acc, curr) => {
        const data = cartData.find(el => el._id === curr._id)
        return acc + (data.price * data.quantity)
    }, 0)

    const handleCheckout = () => {

        axios.post("http://localhost:8080/orders", cartData).then((res) => {
            alert("Successfull!")
        })
        //cleanCart()
        navigate('/payment')
    }
    //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    if (cartData.length === 0) {
        return (
            <Center>
                <Text fontWeight={'bold'} fontSize={'2xl'}>Your Cart is Empty!!</Text>
            </Center>
        )
    } else {
        return (
            <Box w={'70%'} m={'auto'}>
                <Text fontWeight={'bold'} fontSize={'3xl'}>Total Cart Price is: Rs. {totalPrice}</Text>
                {
                    cartData.map((el, i) => (
                        <SimpleGrid border={'1px solid black'} key={el._id} m={'10px'} p={'5px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}>
                            <Box display={'flex'} flexDirection={'row'} alignItems={"center"} justifyContent={'space-between'}>
                                <Image src={el.image} boxSize={"250px"} />
                                <VStack w={'60%'}>
                                    <Text >{el.title}</Text>
                                    <HStack>
                                        <Button onClick={() => handleDelete(el)}><DeleteIcon />Remove</Button>
                                    </HStack>
                                </VStack>
                                <VStack w={'40%'}>
                                    <Text fontWeight={'bold'}>Rs. {el.price * el.quantity}</Text>
                                    <HStack>
                                        <Button borderRadius={'50%'} bgColor={'#11DAAC'} onClick={() => handleIncrease(el._id)}>+</Button>
                                        <Button>{el.quantity}</Button>
                                        <Button borderRadius={'50%'} bgColor={'#11DAAC'} isDisabled={el.quantity == 1} onClick={() => handleDecrease(el)}>-</Button>
                                    </HStack>
                                </VStack>
                            </Box>
                        </SimpleGrid>
                    ))
                }
                <Button bgColor={'#11DAAC'} onClick={handleCheckout}>Checkout</Button>
            </Box>
        )
    }
}

export default Cart;