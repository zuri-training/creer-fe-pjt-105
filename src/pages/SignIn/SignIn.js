import "./SignIn.css";
import { FcGoogle } from 'react-icons/fc'
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    fetch('http://creer-pjt-105.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    }).then(response => response.json())
      .then(data => console.log(data))
    
    // console.log({
    //   email: signInEmail,
    //   password: signInPassword
    // },)
  }


  return (
    <div className="signIn">
      <div className="signInInfo">
        <div className="signInHeading">
          <img className="title" src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Creer logo' />
        </div>
        <div className="signInFormContainer">
          <form className="signInForm">
            <h2 className="loginTitle">Login</h2>
            <p className='welcomeText'>Welcome back! It's nice to have you back</p>
            <button className="googleSignInBtn">
              <FcGoogle className='googleIcon' />
              <a href='#' className='link'>Continue with Google</a>
            </button>
            <div className="loginBreak">
              <span className="breakText">or</span>
            </div>

            <input
              className="signInInput"
              type="email"
              name="email-address"
              id="email-address"
              placeholder="Email"
              required
              onChange={onEmailChange}
            />
            <input
              className="signInInput"
              placeholder="Password"
              type='password'
              name='password'
              id='password'
              required
              onChange={onPasswordChange}
            />
            <div className="signInHelp">
              <div className="rememberInfo">
                <input type='checkbox' name='remember' id='remember' />
                <label htmlFor='remember' className='rememberCheckBox'>
                  <span className='rememberText'>Remember me</span></label></div>
              <div className="resetPassword">
                <a href="" className='link'>Reset Password?</a>
              </div>
            </div>
            <button onClick={onSubmit} className="signInBtn"><Link to='/creer-fe-pjt-105/homepage' style={{color:'#fff'}}>Login</Link></button>
            <p className='altOption'>
              Don't have an account?{" "}
                <Link to='/creer-fe-pjt-105/signup'>Register</Link>
            </p>
          </form>
        </div>
      </div>
      <div className='banner'>
        <div className="bannerImage">
          <img src={process.env.PUBLIC_URL + "/assets/loginImage.png"} alt="login illustration" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
