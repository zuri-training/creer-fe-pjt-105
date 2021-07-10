import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { VscBell } from 'react-icons/vsc';

const Header = ({homePage}) => {

    const HomePageHeader = () => {
        return (
            <>
                <div className='headerLeft'>
                    <div className='logo'>
                        <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Logo'/>
                    </div>
                </div>
                <div className='headerCenter'>
                    <div className='searchBox'>
                        <BsSearch className='searchIcon' size='0.9em'/>
                        <input type='text' placeholder='Search posts, answers, communities...' />
                    </div>
                </div>
                <div className='headerRight'>
                    <div className='notification'>
                        <VscBell className='notificationIcon' size='1.7em'/>
                        <span>1</span>
                    </div>
                    <div className='profileImage'>
                        <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' />
                    </div>
                </div>  
            </>

        )
    }


    const LandingPageHeader = () => {
        return(
            <>
                <div className='logo'>
                    <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Logo'/>
                </div>
                <div className='nav-items'>
                    <ul>
                        <li>Contact us</li>
                        <li>Learn more</li>
                        <li className='headerBtn loginBtn'>Login</li>
                        <li className='headerBtn signUpBtn'>Get Started</li>
                    </ul>
                </div>
            </>
        )
    }


    return (
        <div className='header'>
            {!homePage 
            ? 
             <LandingPageHeader />
            : 
             <HomePageHeader />
            }
        </div>
    )
}

export default Header;


{/* <div className='header'>
                
        </div> */}
