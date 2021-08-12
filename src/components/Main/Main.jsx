import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import classes from './Main.module.css';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';



const Main = () => {

  return (

    <div className={classes.main}>
      <Route exact path={['/', '/profile/:userId?']} render={() => <ProfileContainer />} />
      <Route path='/dialogs' render={() => <Dialogs />} />
      <Route path='/users' render={() => <UsersContainer />} />
    </div>
  );
};
export default Main;