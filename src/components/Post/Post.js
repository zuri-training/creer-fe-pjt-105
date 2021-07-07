import './Post.css'
import { FaTimes } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { BiLike, BiBookmark } from 'react-icons/bi';
import Comments from '../Comments/Comments';

const Post = ({ onPostCommentsToggle }) => {

    return (
        <div className='post'>
            <div className='postHeader'>
                <div className='postHeaderLeftSide'>
                    <img src={process.env.PUBLIC_URL + '/assets/userProfileImage1.png'} className='userprofileImage'/>
                    <div className='postInfo'>
                        <p className='userName'>Alexa James</p>
                        <p className='userTitle'>Senior Developer</p>
                    </div>
                </div>
                <div className='postHeaderRightSide'>
                    <FaTimes className='closeIcon'/>
                </div>
            </div>
            <div className='postBody'>
                <p className='postTitleText'>What languages do junior develpers learn nowadays when starting out??</p>
                <p className='postBodyText'>Excepteur sint occaecat cupidatat non proidentt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Excepteur sint occaeca.</p>
                <div className='postReadMore'><span className='postReadMoreBtn'>Read more</span></div>
            </div>
            <div className='postFooter'>
                <div className='footerLeftSide'>
                    <div className='postCommentIconHolder' onClick={onPostCommentsToggle}>
                        <FiMessageSquare className='commentIcon' size='1.5em'/>
                        <p>56</p>
                    </div>
                </div>
                <div className='footerRightSide'>
                    <div className='postLikes'>
                        <BiLike className='likeIcon' size='1.5em'/>
                        <p>23</p>
                    </div>
                    <div className='postSave'>
                        <BiBookmark className='saveIcon' size='1.5em'/>
                        <p>103</p>
                    </div>
                </div>
            </div>
            <div className='postComments noDisplay' id='postComments'>
                <div className='postAComment'>
                    <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' className='profileImage' />
                    <textarea name='comment'  id='comment' placeholder='Write something...'></textarea>
                    <input className='postACommentBtn' type='submit' value='Post Comment'/>
                </div>
                <Comments />
            </div>
        </div>
    )
}

export default Post;
