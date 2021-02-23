import { connect } from 'react-redux';
import { follow, unfollow, setUsers } from '../../../redux/usersReducer';
import Users from './Users';



const mapStateToProps = (state) => ({ users: state.usersPage.users });

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,  
    setUsers,    
})(Users);

export default UsersContainer; 