import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  MODULE_NAME as componentsModuleName,
  reducer as componentsReducer,
} from "./componentsReducer";

const rootReducer = combineReducers({
  [componentsModuleName]: componentsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
