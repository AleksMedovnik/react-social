import * as axios from 'axios';
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

    const follow = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                userId: id,
                followed: true,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let user = await response.json();
        props.follow(user.userId, user.followed);
    }

    const unfollow = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                userId: id,
                followed: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((user) => props.follow(user.userId, user.followed));
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
                                {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => follow(u.id)}>Follow</button>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;