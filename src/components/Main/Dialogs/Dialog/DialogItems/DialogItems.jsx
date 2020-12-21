import classes from './DialogItems.module.css';
import ava from '../../../../../images/ava.png';
import { NavLink } from 'react-router-dom';
import React from 'react';

const DialogItems = (props) => {
    let newDialog = React.createRef();
    let addDialog = () => {
        let text = newDialog.current.value;
        alert(text);
    }
    return (
        <form>
            <NavLink to={`/dialogs/${props.id}`} className={classes.dialog__item}>
                <img src={ava} alt="Avatar" />
                <div className={`post__input ${classes.post}`}>{props.name}</div>
                <input name="message" ref={newDialog} className='post__input' />
                <button onClick={addDialog}>Submit</button>
            </NavLink>
        </form>
    )
}




export default DialogItems;