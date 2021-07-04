import './SideBar.css';
import { AiOutlineHome  } from 'react-icons/ai';
import { FaRegBookmark  } from 'react-icons/fa';
import { FiHash  } from 'react-icons/fi';
import { BsPeople  } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';


const SideBar = () => {
    return (
        <div className='sideBar'>
            <ul className='mainSideBarOptions'>
                <li className='home'><AiOutlineHome size='1.5em'/><p>Home</p></li>
                <li className='savedPosts'><FaRegBookmark size='1.5em'/><p>Saved posts</p></li>
                <li className='tags'><FiHash size='1.5em'/><p>Tags</p></li>
                <li className='yourCommunities'><BsPeople size='1.5em'/><p>Your Communities</p><MdKeyboardArrowDown className='dropdownIcon'/></li>
                    <ul className='communityList'>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} className='sideBarCommunityImage'/>
                            <p>Frontend</p>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} className='sideBarCommunityImage'/>
                            <p>Design</p>
                        </li> 
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} className='sideBarCommunityImage'/>
                            <p>JavaScript</p>
                        </li> 
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} className='sideBarCommunityImage'/>
                            <p>Reactjs</p>
                        </li> 
                    </ul>
                    
            </ul>
        </div>
    )
}

export default SideBar;
