import axios from "axios";

// Redux types
import { GET_REVIEW, POST_REVIEW } from "../constants/reviewConstants";

export const getReviews = (prodId) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `http://localhost:2000/review/${prodId}`,
    });

    return dispatch({ type: GET_REVIEW, payload: reviewList.data });
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