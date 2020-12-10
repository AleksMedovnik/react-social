import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import classes from './Main.module.css';
import Profile from './Profile/Profile';

const Main = () => {
  return (

    <div className={classes.main}>
      <Route exact path={["/","/profile"]} component={Profile} />
      <Route path='/dialogs' component={Dialogs} />
    </div>
  );
};
export default Main;