import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import {getProductReducer,getProductDetailsReducer} from './reducers/productReducers';

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails:getProductDetailsReducer,
});

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;
