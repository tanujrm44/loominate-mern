import {
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
} from "../constants/commentConstants"
import axios from "axios"

export const createComment =
  (comment, postId) => async (dispatch, getState) => {
    console.log(postId)
    try {
      dispatch({
        type: COMMENT_CREATE_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.post(
        `http://localhost:5000/api/posts/${postId}/comments`,
        { comment },
        config
      )

      dispatch({
        type: COMMENT_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: COMMENT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
