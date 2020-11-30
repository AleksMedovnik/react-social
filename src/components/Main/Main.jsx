import classes from './Main.module.css';
import MyPosts from './MyPosts/MyPosts';

const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.profile}>
        <img className={classes.main__avatar} src='https://sun2-9.userapi.com/impf/c855028/v855028031/5ff79/ze8qvu_N3VM.jpg?size=200x0&quality=90&crop=100,0,1260,1260&sign=284f59b2db52f5608e4d429cc982572f&ava=1'>
        </img>
        <div><b>Alex Medovnik</b>
          <a href='#' className={classes.profile__status}>Изменить статус</a>
          <a href='#' className={classes.profile__info}>Показать подробную информацию...</a>
        </div>

      </div>

      <MyPosts />
    </div>
  );
};
export default Main;