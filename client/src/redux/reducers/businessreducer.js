import { GET_BUSINESS, SELF, CLEAR_BUSINESS,UPDATE_BUSINESS } from "../constants/businessconstants";

const INITIAL_STATE = {
  business: {},
};

const BusinessReducer = (state = INITIAL_STATE, action) => {
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

export default BusinessReducer;