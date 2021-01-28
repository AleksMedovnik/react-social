const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

      dialogData: [
        { name: 'Alex', id: 1 },
        { name: 'Nataly', id: 2 },
        { name: 'Vasya', id: 3 },
        { name: 'Marie', id: 4 },
        { name: 'Lola', id: 5 },
        { name: 'Nelli', id: 6 },
        { name: 'Lora', id: 7 },
        { name: 'Bogdan', id: 8 }
      ],
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

export default store;
window.store = store;