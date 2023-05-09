import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";



export const getProducts=(obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`${process.env.REACT_APP_BASEURL}/eyeglasses`,obj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS , payload:res.data})
    })
    .then(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
};