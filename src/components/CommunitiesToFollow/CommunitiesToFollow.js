import './CommunitiesToFollow.css';

const CommunitiesToFollow = () => {
    return (
        <div className='communitiesToFollow'>
            <div className='communitiesToFollowHeader'>
                <p className='communitiesToFollowHeaderText'>Communities to follow</p>
            </div>
            <ul className='communitiesToFollowList'>
                <li className='communitiesToFollowListItem'>
                    <img src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className='sideBarCommunityImage'/>
                    <p>Learning React</p>
                </li>
                <li className='communitiesToFollowListItem'>
                    <img src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className='sideBarCommunityImage'/>
                    <p>Beginner Developer</p>
                </li>
                <li className='communitiesToFollowListItem'>
                    <img src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className='sideBarCommunityImage'/>
                    <p>CEO's Corner</p>
                </li>
                <li className='communitiesToFollowListItem'>
                    <img src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className='sideBarCommunityImage'/>
                    <p>Code</p>
                </li>
                <li className='communitiesToFollowListItem'>
                    <img src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className='sideBarCommunityImage'/>
                    <p>Programming Tips</p>
                </li>
            </ul>
        </div>
    )
}

export default CommunitiesToFollow;
