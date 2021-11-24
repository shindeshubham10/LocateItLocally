
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
        const { data } = await axios.get(`${backendUrl}/newProduct/${_id}`);
        console.log("Response in Product Actions ");
        console.log(data);
        dispatch({ type: actions.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        console.log("Error while getProductDetails");
        dispatch({ type: actions.GET_PRODUCT_DETAILS_FAILURE, payload: error.response });
    }
}