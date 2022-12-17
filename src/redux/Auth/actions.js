import { SET_LOGIN, SET_LOGIN_ERROR, SET_LOADINGS_LOGIN, DISMISS_LOADING_LOGIN} from "./types";

export const setLogin = (data) => {
  return {
    type: SET_LOGIN,
    payload: data,
  };
};

export const setLoginError = () => {
  return {
    type: SET_LOGIN_ERROR,
    payload: true,
  };
};

export const setLoadingLogin = () => {
  return {
    type: SET_LOADINGS_LOGIN,
    payload: true,
  };
};

export const dismissLoadingLogin = () => {
  return {  
    type: DISMISS_LOADING_LOGIN,
    payload: false,
  };
};