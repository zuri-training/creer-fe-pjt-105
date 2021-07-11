import "./SignIn.css";
import { FcGoogle } from 'react-icons/fc'
import { Link } from "react-router-dom";

const SignIn = () => {
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
            />
            <input
              className="signInInput"
              placeholder="Password"
              type='password'
              name='password'
              id='password'
              required
            />
            <div className="signInHelp">
              <div className="rememberInfo">
                <input type='checkbox' name='remember' id='remember' />
                <label for='remember' className='rememberCheckBox'>
                  <span className='rememberText'>Remember me</span></label></div>
              <div className="resetPassword">
                <a href="" className='link'>Reset Password?</a>
              </div>
            </div>
            <button className="signInBtn"><Link to='/homepage' style={{color:'#fff'}}>Login</Link></button>
            <p className='altOption'>
              Don't have an account?{" "}
              <a className="link" href="">
                Register
              </a>
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
