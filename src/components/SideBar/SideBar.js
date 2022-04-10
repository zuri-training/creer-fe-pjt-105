import './SideBar.css';
import { AiOutlineHome  } from 'react-icons/ai';
import { FaRegBookmark  } from 'react-icons/fa';
import { FiHash  } from 'react-icons/fi';
import { BsPeople  } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';


const SideBar = () => {

    const yourCommunityListToggle = () => {
        const communityList = document.getElementById('yourCommunityList');
        communityList.classList.toggle('noDisplay');
    }

    const yourTopicListToggle = () => {
        const topicsList = document.getElementById('yourTopicsList');
        topicsList.classList.toggle('noDisplay');
    }

    return (
        <div className='sideBar'>
            <ul className='mainSideBarOptions'>
                <li className='home'><AiOutlineHome size='1.5em'/><p>Home</p></li>
                <li className='savedPosts'><FaRegBookmark size='1.5em'/><p>Saved posts</p></li>
                <li className='yourTopics' onClick={yourTopicListToggle}><FiHash size='1.5em'/><p>Topics</p><MdKeyboardArrowDown className='dropdownIcon'/></li>
                    <ul className='yourTopicsList noDisplay' id='yourTopicsList'>
                        <li>
                            <img alt="community" src={process.env.PUBLIC_URL + '/assets/communityImage1.png'} className='sideBarTopicsImage'/>
                            <p>Salary Talk</p>
                        </li>
                        <li>
                            <img alt="community" src={process.env.PUBLIC_URL + '/assets/communityImage2.png'} className='sideBarTopicsImage'/>
                            <p>Design Implementations</p>
                        </li> 
                        <li>
                            <img alt="community" src={process.env.PUBLIC_URL + '/assets/communityImage3.png'} className='sideBarTopicsImage'/>
                            <p>Learning JavaScript</p>
                        </li> 
                        <li>
                            <img alt="community" src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className='sideBarTopicsImage'/>
                            <p>Starting Out In Tech</p>
                        </li> 
                    </ul>
                <li className='yourCommunities' onClick={yourCommunityListToggle}><BsPeople size='1.5em'/><p>My Communities</p><MdKeyboardArrowDown className='dropdownIcon'/></li>
                    <ul className='yourCommunityList noDisplay' id='yourCommunityList'>
                        <li>
                            <img alt="community" src={process.env.PUBLIC_URL + '/assets/communityImage1.png'} className='sideBarCommunityImage'/>
                            <p>Frontend Developers</p>
                        </li>
                        <li>
                            <img alt="community" src={process.env.PUBLIC_URL + '/assets/communityImage2.png'} className='sideBarCommunityImage'/>
                            <p>Designers</p>
                        </li> 
                        <li>
                            <img alt="community" src={process.env.PUBLIC_URL + '/assets/communityImage3.png'} className='sideBarCommunityImage'/>
                            <p>JavaScript Developers</p>
                        </li> 
                        <li>
                            <img alt="community" src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className='sideBarCommunityImage'/>
                            <p>React Developers</p>
                        </li> 
                    </ul>
                    
            </ul>
        </div>
    )
}

export default SideBar;
