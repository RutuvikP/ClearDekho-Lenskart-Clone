import { Box, Flex, HStack, Spacer, VStack, Text, Heading, Select, Button } from "@chakra-ui/react"
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Switch } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import SidebarMob from "./sidebarmobile"
function ProductNav() {
    const [searchParams,setSearchParams] = useSearchParams()
    const initialOrder = searchParams.getAll("order")
    const color =   searchParams.getAll("color")
    const brand =  searchParams.getAll("brand")
    const size =  searchParams.getAll("size")
    const shape =  searchParams.getAll("shape")
    const [order,setOrder] = useState(initialOrder||"")
    const handleChange=(e)=>{
        setOrder(e.target.value)
    }

    useEffect(()=>{
        const params = {
            color,
            brand,
            size,
            shape
        }

        order && (params.order = order)

        setSearchParams(params)
    },[order])
    console.log(searchParams.getAll("order"))
    return (
        <Flex pos={"relative"} left={["5vw","0vw","0vw","0px","0px"]} bgColor={"#efefef"} width={"100%"} h="7vh" textAlign="center">
            <Box pl={"1vw"} alignSelf={"center"} >
                <Heading pos={"relative"} top={["3px","3px","4px","4px","4px"]} fontWeight={"light"} size={["xs","xs","xs","md","md"]} color={"#6d6e71"} >PROMOTIONS</Heading>
            </Box>
            <Spacer />
            <Box alignSelf={"center"} >
                <HStack gap={[0,0,0,2,2]}>
                    <Text pos={"relative"} top={["8px","8px","7px","6px","6px"]} fontSize={["8px","8px","10px","14px","14px"]} color={"#329c92"} fontWeight={"semibold"} >VIEW FRAMES</Text>
                    <Switch colorScheme='teal' size={["sm","sm","md","lg",'lg']} />
                    <Text fontSize={["5px","10px","10px","14px","14px"]} >VIEW 3D TRY ON</Text>
                </HStack>
            </Box>
            <Spacer />
            <Box w={["10vw","7vw","9vw","15vw","15vw"]} mr={["7vw","7vw","1vw","1vw","1vw"]} alignSelf={"center"}>
                <HStack display={["none","none","none","flex","flex"]} gap={1}>
                    <Text width={"5vw"} fontSize={["5px","5px","10px","14px","14px"]} mt={"2vh"} color={"#329c92"} fontWeight={"bold"} >SORT BY</Text>
                    <Select onChange={handleChange} width={"10vw"} size='sm' bgColor={"white"} placeholder='Best Sellers'>
                        <option value='asc' checked={order==="asc"}>Price:Low to High</option>
                        <option value='desc' checked={order==="desc"}>Price:High to Low</option>
                    </Select>
                </HStack>
                {/* <Button border={"1px solid red"} size={"sm"} display={["flex","flex","flex","none","none"]}>
                </Button> */}
                    <SidebarMob />
            </Box>
        </Flex>
    )
}

export default ProductNav