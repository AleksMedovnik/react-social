import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";



const store = {

  _state: {

    profilePage: {

      newPostText: '',

      postData: [
        { post: 'Хорошего вечера!', id: 12 },
        { post: 'Всем привет!)', id: 11 },
        { post: 'Салют!', id: 10 },
        { post: 'Здорово!', id: 9 },
        { post: 'Hello!', id: 8 },
        { post: 'Всем привет!)', id: 7 },
        { post: 'Салют!', id: 6 },
        { post: 'Hello!', id: 5 },
        { post: 'Хорошего вечера!', id: 4 },
        { post: 'Всем привет!)', id: 3 },
        { post: 'Салют!', id: 2 },
        { post: 'Hello!', id: 1 },

      ]
    },
    messagesPage: {

      newMessageBody: '',

      dialogData: [
        { name: 'Alex', id: 8 },
        { name: 'Nataly', id: 7 },
        { name: 'Vasya', id: 6 },
        { name: 'Marie', id: 5 },
        { name: 'Lola', id: 4 },
        { name: 'Nelli', id: 3 },
        { name: 'Lora', id: 2 },
        { name: 'Bogdan', id: 1 }
      ],

      messages: [
        { message: 'Hello, Alex!', id: 10 },
        { message: 'By, Alex!', id: 9 },
        { message: 'Hello, Alex!', id: 8 },
        { message: 'Хорошего вечера!', id: 7 },
        { message: 'Доброй ночи!', id: 6 },
        { message: 'Hello, Alex!', id: 5 },
        { message: 'Привет!', id: 4 },
        { message: 'Пока!', id: 3 },
        { message: 'Доброе утро!', id: 2 },
        { message: 'Hello, Alex!', id: 1 },
      ]
    },

  },

  _callSubscriber() {
    console.log('');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state);

  }
};


// export default store;
// window.store = store;