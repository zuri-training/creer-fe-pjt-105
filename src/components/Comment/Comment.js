import './Comment.css';
import { BiLike } from 'react-icons/bi';
import { RiReplyLine } from 'react-icons/ri';

const Comment = () => {
    return (
        <div class='comment'>
           <div className='commentHeader'>
                <div className='commentHeaderLeftSide'>
                    <img src={process.env.PUBLIC_URL + '/assets/userProfileImage2.png'} className='userprofileImage'/>
                    <div className='commentInfo'>
                        <p className='userName'>Alexa James</p>
                        <p className='userTitle'>Senior Developer</p>
                    </div>
                </div>
            </div>
            <div className='commentBody'>
                <p className='commentBodyText'>Excepteur sint occaecat cupidatat non proidentt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Excepteur sint occaeca.</p>
            </div>
            <div className='commentFooter'>
                <div className='commentfooterLeftSide'>
                    <div className='commentLikes'>
                        <BiLike className='likeIcon' size='1.5em'/>
                        <p>5</p>
                    </div>
                    <div className='commentReply'>
                        <RiReplyLine className='replyIcon' size='1.5em'/>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;
