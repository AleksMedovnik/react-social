import classes from './Dialog.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';
import * as axios from 'axios';
import React, { useEffect } from 'react';

const Dialog = (props) => {

    useEffect(() => {
        if (props.dialogData.length == 0) {
            axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(response => {
                    props.setDialogUsers(response.data);
                })
        }

    }, []);

    let dialogsElements = props.dialogData.map(dialog => <DialogItems name={dialog.username} key={dialog.id} id={dialog.id} />);
    let messagesElements = props.messages.map(objMessage => <Messages message={objMessage.message} key={objMessage.id} id={objMessage.id} />);


    const onSenMessageClick = () => {
        props.senMessageClick();
    };
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.newMessageChange(body);
    };

    return (
        <div className={classes.dialog}>
            <div>{dialogsElements}</div>
            <div>
                {messagesElements}
                <div className={classes.dialog__input}>
                    <textarea value={props.newMessageBody} onChange={onNewMessageChange}></textarea><br />
                    <button onClick={onSenMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )

}

export default Dialog; 