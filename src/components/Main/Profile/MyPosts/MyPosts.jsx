import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import ava from '../../../../images/ava.png';
import * as axios from 'axios';
import React, { useEffect } from 'react';


const MyPosts = (props) => {
    useEffect(() => {
        if (props.postData.length == 0) {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    props.setPostsUsers(response.data);
                })
        }

    }, []);

    const addPost = () => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                
            })
    }

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
                {/* <img src={ava} alt="Avatar" /> */}
                <textarea onChange={newPostChange} value={props.newPostText} name="post" className='post__input' cols='50' rows='1' />
                <div onClick={addPost} className='post__input'>Submit</div>
            </form>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;