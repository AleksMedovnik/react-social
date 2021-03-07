const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';

let initialState = {

    users: [],
    followingInProgress: false,
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

        case TOGGLE_IS_FOLLOWING:
            return ({ ...state, followingInProgress: action.followingInProgress })

        default:
            return state;
    }
};

export const follow = (useId, followed) => ({ type: FOLLOW, useId, followed });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const toggleInProgress = (followed) => ({ type: TOGGLE_IS_FOLLOWING, followingInProgress: followed });

export default usersReducer;