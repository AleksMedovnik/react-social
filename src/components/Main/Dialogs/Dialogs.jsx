import { NavLink } from 'react-router-dom';
import Dialogcontainer from './Dialog/DialogContainer';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <Dialogcontainer store={props.store} />
        </div>
    )
}

export default Dialogs;