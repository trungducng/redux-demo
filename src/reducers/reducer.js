import * as redux from "redux";
import statusReducer from "./statusReducer.js";
import mangReducer from "./mangReducer.js";

export const rootReducer = redux.combineReducers({
  mang: mangReducer,
  status: statusReducer,
});
