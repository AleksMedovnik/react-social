import classes from './Post.module.css';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
    return (
        <NavLink to={`/profile/${props.id}`} className={`post__input ${classes.post}`}>
            <div >{props.title}</div>
            <div >{props.body}</div>
        </NavLink>
    )
}

export default Post;