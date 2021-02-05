import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText(text) {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost() {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;