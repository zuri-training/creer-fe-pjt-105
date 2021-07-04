import './SideBar.css';
import { AiOutlineHome  } from 'react-icons/ai';
import { FaRegBookmark  } from 'react-icons/fa';
import { FiHash  } from 'react-icons/fi';
import { BsPeople  } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';


const SideBar = () => {

    const youCommunityListToggle = () => {
        const communityList = document.getElementById('yourCommunityList');
        communityList.classList.toggle('noDisplay');
    }

    return (
        <div className='sideBar'>
            <ul className='mainSideBarOptions'>
                <li className='home'><AiOutlineHome size='1.5em'/><p>Home</p></li>
                <li className='savedPosts'><FaRegBookmark size='1.5em'/><p>Saved posts</p></li>
                <li className='tags'><FiHash size='1.5em'/><p>Tags</p></li>
                <li className='yourCommunities' onClick={youCommunityListToggle}><BsPeople size='1.5em'/><p>Your Communities</p><MdKeyboardArrowDown className='dropdownIcon'/></li>
                    <ul className='yourCommunityList' id='yourCommunityList'>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/communityImage1.png'} className='sideBarCommunityImage'/>
                            <p>Frontend</p>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/communityImage2.png'} className='sideBarCommunityImage'/>
                            <p>Design</p>
                        </li> 
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/communityImage3.png'} className='sideBarCommunityImage'/>
                            <p>JavaScript</p>
                        </li> 
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className='sideBarCommunityImage'/>
                            <p>Reactjs</p>
                        </li> 
                    </ul>
                    
            </ul>
        </div>
    )
}

export default SideBar;
