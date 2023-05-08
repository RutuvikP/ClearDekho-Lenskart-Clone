
import ProductNav from './ProductNav'
import { data } from './Data'
import ProductCard from './IndiProduct'
import { Box, Grid, GridItem, Skeleton, Spinner } from '@chakra-ui/react'
import {useDispatch , useSelector} from "react-redux"
import { useEffect } from 'react'
import { getProducts } from '../../redux/productReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom'
import SkeletonLoader from './SkeletonLoader'

export const ProductMain = () => {
  const [ searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const location = useLocation()
  //console.log(location)
  const {products , isLoading} = useSelector(state=>{
    //console.log(state)
    return {
      products: state.productReducer.products,
      isLoading: state.productReducer.isLoading
    }
  })
  let obj={
    params:{
      color: searchParams.getAll("color"),
      brand: searchParams.getAll("brand"),
      size: searchParams.getAll("size"),
      shape: searchParams.getAll("shape"),
      //sortObj: searchParams.get("order") && "price",
      orderBy: searchParams.get("order")
    },
  }

  console.log(obj,"obj")
  useEffect(()=>{
    dispatch(getProducts(obj))
  },[location.search])
  console.log(products)

  if(isLoading){
    return (
 <SkeletonLoader/>
    );
  }

  return (
    <>
    <Box pos={"relative"} right={["6vw","0vw","0vw","0vw","0vw"]} width={["100%","100%","100%","100%","100%"]}>
      <ProductNav />
    </Box>
      <Grid ml={"2vw"} mt={"2vh"} gap={5} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)"]}>
        {
          products.length>0 &&
          products.map((el)=>(
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
