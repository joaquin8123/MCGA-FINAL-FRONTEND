import { 
  SET_PRODUCTS,
  SET_LOADINGS,
  DISMISS_LOADING,
  PRODUCT_DELETE_ERROR,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_DELETE,
  GET_PRODUCT_EDIT
} from "./types";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setLoadingProducts  = () => {
  return {
    type: SET_LOADINGS,
    payload: true,
  };
};

export const dismissLoadingProducts  = () => {
  return {  
    type: DISMISS_LOADING,
    payload: false,
  };
};

export const deleteProductError = () => {
  return {
    type: PRODUCT_DELETE_ERROR,
    payload: true
  }
};

export const getProductsError = () => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: true
  }
};

export const deleteProductSuccess = (id) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
  }
};

export const getProductDelete = () => {
  return {
    type: GET_PRODUCT_DELETE,
  }
};

export const getProductEdit = (product) => {
  return {
    type: GET_PRODUCT_EDIT,
    payload: product
  }
};

