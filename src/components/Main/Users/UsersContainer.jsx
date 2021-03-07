import { connect } from 'react-redux';
import { follow, setUsers, toggleInProgress } from '../../../redux/usersReducer';
import Users from './Users';



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        followingInProgress: state.usersPage.followingInProgress
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow,
    setUsers,
    toggleInProgress
})(Users);

export default UsersContainer;