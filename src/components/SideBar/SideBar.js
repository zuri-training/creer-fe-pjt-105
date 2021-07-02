import './SideBar.css';
import { AiOutlineHome  } from 'react-icons/ai';
import { FaRegBookmark  } from 'react-icons/fa';
import { FiHash  } from 'react-icons/fi';
import { BsPeople  } from 'react-icons/bs';


const SideBar = () => {
    return (
        <div className='sideBar'>
            <ul className='mainSideBarOptions'>
                <li className='home'><AiOutlineHome size='2em'/><p>Home</p></li>
                <li className='savedPosts'><FaRegBookmark size='2em'/><p>Saved posts</p></li>
                <li className='tags'><FiHash size='2em'/><p>Tags</p></li>
                <li className='yourCommunities'><BsPeople size='2em'/><p>Your Communities</p></li>
                    <ul className='communityList'>
                        <li><p>Frontend</p></li>
                        <li><p>Design</p></li> 
                        <li><p>JavaScript</p></li> 
                        <li><p>Reactjs</p></li> 
                    </ul>
                    
            </ul>
        </div>
    )
}

export default SideBar;
