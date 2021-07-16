import './CommunityFollowers.css';

const CommunityFollowers = () => {
    return (
        <div className='communityFollowers'>
           <div className='communityFollowersHeader'>
               <p className='communityFollowersTitleText'>Followers</p>
           </div>
           <div className='communityFollowersBody'>
                <ul>
                    <li className='communityFollowerItem'>
                        <img src={process.env.PUBLIC_URL + '/assets/userProfileImage2.png'} className='communityFollowerImage'/>
                        <div className='communityFollowerDetails'>
                            <p className='communityFollowerName'> Tolulope David</p>
                            <p className='communityFollowerShortDescription'>Frontend Developer at Sonics</p>
                        </div>
                    </li>
                    <li className='communityFollowerItem'>
                        <img src={process.env.PUBLIC_URL + '/assets/userProfileImage1.png'} className='communityFollowerImage'/>
                        <div className='communityFollowerDetails'>
                            <p className='communityFollowerName'> Tunde Badamosi</p>
                            <p className='communityFollowerShortDescription'>Senior Developer at HNG</p>
                        </div>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default CommunityFollowers;
