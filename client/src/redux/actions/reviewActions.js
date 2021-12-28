import axios from "axios";

// Redux types
import { GET_REVIEW_PRODUCT,GET_REVIEW_BUSINESS, POST_REVIEW } from "../constants/reviewConstants";

export const getReviews = (prodId) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `http://localhost:2000/review/product/${prodId}`,
    });

    return dispatch({ type: GET_REVIEW_PRODUCT, payload: reviewList.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getReviewsB = (businessId) => async (dispatch) => {
  try {
    console.log(businessId);
    const reviewList = await axios({
      method: "GET",
      url: `http://localhost:2000/review/business/${businessId}`,
    });

    return dispatch({ type: GET_REVIEW_BUSINESS, payload: reviewList.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};


export const postReviews = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `http://localhost:2000/review/new`,
      data: { reviewData },
    });

    return dispatch({
      type: POST_REVIEW,
      payload: reviewData,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};