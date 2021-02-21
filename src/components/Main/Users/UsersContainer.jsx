import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../../redux/usersReducer';
import Users from './Users';



const mapStateToProps = (state) => ({ users: state.usersPage.users });
const mapDispatchToProps = (dispatch) => {
    return {
        follow(useId) {
            dispatch(followAC(useId))
        },
        unfollow(useId) {
            dispatch(unfollowAC(useId))
        },
        setUsers(users) {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer; 