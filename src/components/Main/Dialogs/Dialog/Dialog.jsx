import classes from './Dialog.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';

const Dialog = (props) => {
    let dialogsElements = props.dialogData.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messages.map(objMessage => <Messages message={objMessage.message} id={objMessage.id} />);


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