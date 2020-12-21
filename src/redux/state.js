import renderEntireTree from '../render'

const state = {

  profilePage: {

    postData: [
      { post: 'Хорошего вечера!', id: 1 },
      { post: 'Всем привет!)', id: 2 },
      { post: 'Салют!', id: 3 },
      { post: 'Здорово!', id: 4 },
      { post: 'Hello!', id: 5 },
      { post: 'Всем привет!)', id: 6 },
      { post: 'Салют!', id: 7 },
      { post: 'Hello!', id: 8 },
      { post: 'Хорошего вечера!', id: 9 },
      { post: 'Всем привет!)', id: 10 },
      { post: 'Салют!', id: 11 },
      { post: 'Hello!', id: 12 },

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

};

let addPost = postMessage => {
  let newPost = {
    post: postMessage,
    id: 9
  }
  state.profilePage.postData.unshift(newPost);
  renderEntireTree(state);
};

export default state;
export { addPost }