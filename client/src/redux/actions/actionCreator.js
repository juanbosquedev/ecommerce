import axios from "axios";
export const GET_ALL = "GET_ALL";
export const USER_LOG = "USER_LOG";
export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const DELETE_ORDERED = "DELETE_ORDERED";

export const PURCHES_ORDER = "PURCHES_ORDER";



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

export function userLog(data) {
  return async function (dispatch) {
    try {
      return dispatch({ type: USER_LOG, payload: data });
    } catch (error) {
      return dispatch({
        type: USER_LOG,
        payload: error,
      });
    }
  };
}
  export function addOrder(data) {
    return async function (dispatch) {
      try {
        return dispatch({ type: ADD_ORDER, payload: data });
      } catch (error) {
        return dispatch({
          type: ADD_ORDER,
          payload: error,
        });
      }
    };
}

export function deleteOrder(ID) {
  return async function (dispatch) {
    try {
      return dispatch({ type: DELETE_ORDER, payload: ID });
    } catch (error) {
      return dispatch({
        type: DELETE_ORDER,
        payload: error,
      });
    }
  };
}

export function puerchesOrder() {
  return async function (dispatch) {
    try {
      return dispatch({ type: PURCHES_ORDER,   });
    } catch (error) {
      return dispatch({
        type: PURCHES_ORDER,
        payload: error,
      });
    }
  };
}

export function deleteOrdered(ID) {
  return async function (dispatch) {
    try {
      return dispatch({ type: DELETE_ORDER, payload: ID });
    } catch (error) {
      return dispatch({
        type: DELETE_ORDER,
        payload: error,
      });
    }
  };
}