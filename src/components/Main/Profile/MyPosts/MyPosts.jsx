import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import ava from '../../../../images/ava.png';
import React from 'react';


const MyPosts = (props) => {

    let newPost = React.createRef();
    
    let addMessage = () => {
        props.addPost();
    }

    const newPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }


    let postElements = props.postData.map(recording => <Post post={recording.post} id={recording.id} />);
    return (
        <div>
            <form className={classes.postMessage}>
                <img src={ava} alt="Avatar" />
                <textarea ref={newPost}  onChange={newPostChange}  name="post" className='post__input' cols='50' rows='1' />
                <div onClick={addMessage} className='post__input'>Submit</div>
            </form>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;