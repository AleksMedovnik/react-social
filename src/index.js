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

// api -> getUserProfile
// profileReducer -> setProfile
// ProfileContainer -> setProfile

// MyPostsContainer & DialogContainer & UsersContainer -> compose
// Profile -> ProfileStatus
// profileReducer -> status & updateStatus
// ProfileContainer -> status & updateStatus