import ava from '../../../images/ava.png';
import classes from './Users.module.css';


const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={classes.users}>
                            <p>
                                <span>{u.fullName}</span>
                                <br />
                                <span className={classes.country}>{u.location.country}</span>
                                <br />
                                <span className={classes.city}>{u.location.city}</span>
                            </p>
                            <p>
                                <img src={ava} alt="" />
                                <br />
                                {u.followed ? <button onClick={()=>props.unfollow(u.id)}>Unfollow</button> :
                                 <button onClick={()=>props.follow(u.id)}>Follow</button>}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Users;