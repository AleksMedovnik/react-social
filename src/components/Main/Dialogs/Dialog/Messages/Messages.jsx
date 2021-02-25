import React from 'react';
import classes from './Messages.module.css';

const Messages = (props) => {
    return (
            <div className='m-bott'>
                <div className={classes.message}>{props.message}</div>
            </div>
    )
}


export default Messages;