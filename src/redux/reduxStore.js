import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer
});

let store = createStore(redusers);
window.store = store;
export default store;