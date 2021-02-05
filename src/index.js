import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree();
store.subscribe(renderEntireTree);

reportWebVitals();


// npm install react-redux --save
// delete storeContext
// index.js -> Provider
// MyPostsContainer -> connect 
// (Перерисовки приложения не будет, но добавляться данные будут. Проверить можно: вывести в консоль store.getState())

// homework: В файл DialogContainer заменить StoreContext.Consumer на connect аналогично MyPostsContainer