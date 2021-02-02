import MyPosts from './MyPosts/MyPosts';
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
            <MyPosts postData={props.profilePage.postData} addPost={props.addPost} updateNewPostText={props.updateNewPostText}  />
        </div>
    )
}
export default Profile;