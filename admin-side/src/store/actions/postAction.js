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

//fetch
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

//create post
export function newPost(postForm) {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/posts", {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "content-type": "application/json",
        },
        body: JSON.stringify(postForm),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }
      const data = await response.json();
      dispatch(fetchPosts());
    } catch (error) {
      throw error;
    }
  };
}

//delete
export function deletePost(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/posts/${id}`, {
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

      dispatch(fetchPosts());
    } catch (error) {
      console.log(error);
    }
  };
}

// edit
export function editPost(postForm) {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/posts/" + postForm.id, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "content-type": "application/json",
        },
        body: JSON.stringify(postForm),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }
      const data = await response.json();
      dispatch(fetchPosts());
    } catch (error) {
      throw error;
    }
  };
}
