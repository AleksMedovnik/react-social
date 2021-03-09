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


// npm install redux-thunk
// reduxStore -> applyMiddleware
// usersRedusers -> getUsersThunk & followThunk (import)
// UsersContainer -> getUsersThunk & followThunk
// Users.jsx -> getUsersThunk & followThunk
// UsersContainer -> delete follow & setUsers & toggleInProgress
// api.js -> getPosts
// profiReducer -> getPostsUsers
// MyPostsContainer -> add getPostsUsers & delete setPostsUsers
// MyPosts -> getPostsUsers 
// api.js -> addPosts & deletePost
// profiReducer -> addPostsUsers & deletePostsUsers
// MyPostsContainer -> addPostsUsers & deletePostsUsers && delete Creators
// MyPosts -> addPostsUsers & deletePost