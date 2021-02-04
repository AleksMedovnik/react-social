import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import storeContext from "../../../../storeContext";

const MyPostsContainer = () => {


    return (
        <storeContext.Consumer>
            {
            (store) => {
                const state = store.getState();
                let addMessage = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                }

                const newPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    <MyPosts postData={state.profilePage.postData} updateNewPostText={newPostChange} addPost={addMessage} newPostText={state.profilePage.newPostText} />
                )

            }
        }

        </storeContext.Consumer>
    )
}

export default MyPostsContainer;