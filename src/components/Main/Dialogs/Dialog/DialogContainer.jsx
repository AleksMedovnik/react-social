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

const DialogContainer = connect(mapStateToProps, {
    sendMessageCreator,
    updateNewMessageBodyCreator,
    setDialogUsers
})(Dialog);

export default DialogContainer; 