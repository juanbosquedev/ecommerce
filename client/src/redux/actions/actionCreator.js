import axios from "axios";
export const GET_ALL = "GET_ALL";
export const USER_LOG = "USER_LOG";
export const ADD_ORDER = "ADD_ORDER";
export const CLEAN_ORDER = "CLEAN_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const DELETE_ORDERED = "DELETE_ORDERED";
export const GET_PURCHASES = "GET_PURCHASES";
export const GET_USER_PURCHASES = "GET_USER_PURCHASES";
export const PURCHES_ORDER = "PURCHES_ORDER";

const API = import.meta.env.VITE_API_URL; 

export function get_all() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API}productsAll`);
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
      const { data } = await axios.post(`${API}userLogin`, user);
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
//CARGO LA INFO CON USER ID Y PRODUCTS
export function puerchesOrder(purchas) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${API}userPurchase`, {
        purchas,
      });
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

export function deleteOrdered(id) {
  return async function (dispatch) {
    try {
      const data = await axios.delete(`${API}userPurchase/${id}`);
      return dispatch({ type: DELETE_ORDERED, payload: data });
    } catch (error) {
      return dispatch({
        type: DELETE_ORDERED,
        payload: error,
      });
    }
  };
}

export function get_purchases() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API}getPurchases`);
      return dispatch({ type: GET_PURCHASES, payload: data });
    } catch (error) {
      return dispatch({
        type: GET_PURCHASES,
        payload: error,
      });
    }
  };
}

export function get_purchaseById(userID) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API}userPurchase/${userID}`);
      return dispatch({ type: GET_USER_PURCHASES, payload: data });
    } catch (error) {
      return dispatch({
        type: GET_USER_PURCHASES,
        payload: error,
      });
    }
  };
}
