import { connect } from "react-redux";
import { setIsAuth } from '../../../redux/authReducer';
import { Login } from "./Login";
import { Redirect } from "react-router";

const LoginContainer = props => {
    if (props.isAuth) return <Redirect to='/profile' />
    return (
        <Login setIsAuth={props.setIsAuth} isAuth={props.isAuth} />
    )
}

const mapStateToProps = (state) => ({ isAuth: state.authLogin.isAuth, });
export default connect(mapStateToProps, { setIsAuth })(LoginContainer);