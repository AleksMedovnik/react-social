import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator, setDialogUsers } from '../../../../redux/dialogReducer';
import Dialog from './Dialog';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';
import * as axios from 'axios';
import React, { useEffect } from 'react';
import { withAuthRedirect } from '../../../../HOC/withAuthRedirect';
import { compose } from 'redux';

const DialogContainer = (props) => {
    useEffect(() => {
        if (props.dialogData.length == 0) {

            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    props.setDialogUsers(response.data);
                })
        }

    }, []);

    

    let dialogsElements = props.dialogData.map(dialog => <DialogItems name={dialog.username} key={dialog.id} id={dialog.id} />);
    let messagesElements = props.messages.map(objMessage => <Messages message={objMessage.message} key={objMessage.id} id={objMessage.id} />);

    return (
        <Dialog {...props} dialogsElements={dialogsElements} messagesElements={messagesElements} isAuth={props.isAuth} />
    )
}


const mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        newMessageBody: state.messagesPage.newMessageBody,
        messages: state.messagesPage.messages,
    }
}

export default compose(connect(mapStateToProps, {
    sendMessageCreator,
    updateNewMessageBodyCreator,
    setDialogUsers
}), withAuthRedirect)(DialogContainer);