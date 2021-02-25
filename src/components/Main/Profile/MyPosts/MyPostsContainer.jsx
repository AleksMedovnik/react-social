import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostTextActionCreator,
    addPostActionCreator
})(MyPosts);
export default MyPostsContainer;