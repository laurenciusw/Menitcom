import { baseUrl } from "../baseUrl";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./actionTypes";

export function FetchPostsRequest() {
  return {
    type: FETCH_POSTS_REQUEST,
  };
}

export function FetchPostsSuccess(payload) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: payload,
  };
}

export function FetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(FetchPostsRequest());
    try {
      const response = await fetch(baseUrl + "/posts");
      if (!response.ok) throw new Error("Failed to fetch posts.");

      const data = await response.json();
      dispatch(FetchPostsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}
