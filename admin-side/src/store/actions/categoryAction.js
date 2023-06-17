import { baseUrl } from "../baseUrl";
import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from "./actionTypes";

export function FetchCategoriesRequest() {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
}

export function FetchCategoriesSuccess(payload) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: payload,
  };
}

export function FetchCategoriesFailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    dispatch(FetchCategoriesRequest());

    try {
      const response = await fetch(baseUrl + "/categories");
      if (!response.ok) throw new Error("Failed to Fetch Categories");

      const data = await response.json();
      dispatch(FetchCategoriesSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}
