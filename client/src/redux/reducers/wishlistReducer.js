
import * as actionsType from '../constants/wishlistConstants';


export const addNewWishlistReducer = (state = {wishlist:{}},action) => {
    
    switch (action.type) {
        
        case actionsType.ADD_WISHLIST_SUCCESS:
            return { ...state,
                wishlist: action.payload, };
        
        case actionsType.ADD_WISHLIST_FAILURE:
            return { Error: action.payload };

        default:
            return state;
    }
};


export const getWishlistReducer = (state = {wishlist:[]},action) => {
    
    switch (action.type) {
        
        case actionsType.GET_WISHLIST_SUCCESS:
            return { ...state,
                wishlist: action.payload, };
        
        case actionsType.GET_WISHLIST_SUCCESS:
            return { ...state,
                 wishlist: action.payload, };
        
        case actionsType.UPDATE_WISHLIST:
            return { Error: action.payload };

        default:
            return state;
    }
};

export const getProductsFromWishlist = (state = {productsWishlist:[]},action) => {
    
    switch (action.type) {
        
        case actionsType.GET_PRODUCT_FROM_WISHLIST_SUCCESS:
            return { ...state,
                productsWishlist: action.payload, };
        
        case actionsType.GET_PRODUCT_FROM_WISHLIST_FAILURE:
            return { ...state,
                productsWishlist: action.payload, };
        
        default:
            return state;
    }
};




