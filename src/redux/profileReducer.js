const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                post: state.newPostText,
                id: state.postData[0].id + 1
            };
            state.postData.unshift(newPost);
            state.newPostText = '';
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            break;
    }
    return state;
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