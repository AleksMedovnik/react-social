import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div>
            <div className={classes.postMessage}>
                <textarea onChange={props.newPostChange} value={props.newPostText} name="post" className={`post__input ${classes.postInput}`} cols='50' rows='1' />
                <button onClick={() => props.addPost(props.postData[props.postData.length - 1].id + 1, props.newPostText)} className='post__input'>Submit</button>
            </div>

            <div>
                {props.postElements}
            </div>
        </div>
    )
}

export default MyPosts;