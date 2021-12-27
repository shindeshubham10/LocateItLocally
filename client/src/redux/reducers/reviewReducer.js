import { GET_REVIEW_PRODUCT,GET_REVIEW_BUSINESS, POST_REVIEW } from "../constants/reviewConstants";

const INITIAL_STATE = {
  reviews: [],
};

export const getproductreviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_REVIEW_PRODUCT:
      return {
        ...state,
        reviews: action.payload,
      };

    
    default:
      return {
        ...state,
      };
  }
};

export const getbusinessreviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_REVIEW_BUSINESS:
      return {
        ...state,
        reviews: action.payload,
      };

    

    default:
      return {
        ...state,
      };
  }
};

export const postreviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case POST_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};



