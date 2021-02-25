import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import ava from '../../../../images/ava.png';
import React from 'react';


const MyPosts = (props) => {

    const addMessage = () => {
        props.addPostActionCreator();
    }

    const newPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostTextActionCreator(text);
    }

    let postElements = props.postData.map(d => <Post post={d.post} key={d.id} id={d.id} />);
    return (
        <div>
            <form className={classes.postMessage}>
                <img src={ava} alt="Avatar" />
                <textarea onChange={newPostChange} value={props.newPostText} name="post" className='post__input' cols='50' rows='1' />
                <div onClick={addMessage} className='post__input'>Submit</div>
            </form>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;