import MyPosts from "./MyPosts";
import { addPostsUsers, updateNewPostTextActionCreator, deletePostsUsers, getPostsUsers } from '../../../../redux/profileReducer';
import { connect } from "react-redux";
import React, { useEffect } from 'react';
import Post from './Posts/Post';

const MyPostsContainer = (props) => {

    useEffect(() => {
        if (props.postData.length == 0) {
            props.getPostsUsers();
        }
    }, []);

    const addPost = (id, newPostText) => {
        props.addPostsUsers(id, newPostText);
    }


    const deletePost = (id) => {
        props.deletePostsUsers(id);
    }

    const newPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostTextActionCreator(text);
    }

    let postElements = props.postData.map(d => <Post deletePost={() => deletePost(d.id)} body={d.body} key={d.id} id={d.id} />).reverse();

    return (
        <MyPosts 
        postElements={postElements} 
        newPostText={props.newPostText} 
        postData={props.postData} 
        newPostChange={newPostChange} 
        addPost={addPost} />
    )
}


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

export default  connect(mapStateToProps, {
    updateNewPostTextActionCreator,
    deletePostsUsers,
    getPostsUsers,
    addPostsUsers
})(MyPostsContainer);