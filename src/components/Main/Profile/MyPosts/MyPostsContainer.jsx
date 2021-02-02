import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';

const MyPostsContainer = (props) => {


    let addMessage = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    const newPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <MyPosts postData={props.postData} updateNewPostText={newPostChange} addPost={addMessage} />
    )
}

export default MyPostsContainer;