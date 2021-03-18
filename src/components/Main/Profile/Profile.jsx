import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import Preloader from '../Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import  ava  from '../../../images/ava.png'


const Profile = (props) => {
    if (!props.profile) return <Preloader />
    return (
        <div className={classes.main__profile}>
            <div className={classes.profile}>
                <img className={classes.main__avatar} src={ava} />
                <div>
                    <div className={classes.userName}><b>{props.profile.name}</b></div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    <a href='#' className={classes.profile__info}>Показать подробную информацию...</a>

                </div>

            </div>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;