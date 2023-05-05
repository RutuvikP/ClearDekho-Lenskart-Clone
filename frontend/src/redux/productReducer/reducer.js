import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

const initialState={
    isLoading:false,
    isError:false,
    products:[]
};

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,products:payload}
        default:
            return state;
    }
};