const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogReducer = (state, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;

        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageBody,
                id: state.messages[0].id + 1
            };
            state.messages.unshift(newMessage);
            state.newMessageBody = '';
            break;
    }
    return state;
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