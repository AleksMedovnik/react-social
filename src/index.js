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

// MyPosts -> delete Ref() && added e.target.value
// redux -> profileReducer, dialogReducer 
// state -> edit dispatch(action)
// store -> functions-Creators -> profileReducer, dialogReducer  (перенести константы из state)
// MyPosts && Dialog: edit imports

/* homework: Внести изменения в файлы profileReducer, dialogReducer. В конструкциях switch удалить
 break, а вместо этого использовать return. Код должен работать корректно! */