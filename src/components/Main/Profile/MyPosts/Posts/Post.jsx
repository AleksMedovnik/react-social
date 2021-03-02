import classes from './Post.module.css';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
    return (
        <NavLink to={`/profile/${props.id}`} className={classes.post}>
            <div className={classes.postBody}>{props.body}</div>
        </NavLink>
    )
}

export default Post;