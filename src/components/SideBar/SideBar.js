import './SideBar.css';
import { Home, BookmarkBorder, tag, People,  } from '@material-ui/icons';

const SideBar = () => {
    return (
        <div className='sideBar'>
            <ul className='mainSideBarOptions'>
                <li className='home'><Home size='2em'/><p>Home</p></li>
                <li className='savedPosts'><BookmarkBorder size='2em'/><p>Saved posts</p></li>
                <li className='tags'><tag size='2em'/><p>Tags</p></li>
                <li className='yourCommunities'><People size='2em'/><p>Your Communities</p></li>
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
