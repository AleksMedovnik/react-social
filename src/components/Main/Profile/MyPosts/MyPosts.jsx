import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import React, { useEffect } from 'react';
import * as axios from 'axios';


const MyPosts = (props) => {
    
    useEffect(() => {
        if (props.postData.length == 0) {
            /* fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then(json => {
                    props.setPostsUsers(json);
                }) */


            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    props.setPostsUsers(response.data);
                })


        }
    }, []);

    /*     function addPost() {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: props.newPostText,
                    body: props.newPostText,
                    userId: props.postData[props.postData.length - 1].userId + 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => props.addPostActionCreator(json));
        } */
    /*     async function addPost() {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: props.newPostText,
                    body: props.newPostText,
                    userId: props.postData[props.postData.length - 1].userId + 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            let json = await response.json();
            props.addPostActionCreator(json);
        } */

    const addPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
                title: props.newPostText,
                body: props.newPostText,
                userId: props.postData[props.postData.length - 1].userId + 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => JSON.parse(response.data.body))
            .then((post) => props.addPostActionCreator(post));
    }




    const newPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostTextActionCreator(text);
    }



    let postElements = props.postData.map(d => <Post post={d.post} body={d.body} key={d.id} id={d.id} />);
    return (
        <div>
            <form className={classes.postMessage}>
                <textarea onChange={newPostChange} value={props.newPostText} name="post" className={`post__input ${classes.postInput}`} cols='50' rows='1' />
                <div onClick={addPost} className='post__input'>Submit</div>
            </form>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;