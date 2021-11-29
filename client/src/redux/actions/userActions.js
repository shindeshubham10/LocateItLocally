import axios from "axios";

// Redux types
import {GET_USER,AUTH_USER,SELF,CLEAR_USER,UPDATE_USER} from "../constants/userconstants.js"

export const getUser = (_id) => async (dispatch) => {
  try {
    const User = await axios({
      method: "GET",
      url: `http://localhost:2000/user/${_id}`,
    });

    return dispatch({ type: GET_USER, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const updateUser = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "PUT",
      url: `http://localhost:2000/user/update`,
      data:{ userUpdatedata:userData},
    });

    return dispatch({ type: UPDATE_USER, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const getMyself = () => async (dispatch) => {
  try {
    const User = await axios({
      method: "GET",
      url: `http://localhost:2000/user/`,
    });

    return dispatch({ type: SELF, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const clearUser = () => async (dispatch) => {
  try {
    return dispatch({ type: CLEAR_USER, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};