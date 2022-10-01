import { useState } from 'react';
import './Community.css';
import Header from '../../components/Header/Header';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';

const CommunityPage = () => {

    const [viewState, setViewState] = useState('posts');


    return (
        <div className='communityPage'>
            {/* Header */}
            <Header />

            {/* Cpmmunity Header */}
            <div className='communityHeader'>
                <img className='communityHeaderBackgroundImage' src={process.env.PUBLIC_URL + '/assets/communityBackgroundImage1.jpg'} alt=''/>
                {/* <div className='communityHeaderGradientLayer'></div>  */}
                <div className='communityHeaderBiggerImageHolder'>
                    <img className='communityHeaderBiggerImage' src={process.env.PUBLIC_URL + '/assets/communityBackgroundImage1.jpg'} alt=''/> 
                </div>
                <div className='communityHeaderSmallerImageHolder'>
                    <img className='communityHeaderSmallerImage' src={process.env.PUBLIC_URL + '/assets/communitySmallerImage.png'} alt=''/> 
                </div>
                <div className='communityHeaderDetails'>
                    <div className='commmunityHeaderDetailsLeft'>
                        <p className='communityHeaderDetailsNameText'>Beginner coder</p>
                        <p className='communityHeaderDetailsDescriptionText'>trying to learn programing and coding as a  beginner</p>
                        <p className='communityHeaderDetailsFollowersText'>2K followers</p>
                    </div>
                    <div className='commmunityHeaderDetailRight'>
                        <button className='commmunityHeaderFollowBtn'>Follow</button>
                        <button className='commmunityHeaderInviteBtn'>Invite</button>
                    </div>
                </div>
            </div>

            {/* Community Body */}
            <main className='communityBody'>
                <div className='communityBodyLeft'>
                    <div className='postAQuestionBodyTop'>
                        <ul className='postAQuestionNavBar'>
                            <li id='AskAQuestionViewButton' className={`${(viewState === 'about') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('about')}>About</li>
                            <li id='makeAPostViewButton' className={`${(viewState === 'posts') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('posts')}>Posts</li>
                        </ul>
                    </div>
                    <Feed /> 
                </div>
                <div className='communityBodyRight'>
                    <RightBar communityPage/>
                </div>
            </main>
            
        </div>
    )
}

export default CommunityPage;