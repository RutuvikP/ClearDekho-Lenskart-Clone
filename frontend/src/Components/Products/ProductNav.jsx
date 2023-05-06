import { Box, Flex, HStack, Spacer, VStack, Text, Heading, Select } from "@chakra-ui/react"
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Switch } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
function ProductNav() {
    const [searchParams,setSearchParams] = useSearchParams()
    const initialOrder = searchParams.getAll("order")
    const [order,setOrder] = useState(initialOrder||"")
    const handleChange=(e)=>{
        setOrder(e.target.value)
    }

    useEffect(()=>{
        const params = {

        }

        order && (params.order = order)

        setSearchParams(params)
    },[order])
    console.log(searchParams.getAll("order"))
    return (
        <Flex bgColor={"#efefef"} width={["100%","100%","100%","100%","100%"]} h="7vh" textAlign="center">
            <Box pl={"1vw"} alignSelf={"center"} >
                <Heading fontWeight={"light"} size={["4px","4px","4px","12px","12px"]} color={"#6d6e71"} >PROMOTIONS</Heading>
            </Box>
            <Spacer />
            <Box alignSelf={"center"} >
                <HStack gap={2}>
                    <Text fontSize={"14px"} color={"#329c92"} fontWeight={"semibold"} >VIEW FRAMES</Text>
                    <Switch colorScheme='teal' size='lg' />
                    <Text fontSize={["10px","10px","10px","14px","14px"]} >VIEW 3D TRY ON</Text>
                </HStack>
            </Box>
            <Spacer />
            <Box w={"15vw"} mr={"1vw"} alignSelf={"center"}>
                <HStack gap={1}>
                    <Text width={"5vw"} fontSize={["10px","10px","10px","14px","14px"]} color={"#329c92"} fontWeight={"bold"} >SORT BY</Text>
                    <Select onChange={handleChange} width={"10vw"} size='sm' bgColor={"white"} placeholder='Best Sellers'>
                        <option value='asc' checked={order==="asc"}>Price:Low to High</option>
                        <option value='desc' checked={order==="desc"}>Price:High to Low</option>
                    </Select>
                </HStack>
            </Box>
        </Flex>
    )
}

export default ProductNav