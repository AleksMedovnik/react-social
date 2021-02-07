import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import classes from './Main.module.css';
import Profile from './Profile/Profile';
import Users from './Users/Users';



const Main = () => {

  return (

    <div className={classes.main}>
      <Route exact path={["/", "/profile"]} render={() => <Profile />} />
      <Route exact path='/dialogs' render={() => <Dialogs />} />
      <Route exact path='/users' render={() => <Users />} />
    </div>
  );
};
export default Main;