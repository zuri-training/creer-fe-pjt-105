import "./SignIn.css";
// import { FcGoogle } from 'react-icons/fc'
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   return (
//     <div className="signIn">
//       <div className="signInInfo">
//         <div className="signInHeading">
//           <img className="title" src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Creer logo' />
//         </div>
//         <div className="signInFormContainer">
//           <form className="signInForm">
//             <h2 className="loginTitle">Login</h2>
//             <p className='welcomeText'>Welcome back! It's nice to have you back</p>
//             <button className="googleSignInBtn">
//               <FcGoogle className='googleIcon' />
//               <a href='https://imiebogodson.vercel.app/' className='link'>Continue with Google</a>
//             </button>
//             <div className="loginBreak">
//               <span className="breakText">or</span>
//             </div>

//             <input
//               className="signInInput"
//               type="email"
//               name="email-address"
//               id="email-address"
//               placeholder="Email"
//               required
//             />
//             <input
//               className="signInInput"
//               placeholder="Password"
//               type='password'
//               name='password'
//               id='password'
//               required
//             />
//             <div className="signInHelp">
//               <div className="rememberInfo">
//                 <input type='checkbox' name='remember' id='remember' />
//                 <label for='remember' className='rememberCheckBox'>
//                   <span className='rememberText'>Remember me</span></label></div>
//               <div className="resetPassword">
//                 <a href="https://imiebogodson.vercel.app/" className='link'>Reset Password?</a>
//               </div>
//             </div>
//             <button className="signInBtn"><Link to='/home' style={{color:'#fff'}}>Login</Link></button>
//             <p className='altOption'>
//               Don't have an account?{" "}
//               <Link className="link" to="/signup">
//                 Register
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//       <div className='banner'>
//         <div className="bannerImage">
//           <img src={process.env.PUBLIC_URL + "/assets/loginImage.png"} alt="login illustration" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;





import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className='login'>
            <div className='loginForm'>
                <div className='welcomeTextContainer'>
                    <p className='welcomeTextBig'>Welcome back!</p>
                    {/* <p className='welcomeTextSmall'>Welcome back! Please enter your details.</p> */}
                </div>
                <div className='googleSignInBtn'>
                    <p>Sign in with Google</p>
                    <FcGoogle  className='googleLogo'/>
                </div>
                <div className="loginOrDecoWrapper">
                    <hr/>
                    <p className="loginOrText">OR</p>
                    <hr/>
                </div>
                
                {/* <div className='loginTextContainer'>
                    <p className='loginText'>Login with email or phone number</p>
                </div> */}
                <form>
                    <div class="container">
                        <label className='formItem formLabel' for="uname">Email</label>
                        <div className='formItem formBox emailInputContainer'>
                            <HiOutlineMail className='formIcons'/>
                            <input className='formBoxInput' type="text" placeholder="Enter your Email Address" name="uname" required/>
                        </div>

                        <label className='formItem formLabel' for="psw">Password</label>
                        <div className='formItem formBox passwordInputContainer'>
                            <CgLock className='formIcons'/>
                            <input className='formBoxInput' type="password" placeholder="Enter your password" name="psw" required/>
                        </div>
                        
                        <div className="rememberMeWrapper">
                            <input type="checkbox" name="remember"/> 
                            <label className='rememberMeLabel'>
                            Remember me
                            </label>
                        </div>
                        

                        {/* <div className="rememberInfo">
                         <input type='checkbox' name='remember' id='remember' />
                        <label for='remember' className='rememberCheckBox'>
                               <span className='rememberText'>Remember me</span>
                            </label>
                        </div> */}
                            
                        {/* <button className='loginBtn' type="submit">Log In</button> */}
                        <Link className='loginBtn' to='home'>Log In</Link>
                        
                    </div>
                </form>
                <div className='bottomInfoTextContainer'>
                    <p className='bottomInfoText'>Don't have an account? <Link className="linkText" style={{textDecoration: 'none', fontWeight: '600', color: '#3757FF'}} to={'/signup'}>Register</Link></p>
                    
                </div>
            </div>
            {/* <div className='loginImageContainer'>
                <img className='loginImage' src={process.env.PUBLIC_URL + '/assets/loginImage.png'} alt='notes img'/>
            </div> */}
        </div>
    )
}

export default Login
