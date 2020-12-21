import classes from './Post.module.css';
import ava from '../../../../../images/ava.png';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
    return (
        <NavLink to={`/profile/${props.id}`} className={`post__input ${classes.post}`}>
            <img src={ava} alt="Avatar" />
            <div >{props.post}</div>
        </NavLink>
    )
}

export default Post;