import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const renderEntireTree = state => { // отрисовка приложения
    ReactDOM.render(
      <BrowserRouter>
          <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
      </BrowserRouter>, document.getElementById('root')
      );
}

store.subscribe(renderEntireTree); // передаем функцию в store
renderEntireTree(store.getState());

reportWebVitals();


// homework: В файле MyPosts в <textarea> должно выводится значение из store._state.profilePage.newPostText