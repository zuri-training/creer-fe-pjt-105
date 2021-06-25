import './Footer.css';
import Logo from '../Logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLogoSection'>
                <div className='logo'>
                    <img src={Logo} alt='Logo'/>
                </div>
                <div className='SocialLinks'>
                    <a href='#'>Twitter</a>
                    <a href='#'>LinkedIn</a>
                    <a href='#'>Instagram</a>
                </div>
            </div>
            <div className='footerLinks'>
                <div className='company'>
                    <h4>Company</h4>
                    <a href='#'>About Us</a>
                    <a href='#'>Team</a>
                    <a href='#'>Blog</a>
                </div>
                <div className='legal'>
                    <h4>Legal</h4>
                    <a href='#'>Terms and Conditions</a>
                    <a href='#'>Privacy Policy</a>
                </div>
                <div className='getHelp'>
                    <h4>Get Help</h4>
                    <a href='#'>Support</a>
                    <a href='#'>FAQs</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
