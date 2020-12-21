import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import ava from '../../../../images/ava.png';
import React from 'react';
import { NavLink } from 'react-router-dom';


const MyPosts = (props) => {
    let newPost = React.createRef();
    let addMessage = () => {
        let text = newPost.current.value;
        props.addPost(text);
        newPost.current.value = '';
    }

    let postElements = props.postData.map(recording => <Post post={recording.post} id={recording.id} />);
    return (
        <div>
            <form className={classes.postMessage}>
                <img src={ava} alt="Avatar" />
                <input ref={newPost} name="post" className='post__input' size='45' />
                <div onClick={addMessage} className='post__input'>Submit</div>
            </form>
          
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;