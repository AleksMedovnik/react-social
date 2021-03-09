import { connect } from 'react-redux';
import { getUsersThunk, followThunk } from '../../../redux/usersReducer';
import Users from './Users';



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        followingInProgress: state.usersPage.followingInProgress
    }
};

const UsersContainer = connect(mapStateToProps, {
    getUsersThunk,
    followThunk
})(Users);

export default UsersContainer;