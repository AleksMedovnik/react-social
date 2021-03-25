

const LoginForm = () => {
    return (
        <form action="">
            <p>
                <input type="text" name='userName' placeholder='Login' />
            </p>
            <p>
                <input type="password" name='password' placeholder='Password' />
            </p>
            <p>
                <label htmlFor="remembeMe">Remembe me</label>
                <input type="checkbox" name='remembeMe' id='remembeMe' />
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
}

export default LoginForm;