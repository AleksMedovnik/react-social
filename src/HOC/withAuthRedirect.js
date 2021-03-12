import { Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.authLogin.isAuth,
    }
}

export const withAuthRedirect = (Component) => {
    const redirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />
        return <Component {...props} />
    }

    let connectRedirectComponent = connect(mapStateToProps)(redirectComponent);

    return connectRedirectComponent;
}