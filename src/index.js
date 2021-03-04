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


// ProfileReducer -> stateCopy
// DialogReducer -> stateCopy

// homework: В функциях ProfileReducer & DialogReducer удалить переменную stateCopy и сократить код. Функции должны работать корректно

/* 
1. Копирование объекта
		const o1 = {
			a: 10,
			b: [1, 2, 3,],
		}
		// const o2 = o1;
		// o2.b = null;
		// console.log(o1.b); // null

		const o2 = { ...o1 };
		// o1.b = null;
		// console.log(o2.b); // [1, 2, 3,]

		o1.b[0] = 5;
		console.log(o2.b); // [5, 2, 3,]
		o1.b[0] = 1;
		console.log(o1.b); // [1, 2, 3,]

		const o3 = {...o1, b: [...o1.b]}
		o1.b[0] = 5;
		console.log(o1.b); // [5, 2, 3,]
		console.log(o3.b); // [1, 2, 3,]
*/