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


// MyPosts -> fetch()
// MyPosts -> edit addPost & fetch() + promise
// MyPosts -> edit addPost -> async-await
// MyPosts -> edit addPost -> axios


/*
1. Асинхронная функция. Promise. Async-await

        const f1 = () => {
            setTimeout(() => console.log('Step'), 5000);
            console.log('Ready!');
        }
        f1();

        
        const f2 = () => { 
            for(let i=0;i<10000000000;i++); // 10 миллиардов
            console.log('Ready!');
        }
        f2(); 


        const f3 = () => {
			let i = 0;
            setTimeout(() => i = 1000, 0);
            console.log(i); // нам нужен i обновленный!
        }
        f3(); // 0 - а получаем старый!


        используем промис:

        const f3 = () => {
			return new Promise((resolve, reject) => {
				let i = 0;
				let response = setTimeout(() => {
					i++;
					resolve(i);
				}, 0);

			})
		};
		let promise = f3();
		promise.then((i) => console.log(i));


        используем Async-await:

        async function f3(){
			let promise = new Promise((resolve, reject) => {
				let i = 0;
				setTimeout(() => {
					i++; // получаем данные с сервера...
					resolve(i);
				}, 0);
			});
			let result = await promise; // будет ждать, пока промис не выполнится
			console.log(result);
			return result;
		};
		f3();


2. JSON
        let o1 = {
			name: 'Vasya',
			age: 20
		}
		
		let o2 = JSON.stringify(o1);
		console.log(o2);

		let o3 = JSON.parse(o2);
		console.log(o3);        

3. AJAX

		function f4() {
			let response = fetch('https://jsonplaceholder.typicode.com/users');
			console.log(response); 
		}
		f4(); // Promise


		function f5() {
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => console.log(users));
		}
		f5();


        async function f6() {
			let response = await fetch('https://jsonplaceholder.typicode.com/users');
			let users = await response.json();
			console.log(users);
		}
		f6();
*/
// video acync
// https://www.youtube.com/watch?v=8cV4ZvHXQL4&feature=emb_logo