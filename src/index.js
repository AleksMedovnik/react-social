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


// В функциях ProfileReducer & DialogReducer удалить переменную stateCopy 

// index - delete renderEntireTree()
// redux -> usersReduser
// reduxStore -> usersReduser
// Main -> Users; NavBar -> users
// Users -> UsersContainer

/* homework: Сверстать Users. Страница должна выводить имя пользователя, email, адрес, телефон и компанию, в которой он работает */