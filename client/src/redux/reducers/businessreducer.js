import { GET_BUSINESS, SELF, CLEAR_BUSINESS,UPDATE_BUSINESS,GET_BUSINESS_BY_LOC ,GET_TOP_SELLERS_SUCCESS,GET_TOP_SELLERS_FAILURE} from "../constants/businessconstants";

const INITIAL_STATE = {
  business: {},
};

export const BusinessReducer = (state = {business: {}}, action) => {
  switch (action.type) {
    case GET_BUSINESS:
      return {
        ...state,
      };
    case UPDATE_BUSINESS:
      return {
          ...state,
          business: action.payload,
      };

    case SELF:
      return {
        ...state,
        business: action.payload,
      };

      
    case CLEAR_BUSINESS:
      return {};

    

    default:
      return {
        ...state,
      };
  }
};

export const getBusinessByLocationReducer = (state = {business:[]},action) => {
    
  switch (action.type) {
      
      case GET_BUSINESS_BY_LOC:
          return {...state, 
              business: action.payload };
      
      

      default:
          return state;
  }
};
export const gettopSellers = (state = {topsellers:[]},action) => {
    
  switch (action.type) {
      
      case GET_TOP_SELLERS_SUCCESS:
          return {...state, 
              topsellers: action.payload };
      
      case GET_TOP_SELLERS_FAILURE:
          return { Error: action.payload };

      default:
          return state;
  }
};



