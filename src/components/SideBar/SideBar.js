import './SideBar.css';
import { AiOutlineHome  } from 'react-icons/ai';
import { FaRegBookmark  } from 'react-icons/fa';
import { FiHash  } from 'react-icons/fi';
import { BsPeople  } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import CreateASpace from '../CreateASpace/createASpace';
import { useState } from 'react';


const SideBar = () => {

    const [isClicked, setIsClicked] = useState(false);

    const yourCommunityListToggle = () => {
        const communityList = document.getElementById('yourCommunityList');
        communityList.classList.toggle('noDisplay');
    }

    const yourTopicListToggle = () => {
        if(!isClicked) {
            setIsClicked(true)
        } else {
            setIsClicked(false)
        }

        // const topicsList = document.getElementById('yourTopicsList');
        // topicsList.classList.toggle('noDisplay');
    }

    return (
        <div className='sideBar'>
            <CreateASpace />
            <ul className='mainSideBarOptions'>
                <li className='home'><AiOutlineHome  className='sidebarIcons'/><p>Home</p></li>
                <li className='savedPosts'><FaRegBookmark className='sidebarIcons' /><p>Saved posts</p></li>
                <li className='yourTopics' onClick={yourTopicListToggle}><FiHash className='sidebarIcons' /><p>Topics</p><MdKeyboardArrowDown className='dropdownIcon'/></li>
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
                <li className={`${isClicked ? '' : 'yourCommunities'}`} onClick={yourCommunityListToggle}><BsPeople className='sidebarIcons'/><p>My Communities</p><MdKeyboardArrowDown className='dropdownIcon'/></li>
                    <ul className={`yourCommunityList ${isClicked ? '' : 'noDisplay'}`} id='yourCommunityList'>
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
