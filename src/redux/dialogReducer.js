const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    newMessageBody: 'Hello my friend!',

    dialogData: [
        { name: 'Alex', id: 8 },
        { name: 'Nataly', id: 7 },
        { name: 'Vasya', id: 6 },
        { name: 'Marie', id: 5 },
        { name: 'Lola', id: 4 },
        { name: 'Nelli', id: 3 },
        { name: 'Lora', id: 2 },
        { name: 'Bogdan', id: 1 }
    ],

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
            let newMessage = {
                message: state.newMessageBody,
                id: state.messages[0].id + 1
            };
            return {
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, newMessage]
            };
             

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

export default dialogReducer;