import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import {getProductReducer,getProductDetailsReducer,getProductByCategoryReducer} from './reducers/productReducers';
import AuthReducer from './reducers/userAuthreducer';
import BAuthReducer from './reducers/businessauthreducer';
import UserReducer from "./reducers/userreducer";
import BusinessReducer from "./reducers/businessreducer";
import { addProductDetailsReducer } from "./reducers/productReducers";
import { getProductsofBusinessReducer } from "./reducers/productReducers";
import { deleteProductsofBusinessReducer } from "./reducers/productReducers";

import { updateProductDetailsReducer } from "./reducers/productReducers";
import {addNewWishlistReducer,getWishlistReducer,getProductsFromWishlist} from "./reducers/wishlistReducer";



const reducer = combineReducers({
    getProducts:getProductReducer,
    AuthReducer,
    BAuthReducer,
    user:UserReducer,
    business:BusinessReducer,
    getProductDetails:getProductDetailsReducer,
    addProductDetailsReducer,
    getProductsofBusinessReducer,
    deleteProductsofBusinessReducer,
    updateProductDetailsReducer,
    wishlistData:addNewWishlistReducer,
    getWishlistReducer,
    getProductByCategoryReducer,
    getProductsFromWishlist
})

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;
