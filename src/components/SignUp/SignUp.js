import React from "react" 
import image from './download (2).png'
import './SignUp.css';


 function SignUp() {
  return (
    <div className="signUp">
     <h6 id="marginWork">
            MyIssues
        </h6>
        <h2 id="marginWork">
            Get Started
        </h2>
        <p id="marginWork">
            Let's get you all set up, so you can verify your personal account and begin setting up your account.
        </p>
        <div id="marginWork" className="Google">
        <img src={image}/>
            <a id="Google" href="#" >Sign up with Google</a>
        </div>
        <div class="separator">or</div>
        <div className="form">
            <div className="input1">
            <input className="input" placeholder="Firstname" ></input>
            <input id="input" type="number" className="input" placeholder="Phone Number" ></input>
            <input className="input" type="password" placeholder="Password" ></input>
            </div>
            <div className="input2">
            <input id="input" className="input" placeholder="Lastname" ></input>
            <input className="input" type="email" placeholder="Email" ></input>
            <input id="input" className="input" type="password" placeholder="Confirm Password" ></input>
            </div>
            
        </div>
        <div id="marginWork">
        <input
          type="checkbox"
          value="ckeckBox"
          id="checkBox"
          defaultChecked={false}/>
            <label for="ckeckid">I agree to the terms of service and privacy policy.</label>
        </div>

            <button id="marginWork" onClick="document.location='#'">Register</button>
            <p className="paragraph" id="marginWork">
                Already have an account?
                <a href="https://www.google.com/">Login</a>
            </p>
    </div>
  );
}
export default SignUp;