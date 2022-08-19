import Form from "../../components/Form/Form";
import "./SignIn.css";


const Login = ({ setAuth }) => {
    return (
        <div className='login'>
            <Form setAuth={setAuth} formType={'signin'}/>
        </div>
    )
}

export default Login
