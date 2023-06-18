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

export function newCategory(name) {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/categories", {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "content-type": "application/json",
        },
        body: JSON.stringify(name),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      dispatch(fetchCategories());
    } catch (error) {
      console.log(error);
    }
  };
}

export function categoryEdit(category) {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/categories/${category.id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "content-type": "application/json",
        },
        body: JSON.stringify(category),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      dispatch(fetchCategories());
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteCategory(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/categories/${id}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      dispatch(fetchCategories());
    } catch (error) {
      console.log(error);
    }
  };
}
