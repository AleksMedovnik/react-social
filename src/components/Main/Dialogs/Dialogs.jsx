import { NavLink } from 'react-router-dom';
import Dialogcontainer from './Dialog/DialogContainer';
import classes from './Dialogs.module.css';

const Dialogs = () => {

    return (
        <div className={classes.dialogs}>
            <Dialogcontainer />
        </div>
    )
}

export default Dialogs;