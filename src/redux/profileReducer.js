const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_POSTS_USERS = 'SET_POSTS_USERS';
const DELETE_POST = 'DELETE-POST';

let initialState = {

    newPostText: '',

    profile: null,

    postData: []
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            if (state.newPostText !== '') {
                return {
                    ...state,
                    postData: [...state.postData, action.post],
                    newPostText: ''
                };
            };
            return state;


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

        case SET_POSTS_USERS:
            return {
                ...state,
                postData: action.postData
            };

        case DELETE_POST:
                return {
                    ...state,
                    postData: state.postData.filter(post => post.id !== action.id),
                };

        default:
            return state;
    }
};


export const addPostActionCreator = (post) => {
    return {
        type: ADD_POST,
        post
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
export const setPostsUsers = (postData) => {
    return {
        type: SET_POSTS_USERS,
        postData
    }
};
export const deletePostAC = (id) => {
    return {
        type: DELETE_POST,
        id
    }
};
export default profileReducer;