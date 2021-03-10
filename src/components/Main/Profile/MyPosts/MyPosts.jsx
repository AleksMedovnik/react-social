import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import React, { useEffect } from 'react';


const MyPosts = (props) => {

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
        <div>
            <div className={classes.postMessage}>
                <textarea onChange={newPostChange} value={props.newPostText} name="post" className={`post__input ${classes.postInput}`} cols='50' rows='1' />
                <button onClick={() => addPost(props.postData[props.postData.length - 1].id + 1, props.newPostText)} className='post__input'>Submit</button>
            </div>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;