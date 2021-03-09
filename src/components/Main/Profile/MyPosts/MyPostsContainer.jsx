import MyPosts from "./MyPosts";
import { addPostsUsers, updateNewPostTextActionCreator, deletePostsUsers, getPostsUsers } from '../../../../redux/profileReducer';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostTextActionCreator,
    deletePostsUsers,
    getPostsUsers,
    addPostsUsers
})(MyPosts);
export default MyPostsContainer;