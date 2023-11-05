import { GET_ALL} from "../actions/actionCreator";

const initialState = {
  // users:[],PURCHESE_ORDER

  // userCreate: {
  //   id:"id",
  //   name:"name",
  //   email:"",
  //   type:""
  // },

 

  products: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL: {
      return {
        ...state,
        products: action.payload,
      };
    }


    default:
      return { ...state };
  }
};

export default reducer;
