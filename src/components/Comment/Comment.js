import { useState } from 'react';
import './Comment.css';
import { BiLike } from 'react-icons/bi';
import { RiReplyLine } from 'react-icons/ri';
import { Users } from '../../dummyData';

const Comment = ({ comment }) => {

    const [likes, setLikes] = useState(comment.likes);
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLikes(!isLiked ? likes +1 : likes -1);
        setIsLiked(!isLiked);
    }

    

    return (
        <div className='comment'>
           <div className='commentHeader'>
                <div className='commentHeaderLeftSide'>
                    <img src={process.env.PUBLIC_URL + Users.filter(u => u.id === comment.userId)[0].profilePicture} className='userprofileImage'/>
                    <div className='commentInfo'>
                        <p className='userName'>{Users.filter(u => u.id === comment.userId)[0].username}</p>
                        <p className='userTitle'>{Users.filter(u => u.id === comment.userId)[0].jobRole}</p>
                    </div>
                </div>
            </div>
            <div className='commentBody'>
                <p className='commentBodyText'>{comment.body}</p>
            </div>
            <div className='commentFooter'>
                <div className='commentfooterLeftSide'>
                    <div className='commentLikes' onClick={likeHandler}>
                        <BiLike className={`likeIcon ${comment.isLiked ? 'liked' : ''}`} size='1.5em'/>
                        <p className={`likeCounter ${comment.isLiked ? 'liked' : ''}`}>{likes}</p>
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
