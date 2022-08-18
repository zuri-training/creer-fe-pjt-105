import './Homepage.css';
import SideBar from '../../components/SideBar/SideBar';
import RightBar from '../../components/RightBar/RightBar';
import Feed from '../../components/Feed/Feed';


const Homepage = () => {
    return (
        <div className='homepage'>

            {/* Main Section */}
            <main>
                <div className='leftViewContainer viewsOverflowStyle'>
                    <SideBar />
                </div>
                <div className='feedViewContainer viewsOverflowStyle'>
                    <Feed />
                </div>
                <div className='rightViewContainer viewsOverflowStyle'>
                    <RightBar />
                </div>
            </main>

        </div>
    )
}

export default Homepage;
