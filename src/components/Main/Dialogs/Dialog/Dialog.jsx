import classes from './Dialog.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';

const Dialog = (props) => {
    let dialogsElements = props.messagesPage.dialogData.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messagesPage.messages.map(objMessage => <Messages message={objMessage.message} id={objMessage.id} />);
    let newMessageBody = props.messagesPage.newMessageBody;

    const onSenMessageClick = () => alert('Hello!');
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        // props.dispatch
    }

    return (
        <div className={classes.dialog}>
            <div>{dialogsElements}</div>
            <div>
                {messagesElements}
                <div className={classes.dialog__input}>
                    <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Your message'></textarea><br/>
                    <button onClick={onSenMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )

}

export default Dialog; 