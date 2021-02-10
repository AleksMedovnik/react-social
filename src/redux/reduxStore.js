import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(redusers);
window.store = store;
export default store;