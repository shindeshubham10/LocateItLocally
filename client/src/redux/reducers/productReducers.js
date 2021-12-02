
import * as actionsType from '../constants/productsConstants';

export const getProductReducer = (state = {products:[]},action) => {

    switch (action.type) {
        
        case actionsType.GET_PRODUCT_SUCCESS:
            return { Products: action.payload };
        
        case actionsType.GET_PRODUCT_FAILURE:
            return { Error: action.payload };
        
       
        default:
            return state;
    }
       
    

};



export const getProductByCategoryReducer = (state = {productsByCategory:[]},action) => {

    switch (action.type) {
        
        case actionsType.GET_PRODUCT_BY_CATEGORY_SUCCESS:
            return { Products: action.payload };
        
        case actionsType.GET_PRODUCT_BY_CATEGORY_FAILURE:
            return { Error: action.payload };
        
       
        default:
            return state;
    }
       
    

};

export const getProductDetailsReducer = (state = {ProductDetails:{}},action) => {
    
    switch (action.type) {
        
        case actionsType.GET_PRODUCT_DETAILS_SUCCESS:
            return {Products: action.payload };
        
        case actionsType.GET_PRODUCT_DETAILS_FAILURE:
            return { Error: action.payload };

        default:
            return state;
    }
};


export const addProductDetailsReducer = (state = {product:{}},action) => {
    
    switch (action.type) {
        
        case actionsType.ADD_PRODUCT_SUCCESS:
            return { ...state,
                product: action.payload, };
        
        case actionsType.ADD_PRODUCT_FAILURE:
            return { Error: action.payload };

        default:
            return state;
    }
};