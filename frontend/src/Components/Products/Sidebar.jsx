import { Box, Checkbox, CheckboxGroup, FormControl, Grid, GridItem, HStack, Heading, Image, Stack, Text, VStack, background, styled } from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
export const Sidebar = () => {
    const [frame,setFrame] = useState("")
    const [searchParams,setSearchParams] = useSearchParams()
    const initialColor = searchParams.getAll("color")
    const initialBrand = searchParams.getAll("brand")
    const initialSize =  searchParams.getAll("size")
    const initialShape = searchParams.getAll("shape")
    const [color,setColor] = useState(initialColor||[])
    const [brand,setBrand] = useState(initialBrand||[])
    const [size,setSize] = useState(initialSize||[])
    const [shape,setShape] = useState(initialShape||[])


    //handleColor
    const handleColor=(e)=>{
        //console.log(e.target.value)
        let newColor = [...color]
        const value = e.target.value
        if(newColor.includes(value)){
            newColor = newColor.filter((el)=> el!==value)
        }
        else{
            newColor.push(value)
        }
        setColor(newColor)
    }


    //handleBrand
    const handleBrand=(e)=>{
        //console.log(e.target.value)
        let newBrand = [...brand]
        const value = e.target.value
        if(newBrand.includes(value)){
            newBrand = newBrand.filter((el)=> el!==value)
        }
        else{
            newBrand.push(value)
        }
        setBrand(newBrand)
    }



    //handleSize
    const handleSize=(e)=>{
        let newSize = [...size]
        const value = e.target.value
        if(newSize.includes(value)){
            newSize = newSize.filter((el)=> el!==value)
        }
        else{
            newSize.push(value)
        }
        setSize(newSize)
    }
    //console.log(searchParams.getAll("brand"),"params")


    //handleShape
    const handleShape=(value)=>{
        let newShape = [...shape]
        if(newShape.includes(value)){
            newShape = newShape.filter((el)=> el!==value)
        }
        else{
            newShape.push(value)
        }
        setShape(newShape)
    }

    useEffect(()=>{
        const params={
            color,
            brand,
            size,
            shape
        }
        console.log(params,"color")
        setSearchParams(params)
    },[color,brand,size,shape])
    return (
        <>
            <Stack align={"start"} spacing={7} direction="column">
                <VStack align={"start"} mt={"2vh"}>
                    <Heading size={"sm"} fontWeight={"semibold"} color={"gray"}>AGE GROUP</Heading>
                    <CheckboxGroup>
                        <Checkbox size={"lg"} colorScheme="gray" >
                            <Text fontSize={"sm"} color={"gray"}>2-5 Yrs</Text>
                        </Checkbox>
                        <Checkbox size={"lg"} colorScheme='gray' >
                            <Text fontSize={"sm"} color={"gray"}>5-8 Yrs</Text>
                        </Checkbox>
                    </CheckboxGroup>
                </VStack>

                <VStack align={"start"} >
                    <Heading size={"sm"} fontWeight={"semibold"} color={"gray"}>FRAME TYPE</Heading>
                    <HStack>
                        <Box onClick={()=>{
                            const value = "full-rim"
                            console.log(value)
                        }} boxSize={"56px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Full Rim</Text>
                        </Box>
                        <Box onClick={()=>{
                            const value = "half-rim"
                        }} boxSize={"56px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Half Rim</Text>
                        </Box>
                        <Box onClick={()=>{
                            const value = "rimless"
                            console.log(value)
                        }} boxSize={"56px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Rimless</Text>
                        </Box>
                    </HStack>
                </VStack>

                <VStack align={"start"} >
                    <Heading size={"sm"} fontWeight={"semibold"} color={"gray"}>FRAME SHAPE</Heading>
                    <Grid gap={2} gridTemplateColumns={"repeat(3,1fr)"}>
                        <GridItem _hover={{border:"1px solid black"}} cursor={'pointer'} onClick={()=>{
                            const value = "rectangle"
                            handleShape(value)
                            //console.log(value)
                            }} 
                            boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Rectangle</Text>
                        </GridItem>
                        <GridItem _hover={{border:"1px solid black"}} cursor={'pointer'} onClick={()=>{
                            const value = "round"
                            handleShape(value)
                        }} boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Round</Text>
                        </GridItem>
                        <GridItem _hover={{border:"1px solid black"}} cursor={'pointer'} onClick={()=>{
                            const value = "cat-eye"
                            handleShape(value)
                        }} boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Cat Eye</Text>
                        </GridItem>
                        <GridItem _hover={{border:"1px solid black"}} cursor={'pointer'} onClick={()=>{
                            const value = "squire"
                            handleShape(value)
                        }} boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Squire</Text>
                        </GridItem>
                        <GridItem _hover={{border:"1px solid black"}} _focus={{border:"1px solid black"}} cursor={'pointer'} onClick={()=>{
                            const value = "geometric"
                            handleShape(value)
                        }} align={"center"} boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Geometric</Text>
                        </GridItem>
                        <GridItem _hover={{border:"1px solid black"}} cursor={'pointer'} onClick={()=>{
                            const value = "aviator"
                            handleShape(value)
                        }} boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Aviator</Text>
                        </GridItem>
                        <GridItem _hover={{border:"1px solid black"}} cursor={'pointer'} onClick={()=>{
                            const value = "wayfarer"
                            handleShape(value)
                        }} boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Wayfarer</Text>
                        </GridItem>
                    </Grid>
                </VStack>

                <VStack align={"start"} >
                    <Accordion width={["100%","100%","100%","18vw","18vw"]} defaultIndex={[0]} allowMultiple>

                        {/* First */}
                        <AccordionItem >
                            <Heading as={"h2"} size={"sm"} fontWeight={"bold"} color={"blackAlpha.700"}>
                                <AccordionButton height={"7vh"} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        FRAME COLOR
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                                <Stack gap={1} align={"start"} direction="column">
                                    <CheckboxGroup>
                                        <HStack>
                                            <input type="checkbox" value={"black"} style={{width:"20px",height:"20px",color:"red",backgroundColor:"green"}} checked={color.includes("black")} onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Black</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"brown"} checked={color.includes("brown")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Brown</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"blue"} checked={color.includes("blue")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Blue</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"green"} checked={color.includes("green")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Green</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"gold"} checked={color.includes("gold")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Gold</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"skyblue"} checked={color.includes("skyblue")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Skyblue</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"purple"} checked={color.includes("purple")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Purple</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"pink"} checked={color.includes("pink")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Pink</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"red"} checked={color.includes("red")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Red</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"teal"} checked={color.includes("teal")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Teal</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"transparent"} checked={color.includes("transparent")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Transparent</Text>
                                        </HStack>
                                    </CheckboxGroup>

                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                        {/* Second */}
                        <AccordionItem>
                            <Heading as={"h2"} size={"sm"} fontWeight={"bold"} color={"blackAlpha.700"}>
                                <AccordionButton height={"7vh"} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        BRANDS
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                            <Stack gap={2} align={"start"} direction="column">
                                    <CheckboxGroup>
                                        <HStack>
                                            <input type="checkbox" value={"Vincent Chase"} checked={brand.includes("Vincent Chase")} onChange={handleBrand} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>VINCENT CHASE ONLINE</Text>

                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleBrand} value={"Lenskart Air"} checked={brand.includes("Lenskart Air")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>LENSKART AIR</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleBrand} value={"Lenskart STUDIO"} style={{width:"20px",height:"20px"}} checked={brand.includes("Lenskart STUDIO")}  />
                                            <Text fontSize={"sm"} color={"gray"}>LENSKART STUDIO</Text>
                                        </HStack>
                                    </CheckboxGroup>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                        {/* Third */}
                        <AccordionItem>
                            <Heading as={"h2"} size={"sm"} fontWeight={"bold"} color={"blackAlpha.700"}>
                                <AccordionButton height={"7vh"} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        FRAME SIZE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                            <Stack gap={2} align={"start"} direction="column">
                                    <CheckboxGroup>
                                        <HStack>
                                            <input type="checkbox" value={"Extra Narrow"} checked={size.includes("Extra Narrow")} onChange={handleSize} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>EXTRA NARROW</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleSize} value={"Medium"} checked={size.includes("Medium")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>MEDIUM</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleSize} value={"Wide"} checked={size.includes("Wide")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>WIDE</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleSize} value={"Narrow"} checked={size.includes("Narrow")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>NARROW</Text>
                                        </HStack>
                                    </CheckboxGroup>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                        {/* Fourth */}
                        <AccordionItem>
                            <Heading as={"h2"} size={"sm"} fontWeight={"bold"} color={"blackAlpha.700"}>
                                <AccordionButton height={"7vh"} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        WEIGHT GROUP
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                            <Stack gap={2} align={"start"} direction="column">
                                    <CheckboxGroup>
                                        <Checkbox size={"lg"} colorScheme="gray" >
                                            <Text fontSize={"sm"} color={"gray"}>LIGHT</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>AVERAGE</Text>
                                        </Checkbox>
                                    </CheckboxGroup>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </VStack>
            </Stack>
        </>
    )
}
