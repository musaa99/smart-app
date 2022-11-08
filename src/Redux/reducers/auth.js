import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoggedIn: false, 
  user: {}
  //   currentUser: '',
  //   isFirstTimer: false,
  //   error: null,
  //   welcome: false,
};

const authReducer = (state = initialState, action) =>{
  const { type, payload } = action;
  switch (type) {

    case REGISTER_SUCCESS:
      return  {
        ...state,
        isFirstTimer: true
      }
      
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
        error: payload
      };

    case LOGOUT:
      return {
        ...state,
        welcome: true,
        isLoggedIn: false,
        currentUser: payload,
      };

  

    default:
      return state;
  }
}

export default authReducer;