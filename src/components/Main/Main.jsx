import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import classes from './Main.module.css';
import Profile from './Profile/Profile';
import UsersContainer from './Users/UsersContainer';



const Main = () => {

  return (

    <div className={classes.main}>
      <Route exact path={["/", "/profile"]} render={() => <Profile />} />
      <Route exact path='/dialogs' render={() => <Dialogs />} />
      <Route exact path='/users' render={() => <UsersContainer />} />
    </div>
  );
};
export default Main;