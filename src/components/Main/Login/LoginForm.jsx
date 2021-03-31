import { useForm } from "react-hook-form";

const LoginForm = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if(data.userName === 'admin' && data.password === '123'){
            props.setIsAuth(true);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register} type="text" name='userName' placeholder='Login' />
            <input ref={register} type="password" name='password' placeholder='Password' />
            <button type="submit">Submit</button>
        </form>
    )
}



export default LoginForm;