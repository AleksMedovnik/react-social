import { Redirect } from "react-router";

export const withAuthRedirect = (Component) => {
    const redirectComponent = (props) => {
        if(!props.isAuth) return <Redirect to='/login' />
        return <Component {...props} />
    }
    return redirectComponent;
}