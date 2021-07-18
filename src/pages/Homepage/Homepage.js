import './Homepage.css';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import RightBar from '../../components/RightBar/RightBar';
import Feed from '../../components/Feed/Feed';

const Homepage = () => {
    return (
        <div className='homepage'>
            {/* Header */}
            <Header />

            {/* Main Section */}
            <main>
                <SideBar />
                <Feed />
                <RightBar />
            </main>

        </div>
    )
}

export default Homepage;
