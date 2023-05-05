
import ProductNav from './ProductNav'
import { data } from './Data'
import ProductCard from './IndiProduct'
import { Grid, GridItem } from '@chakra-ui/react'
import {useDispatch , useSelector} from "react-redux"
import { useEffect } from 'react'
import { getProducts } from '../../redux/productReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom'
export const ProductMain = () => {
  const [ searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const location = useLocation()
  //console.log(location)
  const {products} = useSelector(state=>{
    //console.log(state)
    return {
      products: state.productReducer.products
    }
  })
  let obj={
    params:{
      color: searchParams.getAll("color"),
      brand: searchParams.getAll("brand"),
      size: searchParams.getAll("size"),
      shape: searchParams.getAll("shape")
    },
  }

  console.log(obj,"obj")
  useEffect(()=>{
    dispatch(getProducts(obj))
  },[location.search])
  //console.log(products)
  return (
    <>
      <ProductNav />
      <Grid ml={"2vw"} mt={"2vh"} gap={5} gridTemplateColumns={"repeat(3,1fr)"}>
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
