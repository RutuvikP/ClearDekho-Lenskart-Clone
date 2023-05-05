import { Box, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from '../Components/Products/Sidebar'
import { ProductMain } from '../Components/Products/ProductMain'

export const Product = () => {
  return (
    <>
        <Box width={"97%"} position={"relative"} left={"8px"} margin={"auto"} height={"13vh"} >
            <Image width={"100%"} height={"13vh"} src="https://static1.lenskart.com/media/desktop/img/23apr/summer-sale/plp/PLP%20Camapaign%20-%20WEB%20(8).jpg" alt='Dan Abramov' />
        </Box>
        <Stack width={"97%"} margin={"auto"} direction={"row"}>
            <Box position={"absolute"} zIndex={"1110"} height={"100%"} width= "20%" style={{borderRight:"2px solid lightgrey"}}>
                <Sidebar />
            </Box>
            <Box position={"relative"} left={"294px"}   width= "80%" >
              <ProductMain  />
            </Box>
        </Stack>
    </>
  )
}
