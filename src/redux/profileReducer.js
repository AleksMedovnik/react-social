const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_POSTS_USERS = 'SET_POSTS_USERS';

let initialState = {

    newPostText: '',

    profile: null,

    postData: []
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            /*  let newPost = {
                 post: state.newPostText,
                 id: state.postData[0].id + 1
             };
             return {
                 ...state,
                 postData: [newPost, ...state.postData],
                 newPostText: ''
             }; */
             let stateCopy = {...state};
             let postDataCopy = [...state.postData];
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: state.newPostText,
                    body: state.newPostText,
                    userId: state.postData[state.postData.length - 1].userId + 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => postDataCopy.unshift(json))
                .then(() => stateCopy = { ...state, postData: [...postDataCopy], newPostText: '' });
                // .then((json) => ({ ...state, postData: [json, ...state.postData], newPostText: '' }));
                /* return {
                    ...state,
                    postData: [...postDataCopy],
                    newPostText: ''
                }; */
                console.log(stateCopy);
       


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
export const setPostsUsers = (postData) => {
    return {
        type: SET_POSTS_USERS,
        postData
    }
};

export default profileReducer;