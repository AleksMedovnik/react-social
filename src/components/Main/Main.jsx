import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import classes from './Main.module.css';
import Profile from './Profile/Profile';



const Main = (props) => {

  return (

    <div className={classes.main}>
      <Route exact path={["/", "/profile"]} render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
      <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch} />} />
    </div>
  );
};
export default Main;