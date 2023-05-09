import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Center, HStack, Image, SimpleGrid, Text, VStack, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Cart() {
    const [refresh, setRefresh] = useState(false)
    const token = localStorage.getItem("token")
    const [cartData, setCartData] = useState([]);
    const toast=useToast();
    const navigate = useNavigate();



    useEffect(() => {
        // const cart=JSON.parse(localStorage.getItem('cartData')) || [];
        // setCartData(cart)
        getData()
    }, [refresh])

    const getData = () => {
        axios.get(`${process.env.REACT_APP_BASEURL}/cart`, {
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
        axios.delete(`${process.env.REACT_APP_BASEURL}/cart/delete/${id}`, {
            headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            console.log(res)
            toast({
                title:"Product removed from cart!!",
                status:"success",
                isClosable:true,
                duration:4000,
                position:'top'
            })
            getData()
        })
    }

    const handleIncrease = (id) => {
        cartData.map((el) => {
            if (el._id === id) {
                //return {...el,quantity:el.quantity+1}
                axios.patch(`${process.env.REACT_APP_BASEURL}/cart/update/${id}`, { quantity: el.quantity + 1 }, {
                    headers: {
                        Authorization: `${token}`
                    }
                }).then((res) => {
                    console.log(res)
                    setRefresh(!refresh)
                })
            }

        })
    }

    const handleDecrease = (id) => {
        cartData.map((el) => {
            if (el._id === id) {
                //return {...el,quantity:el.quantity+1}
                axios.patch(`${process.env.REACT_APP_BASEURL}/cart/update/${id}`, { quantity: el.quantity - 1 }, {
                    headers: {
                        Authorization: `${token}`
                    }
                }).then((res) => {
                    console.log(res)
                    setRefresh(!refresh)
                })
            }

        })
    }

    const totalPrice = cartData.reduce((acc, curr) => {
        const data = cartData.find(el => el._id === curr._id)
        return acc + (data.price * data.quantity)
    }, 0)

    const handleCheckout = () => {

        axios.post(`${process.env.REACT_APP_BASEURL}/orders`, cartData).then((res) => {
            axios.delete(`${process.env.REACT_APP_BASEURL}/cart/deletemany`,{
                headers:{Authorization:`${token}`}
            })
            .then((res)=>{
                // alert("Cart emptyed")
                console.log(res);
            })
            .catch((err)=>{
                // alert("ERROR")
                console.log(err);
            })
        })
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
                                        <Button onClick={() => handleDelete(el._id)}><DeleteIcon />Remove</Button>
                                    </HStack>
                                </VStack>
                                <VStack w={'40%'}>
                                    <Text fontWeight={'bold'}>Rs. {el.price * el.quantity}</Text>
                                    <HStack>
                                        <Button borderRadius={'50%'} bgColor={'#11DAAC'} onClick={() => handleIncrease(el._id)}>+</Button>
                                        <Button>{el.quantity}</Button>
                                        <Button borderRadius={'50%'} bgColor={'#11DAAC'} isDisabled={el.quantity == 1} onClick={() => handleDecrease(el._id)}>-</Button>
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