import { combineReducers } from "redux";

import { branchesReducer } from "./branchesReducer";

export default combineReducers({
  vehicle: branchesReducer,
});