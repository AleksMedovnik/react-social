import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { getUsersThunk, followThunk } from '../../../redux/usersReducer';
import Users from './Users';



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(connect(mapStateToProps, {
    getUsersThunk,
    followThunk
}), withRouter,
    withAuthRedirect)(Users);