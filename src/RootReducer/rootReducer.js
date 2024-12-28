import { combineReducers } from "redux";
import counterReducer from "../Reducers/counterReducer";

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
