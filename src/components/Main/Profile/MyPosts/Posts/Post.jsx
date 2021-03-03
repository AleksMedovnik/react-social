import classes from './Post.module.css';
import { NavLink } from 'react-router-dom';

const Post = (props) => {

    const deletePost = () => {
        props.deletePost(props.id);
    }

    return (
        <NavLink to={`/profile/${props.id}`} >
            <div className={classes.post}>
                <div className={classes.postBody}>{props.body}</div>
            </div>
            <button onClick={deletePost} className={classes.buttonDelete}>Delete</button>
        </NavLink>
    )
}

export default Post;