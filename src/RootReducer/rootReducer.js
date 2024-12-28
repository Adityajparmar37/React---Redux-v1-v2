import { combineReducers } from "redux";
import counterReducer from "../Reducers/counterReducer";
import userReducer from "../Reducers/userReducer";

const rootReducer = combineReducers({
  counterReducer,
  userReducer,
});

export default rootReducer;
