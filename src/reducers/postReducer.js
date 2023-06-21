import {
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
} from "../constants/postConstants"

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true }
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload }
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const postGetReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_GET_REQUEST:
      return { loading: true }
    case POST_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        posts: action.payload.posts,
        page: action.payload.page,
        pages: action.payload.pages,
      }
    case POST_GET_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
