import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const renderEntireTree = state => {
    ReactDOM.render(
      <BrowserRouter>
          <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>, document.getElementById('root')
      );
}

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});



reportWebVitals();


/* Внести изменения в файлы profileReducer, dialogReducer. В конструкциях switch удалить
 break, а вместо этого использовать return. Код должен работать корректно! */

 // npm install redux --save
 // redux -> reduxStore.js
 // index.js -> import store from './redux/reduxStore';
 // index.js -> edit store.subscribe()

/*  homework: В блоке Main создать страницу News. Страница должна получать данные из Redux аналогично 
 Profile и Messages */