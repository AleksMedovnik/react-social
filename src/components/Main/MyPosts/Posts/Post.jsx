import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.post}>
            <img src="https://sun2-9.userapi.com/impf/c855028/v855028031/5ff79/ze8qvu_N3VM.jpg?size=200x0&quality=90&crop=100,0,1260,1260&sign=284f59b2db52f5608e4d429cc982572f&ava=1" alt="Avatar"/>
            <div className={classes.post__input}>Поделитесь своим настроением!</div>
        </div>
    )
}

export default Post;