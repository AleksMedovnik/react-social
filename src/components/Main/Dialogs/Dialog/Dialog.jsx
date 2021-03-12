import classes from './Dialog.module.css';

const Dialog = (props) => {

    const onSenMessageClick = () => {
        props.sendMessageCreator();
    };
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body);
    };

    return (
        <div className={classes.dialog}>
            <div>{props.dialogsElements}</div>
            <div>
                {props.messagesElements}
                <div className={classes.dialog__input}>
                    <textarea value={props.newMessageBody} onChange={onNewMessageChange}></textarea><br />
                    <button onClick={onSenMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )

}

export default Dialog; 