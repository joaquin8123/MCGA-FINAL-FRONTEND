import { combineReducers } from "redux";

import productsReducer from "./Products/reducer.js";
import authReducer from "./Auth/reducer.js";

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
});

export default rootReducer;