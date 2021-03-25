import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'; 
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage: usersReducer,
    authLogin: authReducer,
    form: formReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;