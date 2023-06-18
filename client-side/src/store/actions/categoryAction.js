import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "./actionTypes";
import { baseUrl } from "../baseUrl";

export function fetchCategoriesRequest() {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
}

export function fetchCategoriesSuccess(payload) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: payload,
  };
}

export function fetchCategoriesFailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
}

//fetch categories
export function fetchCategories() {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());

    try {
      const response = await fetch(baseUrl + "/categories");
      if (!response.ok) throw new Error("Failed to fetch categories.");

      const data = await response.json();
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message));
    }
  };
}
