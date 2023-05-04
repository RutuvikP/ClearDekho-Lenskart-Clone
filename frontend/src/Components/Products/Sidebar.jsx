import { Box, Checkbox, CheckboxGroup, Grid, GridItem, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import {useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
export const Sidebar = () => {
    const [frame,setFrame] = useState("")
    console.log(frame)
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
                            setFrame("Full Rim")
                        }} boxSize={"56px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Full Rim</Text>
                        </Box>
                        <Box onClick={()=>{
                            setFrame("Half Rim")
                        }} boxSize={"56px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Half Rim</Text>
                        </Box>
                        <Box onClick={()=>{
                            setFrame("Rimless")
                        }} boxSize={"56px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Rimless</Text>
                        </Box>
                    </HStack>
                </VStack>

                <VStack align={"start"} >
                    <Heading size={"sm"} fontWeight={"semibold"} color={"gray"}>FRAME SHAPE</Heading>
                    <Grid gap={2} gridTemplateColumns={"repeat(3,1fr)"}>
                        <GridItem boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Rectrangle</Text>
                        </GridItem>
                        <GridItem boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Round</Text>
                        </GridItem>
                        <GridItem boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Cat Eye</Text>
                        </GridItem>
                        <GridItem boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Squire</Text>
                        </GridItem>
                        <GridItem align={"center"} boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Geometric</Text>
                        </GridItem>
                        <GridItem boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Aviator</Text>
                        </GridItem>
                        <GridItem boxSize={"56px"} width={"62px"} border={"1px solid lightgray"}>
                            <Image src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png' />
                            <Text fontWeight={"hairline"} color={"gray"} fontSize={"13px"}>Wayfarer</Text>
                        </GridItem>
                    </Grid>
                </VStack>

                <VStack align={"start"} >
                    <Accordion width={"18vw"} defaultIndex={[0]} allowMultiple>

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
                                        <Checkbox size={"lg"} colorScheme="gray" >
                                            <Text fontSize={"sm"} color={"gray"}>Black</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>Brown</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>Blue</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>Green</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>Gold</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>Grey</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>Red</Text>
                                        </Checkbox>
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
                                        <Checkbox size={"lg"} colorScheme="gray" >
                                            <Text fontSize={"sm"} color={"gray"}>VINCENT CHASE ONLINE</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>LENSKART AIR ONLINE</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>JOHN JACOBS ONLINE</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>LENSKART READERS</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>LENSKART AIR</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>OJOS</Text>
                                        </Checkbox>
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
                                        <Checkbox size={"lg"} colorScheme="gray" >
                                            <Text fontSize={"sm"} color={"gray"}>EXTRA NARROW</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>MEDIUM</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>WIDE</Text>
                                        </Checkbox>
                                        <Checkbox size={"lg"} colorScheme='gray' >
                                            <Text fontSize={"sm"} color={"gray"}>EXTRA WIDE</Text>
                                        </Checkbox>
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
