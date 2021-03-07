import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getUsers, followAPI } from '../../../api/api';
import classes from './Users.module.css';

const Users = (props) => {

    useEffect(() => {
        if (props.users.length == 0) {
            getUsers().then(data => props.setUsers(data));
        }

    }, []);


    const follow = (id, followed) => {
        props.toggleInProgress(id, true);
        followAPI(id, followed)
            .then((user) => props.follow(user.userId, user.followed))
            .then(() => props.toggleInProgress(id, false));
    }

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
                                {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => follow(u.id, false)}>Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => follow(u.id, true)}>Follow</button>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;