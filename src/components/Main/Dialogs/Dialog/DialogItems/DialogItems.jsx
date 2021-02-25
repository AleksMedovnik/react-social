import classes from './DialogItems.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    return (
        <div className='m-bott'>
            <NavLink to={`/dialogs/${props.id}`} className={classes.post}>{props.name}</NavLink>
        </div>
    )
}




export default DialogItems;