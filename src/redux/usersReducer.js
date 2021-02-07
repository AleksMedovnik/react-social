const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    users: [
        { fullName: 'Хорошего вечера!', id: 1, location: {city: 'Beijing', country: 'China'}, followed: true  },
        { fullName: 'Хорошего вечера!', id: 2, location: {city: 'Tokyo', country: 'Japan'}, followed: true  },
        { fullName: 'Хорошего вечера!', id: 3, location: {city: 'Geneva', country: 'Switzerland'}, followed: true  },
        { fullName: 'Хорошего вечера!', id: 4, location: {city: 'Stockholm', country: 'Sweden'}, followed: true  },
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
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

export default usersReducer;