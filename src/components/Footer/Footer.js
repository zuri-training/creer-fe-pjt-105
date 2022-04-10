import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLogoSection'>
                <div className='logo'>
                    <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Logo'/>
                </div>
                <div className='SocialLinks'>
                    <a href='https://imiebogodson.vercel.app/'>Twitter</a>
                    <a href='https://imiebogodson.vercel.app/'>LinkedIn</a>
                    <a href='https://imiebogodson.vercel.app/'>Instagram</a>
                </div>
            </div>
            <div className='footerLinks'>
                <div className='company'>
                    <h4>Company</h4>
                    <a href='https://imiebogodson.vercel.app/'>About Us</a>
                    <a href='https://imiebogodson.vercel.app/'>Team</a>
                    <a href='https://imiebogodson.vercel.app/'>Blog</a>
                </div>
                <div className='legal'>
                    <h4>Legal</h4>
                    <a href='https://imiebogodson.vercel.app/'>Terms and Conditions</a>
                    <a href='https://imiebogodson.vercel.app/'>Privacy Policy</a>
                </div>
                <div className='getHelp'>
                    <h4>Get Help</h4>
                    <a href='https://imiebogodson.vercel.app/'>Support</a>
                    <a href='https://imiebogodson.vercel.app/'>FAQs</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
