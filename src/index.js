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


// Сверстать Users
// Main.jsx -> Route -> UsersContainer
// npm install axios --save
// Users -> useEffect()
// UsersContainer -> delete mapDispatchToProps & edit connect() & edit import from userReducer
// userReducer -> edit names of function-creators
// edit Route
// ProfileContainer -> useEffect()
// ProfileReducer -> profile, setUserProfile
// ProfileContainer -> profile, setUserProfile
// Main -> Preloader
// Profile.jsx -> profile.url
// ProfileContainer -> withRouter()
// MyPostsContainer ->  edit connect()

// dialog -> axios.get()
// DialogContainer ->  edit connect()
// dialogReducer -> setDialogUsers