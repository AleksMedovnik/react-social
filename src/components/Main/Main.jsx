import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import classes from './Main.module.css';
import Profile from './Profile/Profile';

const Main = () => {
  return (
    <BrowserRouter>
      <div className={classes.main}>
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
      </div>
    </BrowserRouter>
  );
};
export default Main;