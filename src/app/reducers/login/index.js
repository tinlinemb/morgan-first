const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
  };
  
  export default function loginReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          error: null
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.error
        };
      default:
        return state;
    }
  }
  