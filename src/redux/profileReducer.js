const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {

    newPostText: 'Hello, World!',

    profile: null,

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
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

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
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export default profileReducer;