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


// Users.jsx -> replaced fetch with axios
// src -> api & api -> api.js
// api.js -> axios & edit Users.jsx
// api.js -> setFollowed
// Users.jsx -> delete unfollow()
// userReducer -> toggleInProgress, TOGGLE_IS_FOLLOWING
// UserContainer -> toggleInProgress, followingInProgress
// Users.jsx -> follow -> toggleInProgress & button -> followingInProgress



/* 		// Задание 1
		// В JavaScript есть метод массива reverse()
		let arr = [1, 2, 3, 4, 5].reverse();
		console.log(arr); // [5, 4, 3, 2, 1]

		// Написать функцию, аналогичную методу reverse()
		 	const reverse = (arr) => {
				// Ваш код
			}
			let arr_2 = reverse([1, 2, 3]);
			console.log(arr_2); 

		// решение
		const reverse = (arr) => {
			let arrCopy = [];
			for (let i of arr) {
				arrCopy.unshift(i);
			}
			return arrCopy;
		}
		let arr_2 = reverse([1, 2, 3]);
		console.log(arr_2);

		// Добавить метода массива аналогичный reverse()
		Array.prototype.rev = function () {
			let arr = [];
			for (let i of this) {
				arr.unshift(i);
			}
			return arr;
		}


		// Задание 2
		// Создать функцию flat, которая принимает массив с вложенными массивами и возвращает новый массив.
		// В результате мы должны получить один массив

		
		let fl = flat([1, 2, 3, [4, 5, [6, 7]]]); 
		console.log(fl); // [1, 2, 3, 4, 5, 6, 7] 

		 Подсказка!
		1. Нужно проверить, не является ли ли элемент массива массивом с помощью функции Array.isArray(i)
		2. Функция может содерджать еще одну функцию, которая будет рекурсивно запускаться в случае, если
		   элемент массива тоже является массивом 


		const flat = (arr) => {
			let arrCopy = [];
			const f = (arr) => {
				for (let i of arr) {
					Array.isArray(i) ? f(i) : arrCopy.push(i);
				}
				return arrCopy;
			}
			f(arr);
			return arrCopy;
		} */