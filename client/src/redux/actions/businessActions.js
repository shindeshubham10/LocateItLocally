import axios from "axios";

// Redux types
import {GET_BUSINESS,AUTH_BUSINESS,SELF,CLEAR_BUSINESS,UPDATE_BUSINESS} from "../constants/businessconstants.js"

export const getBusiness = (_id) => async (dispatch) => {
  try {

    console.log("In getBusiness");
    console.log(_id);
    const Business = await axios({
      method: "GET",
      url: `http://localhost:2000/business/${_id}`,
    });


    return dispatch({ type: GET_BUSINESS, payload: Business.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const updateBusiness = (_id,businessData) => async (dispatch) => {
  try {
    const Business = await axios({
      method: "PUT",
      url: `http://localhost:2000/business/update/${_id}`,
      data:{ businessUpdatedata:businessData},
    });

    return dispatch({ type: UPDATE_BUSINESS, payload: Business.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const getMyBusiness = () => async (dispatch) => {
  try {
    const User = await axios({
      method: "GET",
      url: `http://localhost:2000/business/`,
    });

    return dispatch({ type: SELF, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const clearBusiness = () => async (dispatch) => {
  try {
    return dispatch({ type: CLEAR_BUSINESS, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};