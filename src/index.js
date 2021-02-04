import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import storeContext from './storeContext';


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <storeContext.Provider value={store}>
                <App />
            </storeContext.Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree();
store.subscribe(renderEntireTree);

reportWebVitals();


// Create DialogContainer
// Create storeContext
// Edit index.js, 