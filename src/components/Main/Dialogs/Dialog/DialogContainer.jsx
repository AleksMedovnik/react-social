import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../redux/dialogReducer';
import storeContext from '../../../../storeContext';
import Dialog from './Dialog';

const Dialogcontainer = () => {


    return (
        <storeContext.Consumer>
            {
            (store) => {
                const state = store.getState();

                let newMessageBody = state.messagesPage.newMessageBody;

                const onSenMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
                const onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };
                return (
                    <Dialog senMessageClick={onSenMessageClick} newMessageChange={onNewMessageChange} newMessageBody={newMessageBody} dialogData={state.messagesPage.dialogData} messages={state.messagesPage.messages} />
                )
            }
        }
        </storeContext.Consumer>

    )

}

export default Dialogcontainer; 