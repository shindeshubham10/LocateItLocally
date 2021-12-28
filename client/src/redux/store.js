import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import {getProductReducer,getProductDetailsReducer,getProductByCategoryReducer} from './reducers/productReducers';
import AuthReducer from './reducers/userAuthreducer';
import BAuthReducer from './reducers/businessauthreducer';
import UserReducer from "./reducers/userreducer";
import {BusinessReducer,getBusinessByLocationReducer} from "./reducers/businessreducer";
import { addProductDetailsReducer } from "./reducers/productReducers";
import { getProductsofBusinessReducer,getProductsOfBusinessByLocationReducer ,getlatestProducts,gettopProducts} from "./reducers/productReducers";
import { deleteProductsofBusinessReducer } from "./reducers/productReducers";

import { updateProductDetailsReducer } from "./reducers/productReducers";

import { addJobDetailsReducer,getJobsofBusinessReducer,deleteJobsofBusinessReducer, updateJobDetailsReducer} from "./reducers/jobreducer";
import {addNewWishlistReducer,getWishlistReducer,getProductsFromWishlist} from "./reducers/wishlistReducer";

import {getbusinessreviewReducer,getproductreviewReducer,postreviewReducer} from "./reducers/reviewReducer";


import { getJobsofBusinessReducerbyID } from "./reducers/jobreducer";
import { getProductsofBusinessReducerbyID } from "./reducers/productReducers";
import { gettopSellers } from "./reducers/businessreducer";


const reducer = combineReducers({

    getbusinessreviewReducer,
    getproductreviewReducer,
    postreviewReducer,
    getlatestProducts,
    
    addNewWishlistReducer,
    getProducts:getProductReducer,
    AuthReducer,
    BAuthReducer,
    user:UserReducer,
    business:BusinessReducer,
    getProductDetails:getProductDetailsReducer,
    addProductDetailsReducer,
    getProductsofBusinessReducer,
    deleteProductsofBusinessReducer,
    updateProductDetailsReducer ,
    wishlistData:addNewWishlistReducer,
    getWishlistReducer,
    getProductByCategoryReducer,
    addJobDetailsReducer,
    getJobsofBusinessReducer, 
    deleteJobsofBusinessReducer,
    updateJobDetailsReducer,
    getJobsofBusinessReducerbyID,
    getProductsofBusinessReducerbyID,
    getProductsFromWishlist,
    getProductsOfBusinessByLocationReducer,
    getBusinessByLocationReducer,
    gettopProducts,
    gettopSellers 


    
   
   
    
})

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;
