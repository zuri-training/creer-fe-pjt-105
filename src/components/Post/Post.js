import './Post.css'
import { FaTimes } from 'react-icons/fa';

const Post = () => {
    return (
        <div className='post'>
            <div className='postHeader'>
                <div className='postHeaderLeftSide'>
                    <img src={process.env.PUBLIC_URL + '/assets/userProfileImage1.png'} className='userprofileImage'/>
                    <div className='postInfo'>
                        <p className='UserName'>Alexa James</p>
                        <p className='postTimeStamp'>10mins ago</p>
                    </div>
                </div>
                <div className='postHeaderRightSide'>
                    <FaTimes className='closeIcon'/>
                </div>
            </div>
            <div className='postBody'>
                <p className='postTitleText'>What languages should a junior developer focus on?</p>
                <p className='postBodyText'>Excepteur sint occaecat cupidatat non proidentt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Excepteur sint occaeca. Read more</p>
            </div>
            <div className='postFooter'>

            </div>
        </div>
    )
}

export default Post;
