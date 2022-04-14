import './TopPicks.css';

const TopPicks = () => {
    return (
        <div className='topPicks'>
            <p className='topPicksTitleText'>Top picks for you</p>
            <ul className='topPicksList'>
                <li className='topPicksListItem'>What's the best stack for build a social platform?</li>
                <li className='topPicksListItem'>What should i do to get my first job in tech?</li>
                <li className='topPicksListItem'>What's the most common error in learning to code?</li>
                <li className='topPicksListItem'>What's the React library for?</li>
                <li className='topPicksListItem'>What's the best job in tech?</li>
            </ul>
        </div>
    )
}

export default TopPicks;
