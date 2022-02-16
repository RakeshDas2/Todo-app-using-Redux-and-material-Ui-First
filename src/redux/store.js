import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import dialogeReducer from "./reducers/dialogeReducer";
import indexReducer from "./reducers/indexReducer";
import objectReducer from './reducers/objectReducer'
const allReducer=combineReducers({
    todoReducer,
    dialogeReducer,
    indexReducer,
    objectReducer
})
export const store=createStore(allReducer)