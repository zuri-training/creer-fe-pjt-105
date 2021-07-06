import React from "react" 
import image from './download (2).png'
import './SignUp.css';


 function SignUp() {
  return (
    <div className="signUp">
        <div className='Logo'>
                <img className="SignUpLogo" src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Logo'/>
            </div>
        <h2 id="SignUpH2">
            Get Started
        </h2>
        <p className="SignUpP1" id="marginWork">
            Let's get you all set up, so you can verify your personal account and begin setting up your account
        </p>
        <p className="SignUpP2" id="marginWork">
            Let's get you all set up, so you can verify your personal account
        </p>
        <div id="marginWork" className="Google">
        <img className="SignUpImage" src={image} alt="photo"/>
            <a id="Google" href="#" >Sign up with Google</a>
        </div>
        <div className="separator">or</div>
        <div className="SignUpForm" id="form">
            <div> 
            <input className="SignUpInput" placeholder="Firstname" ></input>
            <input className="SignUpInput" id="input" type="number" placeholder="Phone Number" ></input>
            <input className="SignUpInput" type="password" placeholder="Password" ></input>
            </div>
            <div className="input2">
            <input className="SignUpInput" id="input" placeholder="Lastname" ></input>
            <input className="SignUpInput" type="email" placeholder="Email" ></input>
            <input className="SignUpInput" id="input" type="password" placeholder="Confirm Password" ></input>
            </div>
            
        </div>
        <div id="marginWork">
        <input 
          type="checkbox"
          value="ckeckBoxI"
          id="checkBox"
          defaultChecked={false}/>
            <label id="SignUpLabel" for="ckeckid">I agree to the terms of service and privacy policy.</label>
        </div>

            <button className="SignUpButton"
            id="marginWork" onClick="document.location='#'">Register</button>
            <p className="paragraph" id="marginWork">
                Already have an account?
                <a href="https://www.google.com/">Login</a>
            </p>
    </div>
  );
}
export default SignUp;