import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.post}>
            <img src="https://3dnews.ru/assets/external/illustrations/2020/01/10/1001163/01.jpg" alt="Avatar"/>
            <div className={classes.post__input}>Поделитесь своим настроением!</div>
        </div>
    )
}

export default Post;