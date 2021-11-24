
import { USER_SIGN_IN,USER_SIGN_UP } from "../constants/userauthconstants";
const INITIAL_STATE = {};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
      };
      
    case USER_SIGN_UP:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;