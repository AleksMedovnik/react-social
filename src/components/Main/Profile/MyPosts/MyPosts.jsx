import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import ava from '../../../../images/ava.png';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/state';



const MyPosts = (props) => {


    let newPost = React.createRef();

    let addMessage = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    const newPostChange = () => {
        let text = newPost.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    let postElements = props.postData.map(recording => <Post post={recording.post} id={recording.id} />);
    return (
        <div>
            <form className={classes.postMessage}>
                <img src={ava} alt="Avatar" />
                <textarea ref={newPost} onChange={newPostChange} value={props.newPostText} name="post" className='post__input' cols='50' rows='1' />
                <div onClick={addMessage} className='post__input'>Submit</div>
            </form>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;