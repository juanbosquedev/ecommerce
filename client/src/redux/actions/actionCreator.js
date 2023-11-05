import axios from "axios";
export const GET_ALL = "GET_ALL";



export function get_all() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      return dispatch({ type: GET_ALL, payload: data });
    } catch (error) {
      return dispatch({
        type: GET_ALL,
        payload: error,
      });
    }
  };
}

