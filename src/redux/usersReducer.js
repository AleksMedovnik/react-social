import { getUsers, followAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';

let initialState = {

    users: [],
    followingInProgress: [],
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
            return {
                ...state,
                followingInProgress: action.followed ? [action.id, ...state.followingInProgress] :
                    state.followingInProgress.filter(id => id !== action.id)
            };

        default:
            return state;
    }
};

const follow = (useId, followed) => ({ type: FOLLOW, useId, followed });
const setUsers = (users) => ({ type: SET_USERS, users });
const toggleInProgress = (id, followed) => ({ type: TOGGLE_IS_FOLLOWING, id, followed });

export const getUsersThunk = () => {
    return (dispatch) => {
        getUsers().then(data => dispatch(setUsers(data)));
    }
};
export const followThunk = (id, followed) => {
    return (dispatch) => {
        dispatch(toggleInProgress(id, true));
        followAPI(id, followed)
            .then((user) => dispatch(follow(user.userId, user.followed)))
            .then(() => dispatch(toggleInProgress(id, false)));
    }
};

export default usersReducer;