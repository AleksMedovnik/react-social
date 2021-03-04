const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {

    users: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.useId) {
                        return {
                            ...u, followed: action.followed
                        }
                    }
                    return u;
                })
            }

            case SET_USERS:
                return ({ ...state, users: [...state.users, ...action.users] })

            default: 
            return state;
    }
};

export const follow = (useId, followed) => ({ type: FOLLOW, useId, followed });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;