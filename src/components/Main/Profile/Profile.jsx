import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import Preloader from '../Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const Profile = (props) => {
    if (!props.profile) return <Preloader />
    return (
        <div className={classes.main__profile}>
            <div className={classes.profile}>
                <img className={classes.main__avatar} src={props.profile.url} />
                <div>
                    <div className={classes.userName}><b>Alex Honey</b></div>
                    <ProfileStatus status='Hello, my frients!' />
                    <a href='#' className={classes.profile__info}>Показать подробную информацию...</a>

                </div>

            </div>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;