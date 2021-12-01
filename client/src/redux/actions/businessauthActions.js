import axios from "axios"

import { BUSINESS_SIGN_IN,BUSINESS_SIGN_UP,BUSINESS_SIGN_OUT } from "../constants/businessauthconstants";
import { clearBusiness } from "./businessActions";
import { getMyBusiness } from "./businessActions";

export const BusinesssignIn = (businessData) => async (dispatch) => {
    try {
      const Business = await axios({
        method: "POST",
        url: `http://localhost:2000/businessAuth/signin`,
        data: { credentials: businessData },
      });
  
      getMyBusiness();
  
      localStorage.setItem(
        "LocateItLocallyBusiness",
        JSON.stringify({ token: Business.data.token })
      );
  
      return dispatch({ type: BUSINESS_SIGN_IN, payload: Business.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const BusinesssignUp = (businessData) => async (dispatch) => {
    try {
      console.log("defrhgrbsdjfhbdfzcjkxj");
      const Business = await axios({
        method: "POST",
        url: `http://localhost:2000/businessAuth/signup`,
        data: { credentials: businessData },
      });
      console.log("After business axios storage");
      console.log(Business);
  
      getMyBusiness();
      console.log("Before business local storage");
  
      localStorage.setItem(
        "LocateItLocallyBusiness",
        JSON.stringify({ token: Business.data.token })
      );
        console.log("After business local storage");
      return dispatch({ type: BUSINESS_SIGN_UP, payload: Business.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const BusinesssignOut = () => async (dispatch) => {
    try {
      localStorage.removeItem("LocateItLocallyBusiness");
      clearBusiness();
      window.location.href = "http://localhost:3000";
      
      return dispatch({ type: BUSINESS_SIGN_OUT, payload: {} });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
  