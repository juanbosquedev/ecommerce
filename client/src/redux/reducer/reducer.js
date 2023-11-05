import { ADD_ORDER, DELETE_ORDER, GET_ALL,USER_LOG, PURCHES_ORDER, DELETE_ORDERED } from "../actions/actionCreator";

const initialState = {
  // users:[],PURCHESE_ORDER

  // userCreate: {
  //   id:"id",
  //   name:"name",
  //   email:"",
  //   type:""
  // },

  userLogged: {
    name: "",
    role: "",
    logged: "",
  },

  products: [],
 comprasBack: [],
  order: {
    user: "",
    purcheseOrder: [],
    state: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case USER_LOG: {
      return {
        ...state,
        userLogged: action.payload,
      };
    }
    case ADD_ORDER: {
      return {
        ...state,
        order: {
          ...state.order,
          purcheseOrder:  [...state.order.purcheseOrder, action.payload],
        },
      }
    }
    case DELETE_ORDER: {
      return {
        ...state,
        order: {
          ...state.order,
          purcheseOrder:  state.order.purcheseOrder.filter((item) => item.id !== action.payload),
        },
      }
    }
    case PURCHES_ORDER: {
      return {
        ...state,
        comprasBack: state.comprasBack.concat(state.order.purcheseOrder )
      }
    }
    case DELETE_ORDERED: {
      return {
        ...state,
        comprasBack: state.comprasBack.filter((item) => item.id !== action.payload),
      }
    }
    default:
      return { ...state };
  }
};

export default reducer;
