const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SET_DIALOG_USERS = 'SET-DIALOG-USERS';

let initialState = {
    newMessageBody: 'Hello my friend!',

    dialogData: [],

    messages: [
        { message: 'Hello, Alex!', id: 10 },
        { message: 'By, Alex!', id: 9 },
        { message: 'Hello, Alex!', id: 8 },
        { message: 'Хорошего вечера!', id: 7 },
        { message: 'Доброй ночи!', id: 6 },
        { message: 'Hello, Alex!', id: 5 },
        { message: 'Привет!', id: 4 },
        { message: 'Пока!', id: 3 },
        { message: 'Доброе утро!', id: 2 },
        { message: 'Hello, Alex!', id: 1 },
    ]
};


const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            if (state.newMessageBody !== '') {
                let newMessage = {
                    message: state.newMessageBody,
                    id: state.messages[0].id + 1
                };
                return {
                    ...state,
                    newMessageBody: '',
                    messages: [...state.messages, newMessage]
                };
            }
            return state;


        case SET_DIALOG_USERS:
            return { ...state, dialogData: [...state.dialogData, ...action.dialogData] };

        default:
            return state;
    }
};


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};
export const setDialogUsers = (dialogData) => ({ type: SET_DIALOG_USERS, dialogData });

export default dialogReducer;