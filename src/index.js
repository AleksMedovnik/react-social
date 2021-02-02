import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
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

store.subscribe(renderEntireTree);
renderEntireTree(store.getState());


reportWebVitals();

// MyPosts -> textarea.value = newPostText

// state -> dispatch(action)
// Передаем по props в MyPosts
// Вызываем dispatch(action) в MyPosts

// homework: В файле state.js заменить конструкцию if конструкцией switch 