import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signInInfo">
        <div className="signInHeading">
          <h1 className="title">Creer</h1>
        </div>
        <div className="signInFormContainer">
          <form className="signInForm">
            <h2 className="loginTitle">Login</h2>
            <p className='welcomeText'>Welcome back! It's nice to have you back</p>
              <button className="googleSignInBtn">
                {/* <img src='./google.jpeg'></img> */}
                <a href='' className='link'>Continue with Google</a>
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
            ></input>
            <input
              className="signInInput"
              placeholder="Password"
              required
            ></input>
            <div className="signInHelp">
              <div className="rememberInfo">
              <input type='checkbox' name='remember' id='remember'></input>
              <label for='remember' className='rememberCheckBox'>
              <span className='rememberText'>Remember me</span></label></div>
              <div className="link resetPassword">
                <a href="">Reset Password?</a>
              </div>
            </div>
            <button className="loginBtn">Login</button>
            <p className='altOption'>
              Don't have an account?{" "}
              <a className="link" href="">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="bannerImage">
        <img src={process.env.PUBLIC_URL + "/assets/"} alt="illustration" />
      </div>
    </div>
  );
};

export default SignIn;
