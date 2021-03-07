import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

reportWebVitals();


// Users.jsx -> replaced fetch with axios
// src -> api & api -> api.js
// api.js -> axios & edit Users.jsx
// api.js -> setFollowed
// Users.jsx -> delete unfollow()
// userReducer -> toggleInProgress, TOGGLE_IS_FOLLOWING
// UserContainer -> toggleInProgress, followingInProgress
// Users.jsx -> follow -> toggleInProgress & button -> followingInProgress