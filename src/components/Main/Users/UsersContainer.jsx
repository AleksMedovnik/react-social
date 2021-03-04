import { connect } from 'react-redux';
import { follow, setUsers } from '../../../redux/usersReducer';
import Users from './Users';



const mapStateToProps = (state) => ({ users: state.usersPage.users });

const UsersContainer = connect(mapStateToProps, {
    follow,
    setUsers,    
})(Users);

export default UsersContainer; 