import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <p>Creer</p>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Learn more</li>
                    <li className='loginBtn'>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
