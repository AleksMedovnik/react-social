import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    
    return (
        <div className={classes.dialogs}>
            <Dialog messagesPage={props.messagesPage} dispatch={props.dispatch} />
            

        </div>
    )
}

export default Dialogs;