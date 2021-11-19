
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
       
    

}