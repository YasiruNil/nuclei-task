import { combineReducers } from "redux";
import { stepsReducer as steps } from "./Steps";

const rootReducer = combineReducers({
  steps,
});

export default rootReducer;
