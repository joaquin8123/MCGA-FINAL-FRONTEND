import {
    SET_LOADINGS,
    SET_PRODUCTS,
    DISMISS_LOADING,
    GET_PRODUCTS_ERROR,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCT_DELETE,
    GET_PRODUCT_EDIT
} from './types'

const INITIAL_STATE = {
    products: [],
    error: null,
    loading: false,
    message: null,
    productEdit: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
        return {
            ...state,
            products: action.payload,
            error: null,
        };
        case SET_LOADINGS:
        return {
            ...state,
            loading: action.payload,
            error: null,
        };
        case DISMISS_LOADING:
        return {
            ...state,
            loading: action.payload,
            error: null,
        };
        case GET_PRODUCTS_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload
        };
        case DELETE_PRODUCT_SUCCESS:
        return {
            ...state,
            products: state.products.filter( (product) => product._id !== action.payload ),
            error: false,
            loading: false,
        };
        case GET_PRODUCT_DELETE:
        return {
            ...state,
            loading: true
        };
        case GET_PRODUCT_EDIT:
        return {
            ...state,
            productEdit: action.payload
        };
        
        
        default:
        return state;
    }
};

export default reducer;
