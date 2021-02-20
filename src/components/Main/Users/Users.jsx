import * as axios from 'axios';
import React from 'react';
import ava from '../../../images/ava.png';
import classes from './Users.module.css';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.props.setUsers(response.data);
            })
    }

    render() {
        return (
            <div>

                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id} className={classes.users}>
                                <p>
                                    <span>{u.name}</span>
                                    <br />
                                </p>
                                <p>
                                    <img src={ava} alt="" />
                                    <br />
                                   {  u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                        <button onClick={() => this.props.follow(u.id)}>Follow</button> }
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;