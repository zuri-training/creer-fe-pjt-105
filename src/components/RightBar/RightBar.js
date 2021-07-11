import CommunitiesToFollow from '../CommunitiesToFollow/CommunitiesToFollow';
import TopPicks from '../TopPicks/TopPicks';
import './RightBar.css';

const RightBar = () => {
    return (
        <div className='rightBar'>
            <TopPicks />
            <CommunitiesToFollow />
        </div>
    )
}

export default RightBar;
