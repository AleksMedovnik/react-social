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


/* 
// 1. Замыкание
let x = 5;
function f1() { 
    console.log(x) 
};

function f2(){
	let x = 10;
	return f1();
}
f2(); // 5 - X взят из лексического окружения 


// 2. Замыкание. Сборка мусора
function f3() {
  let i = 0;
  return function() {
    return i++;
  };
}
let f4 = f3();
let f5 = f3();
console.log( f4() ); // 0
console.log( f4() ); // 1
console.log( f5() ); // ?
console.log( f5() ); // ?

Можем ли мы каким-нибудь образом сбросить счётчик i из кода, 
который не принадлежит f3? 


// 3. Callback
const f6 = (func) => { 
    for(let i=0;i<1000;i++); // любой код
    func();
}
const f7 = (a, b) => console.log(a + b);
f6(f7); // как в f7 передать аргументы?
f6(() => f7(5, 10)); // функция-обертка над callback


// 4. Привязка контекста
let o1 = {
    name: 'Alex',
    showName(){
        console.log(this.name);
    }
}
o1.showName(); // Alex
let o2 = o1;
o1 = null; // поэтому, this необходим!
o2.showName(); // Alex
let f8 = o2.showName;
'use strict'
f8(); // потеря контекста

f6(o2.showName); // Переприсваивание в локальную переменную func - потеря контекста
f6(() => o2.showName()); // Alex
f6(o2.showName.bind(o2)); // Alex


// 5. Привязка контекста и аргументов
const o3 = {
    code(a, b){
        console.log(a * b);
    }
}
f6(() => o3.code(5, 10)); // 50
f6(o3.code.bind(this, 5, 10)); // 50
f6(o3.code.bind(null, 5, 10)); // 50
*/