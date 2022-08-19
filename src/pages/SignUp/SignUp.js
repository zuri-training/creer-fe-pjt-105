import './SignUp.css';
import Form from '../../components/Form/Form';

 function SignUp({ setAuth }) {
  return (
    <div className='signup'>
        <Form setAuth={setAuth} formType={'signup'} />
    </div>
  );
}


export default SignUp;