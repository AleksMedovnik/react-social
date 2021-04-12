import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';

const Users = (props) => {

    useEffect(() => {
        if (props.users.length == 0) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    props.setUsers(response.data);
                })
        }

    }, []);




    return (
        <div>

            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={classes.users}>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                <span className={classes.users__name}>{u.name}</span>
                                <br />
                                <span className={classes.users__email}>{u.email}</span>
                                <br />
                                 <span className={classes.users__address}>{u.address.city}</span> 
                                <br />
                                <span className={classes.users__phone}>{u.phone}</span> 
                                <br />
                                <span className={classes.users__company}>{u.company.name}</span> 
                                <br />
                                </NavLink>
                            </div>
                            <div>
                                <br />
                                {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(u.id)}>Follow</button>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;