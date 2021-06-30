import './Homepage.css';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

const Homepage = () => {
    return (
        <div className='homepage'>
            {/* Header */}
            <Header />

            {/* Main Section */}
            <main>
                <SideBar />
            </main>

        </div>
    )
}

export default Homepage;
