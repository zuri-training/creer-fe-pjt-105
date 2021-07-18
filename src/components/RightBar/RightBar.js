import About from '../About/About';
import CommunitiesToFollow from '../CommunitiesToFollow/CommunitiesToFollow';
import CommunityFollowers from '../CommunityFollowers/CommunityFollowers';
import TopPicks from '../TopPicks/TopPicks';
import './RightBar.css';

const RightBar = ({ communityPage }) => {

    const CommunityRightBar = () => {
        return (
            <>
                <About />
                <CommunityFollowers />
            </>
        )
    }


    const HomePageRightBar = () => {
        return(
            <>
                <TopPicks />
                <CommunitiesToFollow />
            </>
        )
    }

    return (
        <div className='rightBar'>
            {communityPage ? <CommunityRightBar /> : <HomePageRightBar />}
        </div>
    )
}

export default RightBar;
