import React from 'react'
import ProductNav from './ProductNav'
import { data } from './Data'
import ProductCard from './IndiProduct'
import { Grid, GridItem } from '@chakra-ui/react'
export const ProductMain = () => {
  return (
    <>
      <ProductNav />
      <Grid ml={"2vw"} mt={"2vh"} gap={5} gridTemplateColumns={"repeat(3,1fr)"}>
        {
          data.map((el)=>(
            <GridItem cursor={"pointer"} _hover={{shadow:"lg"}}>
              <ProductCard
              key={el._id}
              {...el}
              />
            </GridItem>
          ))
        }
      </Grid>
    </>
  )
}
