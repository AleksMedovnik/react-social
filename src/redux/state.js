const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


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
    switch (action.type) {

      case ADD_POST:
        let newPost = {
          post: this._state.profilePage.newPostText,
          id: this._state.profilePage.postData[0].id + 1
        };
        this._state.profilePage.postData.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;

      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newPostText;
        this._callSubscriber(this._state);
        break;

      case UPDATE_NEW_MESSAGE_BODY:
        this._state.messagesPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
        break;

      case SEND_MESSAGE:
        let newMessage = { 
          message: this._state.messagesPage.newMessageBody, 
          id: this._state.messagesPage.messages[0].id + 1
        };
        this._state.messagesPage.messages.unshift(newMessage);
        this._state.messagesPage.newMessageBody = '';
        this._callSubscriber(this._state);
        break;

    }
  }
};




export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
  }
};
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
};

export default store;
window.store = store;