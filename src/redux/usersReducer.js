const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {

    users: [
        { fullName: 'Хорошего вечера!', id: 1, location: { city: 'Beijing', country: 'China' }, followed: true },
        { fullName: 'Хорошего вечера!', id: 2, location: { city: 'Tokyo', country: 'Japan' }, followed: true },
        { fullName: 'Хорошего вечера!', id: 3, location: { city: 'Geneva', country: 'Switzerland' }, followed: true },
        { fullName: 'Хорошего вечера!', id: 4, location: { city: 'Stockholm', country: 'Sweden' }, followed: true },
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.useId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })
            }

            case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.useId) {
                        return {
                            ...u, followed: false
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

export const followAC = (useId) => ({ type: FOLLOW, useId });
export const unfollowAC = (useId) => ({ type: UNFOLLOW, useId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;