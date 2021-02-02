const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    newPostText: 'Hello, World!',

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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                post: state.newPostText,
                id: state.postData[0].id + 1
            };
            state.postData.unshift(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;

        default:
            return state;
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

export default profileReducer;