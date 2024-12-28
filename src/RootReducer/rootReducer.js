import { combineReducers } from "redux";
import counterReducer from "../Reducers/counterReducer";
import userReducer from "../Reducers/userReducer";
import productsReducer from "../Reducers/productsReducer";

const rootReducer = combineReducers({
  counterReducer,
  userReducer,
  productsReducer,
});

export default rootReducer;
