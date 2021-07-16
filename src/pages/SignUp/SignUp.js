import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useState } from 'react';


 function SignUp() {

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpLastname, setsignUpLastname] = useState('');
    const [signUpPhoneNumber, setsSignUpPhoneNumber] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');

    const onFirstnameChange = (event) => {
        setSignUpFirstname(event.target.value)
    }

    const onLastnameChange = (event) => {
        setsignUpLastname(event.target.value)
    }

    const onPhoneNumberChange = (event) => {
        setsSignUpPhoneNumber(event.target.value)
    }

    const onEmailChange = (event) => {
        setSignUpEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setSignUpPassword(event.target.value)
    }

    const onConfirmPasswordChange = (event) => {
        setSignUpConfirmPassword(event.target.value)
    }


    const onSubmit = () => {

        if (signUpConfirmPassword === signUpPassword) {

            fetch('http://creer-pjt-105.herokuapp.com/api/auth/register/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: signUpFirstname,
                    last_name: signUpLastname,
                    phoneNumber: signUpPhoneNumber,
                    email: signUpEmail,
                    password: signUpPassword,
                })
            })

            console.log ({
                first_name: signUpFirstname,
                last_name: signUpLastname,
                phoneNumber: signUpPhoneNumber,
                email: signUpEmail,
                password: signUpPassword,
                comfirmPassword: signUpConfirmPassword
            })
        } else {
            console.log('password and confirm password are different')
        }
    }


  return (
    <div className="signUp">
     {/* <h6 id="marginWork">
            MyIssues
        </h6> */}
        <div className='logo'>
            <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Logo'/>
        </div>
        <h2 id="marginWork">
            Get Started
        </h2>
        <p id="marginWork">
            Let's get you all set up, so you can verify your personal account and begin setting up your account.
        </p>
        <div id="marginWork" className="Google">
            <FcGoogle className='googleIcon'/>
            <a id="Google" href="#" >Sign up with Google</a>
        </div>
        <div className="separator">or</div>
        <div className="form">
            <div className="input1">
            <input placeholder="Firstname" onChange={onFirstnameChange}/>
            <input type="number"  placeholder="Phone Number" onChange={onPhoneNumberChange}/>
            <input type="password" placeholder="Password" onChange={onPasswordChange}/>
            </div>
            <div className="input2">
            <input placeholder="Lastname" onChange={onLastnameChange}/>
            <input type="email" placeholder="Email" onChange={onEmailChange}/>
            <input type="password" placeholder="Confirm Password" onChange={onConfirmPasswordChange}/>
            </div>
            
        </div>
        <div id="marginWork">
        <input
          type="checkbox"
          value="checkBox"
          id="checkBox"
          defaultChecked={false}/>
        <label htmlFor="checkid">I agree to the terms of service and privacy policy.</label>
        </div>

            <button id="marginWork" onClick={onSubmit}><Link to='/creer-fe-pjt-105/profile' style={{color:'#fff'}}>Register</Link></button>
            <p className="paragraph" id="marginWork">
                Already have an account?
                <Link to='/creer-fe-pjt-105/signin'>Login</Link>
            </p>
    </div>
  );
}
export default SignUp;