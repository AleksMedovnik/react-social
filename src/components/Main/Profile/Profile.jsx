import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ava from '../../../images/ava.png';


const Profile = (props) => {
    return (
        <div className={classes.main__profile}>
            <div className={classes.profile}>
                <img className={classes.main__avatar} src={ava} />             
                <div><b>Alex Honey</b>
                    <a href='#' className={classes.profile__status}>Изменить статус</a>
                    <a href='#' className={classes.profile__info}>Показать подробную информацию...</a>
                </div>
            </div>
            <MyPostsContainer postData={props.profilePage.postData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
        </div>
    )
}
export default Profile;