import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import Preloader from '../Preloader/Preloader';


const Profile = (props) => {
    if(!props.profile) return <Preloader />
    return (
        <div className={classes.main__profile}>
            <div className={classes.profile}>
                <img className={classes.main__avatar} src={props.profile.url} />             
                <div><b>Alex Honey</b>
                    <a href='#' className={classes.profile__status}>Изменить статус</a>
                    <a href='#' className={classes.profile__info}>Показать подробную информацию...</a>
                </div>
            </div>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;