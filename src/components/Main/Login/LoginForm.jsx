import { reduxForm } from "redux-form";

const Log = () => {
    return (
        <form action="">
            <p>
                <input type="text" placeholder='Login' />
            </p>
            <p>
                <input type="password" placeholder='Password' />
            </p>
            <p>
                <label htmlFor="remembe">Remembe me</label>
                <input type="checkbox" id='remembe' />
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
}

const LoginForm = reduxForm({form: 'login'})(Log)
export default LoginForm;