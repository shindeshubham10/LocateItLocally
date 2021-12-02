
import axios from 'axios';
import * as actions from '../constants/productsConstants';

const backendUrl = 'http://localhost:2000';

export const getProducts = () => async (dispatch) => {

    try {
        console.log("Enter getProducts in axios ");
        const { data } = await axios.get(`${backendUrl}/newProduct/getProducts`);
        console.log("Response in Product Actions ");
        console.log(data);
        dispatch({ type: actions.GET_PRODUCT_SUCCESS, payload: data });
      

    } catch (error) {
        console.log("Error while getProducts");
        dispatch({ type: actions.GET_PRODUCT_FAILURE, payload: error.response });
    }
};

export const getProductDetails = (_id) => async (dispatch)=>{
    try {
        console.log("Enter ProductDetails in axios ");
        const product = await axios.get(`${backendUrl}/newProduct/${_id}`);
        console.log("Response in Product Actions ");
        console.log(product);
        return dispatch({ type: actions.GET_PRODUCT_DETAILS_SUCCESS, payload: product.data });
    } catch (error) {
        console.log("Error while getProductDetails");
        return dispatch({ type: actions.GET_PRODUCT_DETAILS_FAILURE, payload: error.response });
    }
}


export const getProductByCategory = (category) => async (dispatch)=>{
    try {
        console.log("Enter into category wise product axios ");
        const productByCategory = await axios.get(`${backendUrl}/newProduct/Bycategory/${category}`);
        console.log("Response in Product Actions - category wise");
        console.log(productByCategory);
        return dispatch({ type: actions.GET_PRODUCT_BY_CATEGORY_SUCCESS, payload: productByCategory.data });
    } catch (error) {
        console.log("Error while getProductBy Category");
        return dispatch({ type: actions.GET_PRODUCT_BY_CATEGORY_FAILURE, payload: error.response });
    }
}



// export const getManyProductDetails = (ProductIDs) => async (dispatch)=>{
//     try {
//         const temp = {
//             Ids:ProductIDs,

//         };
//         console.log("Enter ProductDetails in axios ");
//        // const { data } = await axios.get(`${backendUrl}/newProduct/${_id}`);

//         const data = await axios({
//             method: "GET",
//             url: `${backendUrl}/newProduct/getManyProducts`,
//             data:  temp ,
//           });


//         console.log("Response in Product Actions ");
//         console.log(data);
//         dispatch({ type: actions.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
//     } catch (error) {
//         console.log("Error while getProductDetails");
//         dispatch({ type: actions.GET_PRODUCT_DETAILS_FAILURE, payload: error.response });
//     }
// }


export const addProductDetails = (productData) => async (dispatch)=>{
    try {
       
        //const { data } = await axios.post(`${backendUrl}/newProduct/add`, productData);
        const Product = await axios({
            method: "POST",
            url: `${backendUrl}/newProduct/add`,
            data: { productData },
          });
       
        dispatch({ type: actions.ADD_PRODUCT_SUCCESS, payload: Product.data });
    } catch (error) {
        console.log("Error while addProduct");
        dispatch({ type: actions.ADD_PRODUCT_FAILURE, payload: error.response });
    }
}


