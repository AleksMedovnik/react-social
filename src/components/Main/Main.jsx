import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import classes from './Main.module.css';
import Profile from './Profile/Profile';



const Main = (props) => {

  return (

    <div className={classes.main}>
      <Route exact path={["/", "/profile"]} render={() => <Profile store={props.store} />} />
      <Route path='/dialogs' render={() => <Dialogs store={props.store} />} />
    </div>
  );
};
export default Main;