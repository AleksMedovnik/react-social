import classes from './Dialog.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../../redux/dialogReducer';

const Dialog = (props) => {
    const state = props.store.getState();
    let dialogsElements = state.messagesPage.dialogData.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messagesPage.messages.map(objMessage => <Messages message={objMessage.message} id={objMessage.id} />);
    let newMessageBody = state.messagesPage.newMessageBody;

    const onSenMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={classes.dialog}>
            <div>{dialogsElements}</div>
            <div>
                {messagesElements}
                <div className={classes.dialog__input}>
                    <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea><br/>
                    <button onClick={onSenMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )

}

export default Dialog; 