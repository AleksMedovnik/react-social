import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator, setDialogUsers } from '../../../../redux/dialogReducer';
import Dialog from './Dialog';



const mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        newMessageBody: state.messagesPage.newMessageBody,
        messages: state.messagesPage.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        senMessageClick() {
            dispatch(sendMessageCreator())
        },
        newMessageChange(body) {
            dispatch(updateNewMessageBodyCreator(body))
        },
        setDialogUsers
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer; 