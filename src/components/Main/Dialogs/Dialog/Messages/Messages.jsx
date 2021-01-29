import classes from './Messages.module.css';
import React from 'react';

const Messages = (props) => {
    return (
            <div>
                <div>{props.message}</div>
            </div>
    )
}


export default Messages;