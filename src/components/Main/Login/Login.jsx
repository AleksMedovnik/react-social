import LoginForm from "./LoginForm"

export const Login = (props) => {

    return(
        <div>
            <h1>Заполните форму</h1>
            <LoginForm isAuth={props.isAuth} setIsAuth={props.setIsAuth} />
        </div>
    )
}