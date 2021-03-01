import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import React, { useEffect } from 'react';


const MyPosts = (props) => {
    useEffect(() => {
        if (props.postData.length == 0) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then(json => {
                    props.setPostsUsers(json);
                })
        }
    }, []);

    const addMessage = () => {
        props.addPostActionCreator();
    }


    const newPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostTextActionCreator(text);
    }



    let postElements = props.postData.map(d => <Post post={d.post} title={d.title} body={d.body} key={d.id} id={d.id} />);
    return (
        <div>
            <form className={classes.postMessage}>
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