const SET_ISAUTH = 'SET-AUTH';

let initialState = {
    isAuth: 0
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ISAUTH:
            return { ...state, isAuth: action.isAuth }
    }
    return state;
};

export const setIsAuth = isAuth => ({ type: SET_ISAUTH, isAuth })
export default authReducer;