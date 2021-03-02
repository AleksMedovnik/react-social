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


// MyPosts -> fetch()
// MyPosts -> edit addPost & fetch() add async-await
// MyPosts -> edit addPost -> async-await
// MyPosts -> edit addPost -> axios