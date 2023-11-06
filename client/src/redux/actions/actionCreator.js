import axios from "axios";
export const GET_ALL = "GET_ALL";
export const USER_LOG = "USER_LOG";
export const ADD_ORDER = "ADD_ORDER";
export const CLEAN_ORDER = "CLEAN_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const DELETE_ORDERED = "DELETE_ORDERED";

export const PURCHES_ORDER = "PURCHES_ORDER";

const { VITE_API_URL } = import.meta.env; //http://localhost:8000/

export function get_all() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${VITE_API_URL}productsAll`);
      return dispatch({ type: GET_ALL, payload: data });
    } catch (error) {
      return dispatch({
        type: GET_ALL,
        payload: error,
      });
    }
  };
}

export function userLog(user) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${VITE_API_URL}userLogin`, user);
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

export function puerchesOrder(purchess) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${VITE_API_URL}userPurchese`, purchess);
      console.log(data, " soy data")
      return dispatch({ type: PURCHES_ORDER, payload: data });
    } catch (error) {
      return dispatch({
        type: PURCHES_ORDER,
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
export function cleanOrder() {
  return async function (dispatch) {
    try {
      return dispatch({ type: CLEAN_ORDER });
    } catch (error) {
      return dispatch({
        type: CLEAN_ORDER,
        payload: error,
      });
    }
  };
}

export function deleteOrdered(ID) {
  return async function (dispatch) {
    try {
      return dispatch({ type: DELETE_ORDERED, payload: ID });
    } catch (error) {
      return dispatch({
        type: DELETE_ORDERED,
        payload: error,
      });
    }
  };
}
