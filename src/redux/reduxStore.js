import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'; 

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;