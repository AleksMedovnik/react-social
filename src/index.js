import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const renderEntireTree = () => {
    ReactDOM.render(
      <BrowserRouter>
          <App store={store} />
      </BrowserRouter>, document.getElementById('root')
      );
}

renderEntireTree();
store.subscribe(renderEntireTree);

reportWebVitals();


// Прогнать store по props
// MyPosts -> MyPostsContainer.js
// Edit MyPosts.js

// homework: 