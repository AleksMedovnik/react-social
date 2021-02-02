import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';

const MyPostsContainer = (props) => {
    const state = props.store.getState();

    let addMessage = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    const newPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts postData={state.profilePage.postData} updateNewPostText={newPostChange} addPost={addMessage} newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer;