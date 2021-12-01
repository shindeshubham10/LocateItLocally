import { BUSINESS_SIGN_IN,BUSINESS_SIGN_UP } from "../constants/businessauthconstants";
const INITIAL_STATE = {};

const BAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUSINESS_SIGN_IN:
      return {
        ...state,
      };
      
    case BUSINESS_SIGN_UP:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default BAuthReducer;