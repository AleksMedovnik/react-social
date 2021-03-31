import { connect } from "react-redux";
import { setIsAuth } from '../../../redux/authReducer';
import { Login } from "./Login";

const LoginContainer = props => {
    return(
        <Login setIsAuth={props.setIsAuth} isAuth={props.isAuth} />
    )
}

const mapStateToProps = (state) => ({ isAuth: state.authLogin.isAuth, });
export default connect(mapStateToProps, { setIsAuth })(LoginContainer);