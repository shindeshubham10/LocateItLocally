
import axios from 'axios';

import * as actions from '../constants/wishlistConstants';

const backendUrl = 'http://localhost:2000';
export const addNewWishlist = (wishlistData) => async (dispatch)=>{
    try {
       
        console.log("Into add wishlist action and data = ",wishlistData);
        const NewWishlist = await axios({
            method: "POST",
            url: `${backendUrl}/wishlist/addtoWishlist`,
            data: { wishlistData },
          });
       
        dispatch({ type: actions.ADD_WISHLIST_SUCCESS, payload: NewWishlist.data });
    } catch (error) {
        console.log("Error while addwishlist");
        dispatch({ type: actions.ADD_WISHLIST_FAILURE, payload: error.response });
    }
};

export const getWishlist = () => async (dispatch) => {

    try {
        console.log("Enter getWishlist in axios ");
        const Wishlist  = await axios.get(`${backendUrl}/wishlist/getAllWishlists`);
        console.log("Response in getWishlist Actions ");
        console.log(Wishlist);
        return dispatch({ type: actions.GET_WISHLIST_SUCCESS, payload: Wishlist.data });
      

    } catch (error) {
        console.log("Error while getProducts");
        return dispatch({ type: actions.GET_WISHLIST_FAILURE, payload: error.response });
    }
};


export const addProductInWishlist = (productID,wishlistID) => async (dispatch) => {
    try {
      
      console.log(" Product ID - addProductInWishlist",productID);
      console.log("Wishlist ID - addProductInWishlist",wishlistID);
      const AddNewProductToWishlist = await axios({
        method: "PUT",
        url: `http://localhost:2000/wishlist/update/${wishlistID}`,
        data:{ wishlistUpdatedata:productID},
      });
  
      return dispatch({ type: actions.UPDATE_WISHLIST, payload: AddNewProductToWishlist.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };


  export const getProductsFromWishlist = (wishlistID) => async (dispatch) => {
    try {
      console.log(wishlistID);
      const ProductList = await axios({
        method: "GET",
        url: `http://localhost:2000/wishlist/getProductofWishlist/${wishlistID}`,
      });
  
      return dispatch({ type: actions.GET_PRODUCT_FROM_WISHLIST_SUCCESS, payload: ProductList.data });
    } catch (error) {
      return dispatch({ type:actions.GET_PRODUCT_FROM_WISHLIST_FAILURE, payload: error });
    }
  };
  