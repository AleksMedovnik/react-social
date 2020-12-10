import classes from './Post.module.css';
import ava from '../../../../../images/ava.png';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={ava} alt="Avatar" />
            <div className='post__input'>{props.message}</div>
        </div>
    )
}

export default Post;