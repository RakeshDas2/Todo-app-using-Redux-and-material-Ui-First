import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import dialogeReducer from "./reducers/dialogeReducer";

const allReducer=combineReducers({
    todoReducer,
    dialogeReducer
})
export const store=createStore(allReducer)