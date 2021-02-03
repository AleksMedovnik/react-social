import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../redux/dialogReducer';
import Dialog from './Dialog';

const Dialogcontainer = (props) => {
    const state = props.store.getState();

    let newMessageBody = state.messagesPage.newMessageBody;

    const onSenMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Dialog senMessageClick={onSenMessageClick} newMessageChange={onNewMessageChange} newMessageBody={newMessageBody} dialogData={state.messagesPage.dialogData} messages={state.messagesPage.messages} />
    )

}

export default Dialogcontainer; 