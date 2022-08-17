import './SignUp.css';
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import { Link } from "react-router-dom";

 function SignUp() {
  return (
    <div className='signup'>
        <div className='signupForm'>
            <div className='welcomeTextContainer shortTextContainer'>
                {/* <p className='welcomeTextBig'>Welcome back!</p> */}
                <p className='welcomeTextSmall'>Welcome to .Notes, your minimalist notes app.</p>
            </div>
            <div className='googleSignInBtn'>
                <p>Continue with Google</p>
                <FcGoogle  className='googleLogo'/>
            </div>
            <div className='loginOrDecoWrapper'>
                <hr/>
                    <p className="loginOrText">OR</p>
                <hr/>
            </div>
            <form>
                <div class="container">
                    <label className='formItem formLabel' for="name">Name *</label>
                    <div className='formNameBoxContainer'>
                        <div className='formItem formBox signupFormBox firstNameInputContainer'>
                            <input className='formBoxInput firstNameFormBoxInput formNameBoxInput' type="text" placeholder="First Name" name="name" required/>
                        </div>

                        <div className='formItem formBox signupFormBox lastNameInputContainer'>
                            <input className='formBoxInput formNameBoxInput' type="text" placeholder="Last Name" name="name" required/>
                        </div>
                    </div>
                    

                    <label className='formItem formLabel' for="email">Email *</label>
                    <div className='formItem formBox'>
                        <HiOutlineMail className='formIcons'/>
                        <input className='formBoxInput' type="text" placeholder="Enter your Email Address" name="email" required/>
                    </div>

                    <label className='formItem formLabel' for="psw">Password *</label>
                    <div className='formItem formBox passwordInputContainer'>
                        <CgLock className='formIcons'/>
                        <input className='formBoxInput' type="password" placeholder="Enter your password" name="psw" required/>
                    </div>
                        
                    {/* <button className='signupBtn' type="submit">Get Started</button> */}
                    <Link className='signupBtn' to='/profile' style={{textAlign: 'center', textDecoration: 'none', fontWeight: '600', color: '#fff'}}>Get Started</Link>
                    
                </div>
            </form>
            <div className='bottomInfoTextContainer'>
                <p className='bottomInfoText'>Already have an account? <Link to={'/signin'} style={{textDecoration: 'none', fontWeight: '600', color: '#3757FF'}}>Log In</Link></p>
            </div>
        </div>
    </div>
  );
}


export default SignUp;