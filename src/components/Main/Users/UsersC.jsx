import * as axios from 'axios';
import React, { useEffect } from 'react';
import ava from '../../../images/ava.png';
import classes from './Users.module.css';

const UsersC = (props) => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                props.setUsers(response.data);
            })
    }, []);

    
        return (
            <div>

                {
                    props.users.map(u => {
                        return (
                            <div key={u.id} className={classes.users}>
                                <p>
                                    <span>{u.name}</span>
                                    <br />
                                </p>
                                <p>
                                    <img src={ava} alt="" />
                                    <br />
                                   {  u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                        <button onClick={() => props.follow(u.id)}>Follow</button> }
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
}

export default UsersC;