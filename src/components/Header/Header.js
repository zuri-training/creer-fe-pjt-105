import './Header.css';
import Logo from '../Logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt='Logo'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Contact us</li>
                    <li>Learn more</li>
                    <li className='headerBtn loginBtn'>Login</li>
                    <li className='headerBtn signUpBtn'>Get Started</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
