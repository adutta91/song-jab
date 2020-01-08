import { combineReducers } from "redux";

//reducers
import dataReducer from "./data-reducer";
import viewReducer from "./view-reducer";

export default combineReducers({
  dataReducer,
  viewReducer
});
