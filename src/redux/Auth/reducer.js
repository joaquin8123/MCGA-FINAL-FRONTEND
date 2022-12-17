import { 
    SET_LOGIN,
    SET_LOADINGS_LOGIN,
    DISMISS_LOADING_LOGIN
} from "./types";
  
const INITIAL_STATE = {
    authData: {},
    error: null,
    loading: false,
};
  
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOGIN:
        return {
            ...state,
            authData: action.payload,
            error: null,
        };
        case SET_LOADINGS_LOGIN:
        return {
            ...state,
            loading: action.payload,
            error: null,
        };
        case DISMISS_LOADING_LOGIN:
        return {
            ...state,
            loading: action.payload,
            error: null,
        };
        default:
        return state;
    }
};

export default reducer;
