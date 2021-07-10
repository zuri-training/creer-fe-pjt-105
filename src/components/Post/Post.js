import { useState } from 'react';
import './Post.css'
import { FaTimes } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { BiLike, BiBookmark } from 'react-icons/bi';
import Comments from '../Comments/Comments';
import { Users } from '../../dummyData';

const Post = ({ post, comments, onPostCommentsToggle }) => {

    const [likes, setLikes] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLikes(!isLiked ? likes +1 : likes -1);
        setIsLiked(!isLiked);
    }

    

    return (
        <div className='post'>
            <div className='postHeader'>
                <div className='postHeaderLeftSide'>
                    <img src={process.env.PUBLIC_URL + Users.filter(u => u.id === post.userId)[0].profilePicture} className='userprofileImage'/>
                    <div className='postInfo'>
                        <p className='userName'>{Users.filter(u => u.id === post.userId)[0].username}</p>
                        <p className='userTitle'>{Users.filter(u => u.id === post.userId)[0].jobRole},<span className='postTimeStamp'> {post.timeStamp}</span></p>
                    </div>
                </div>
                <div className='postHeaderRightSide'>
                    <FaTimes className='closeIcon'/>
                </div>
            </div>
            <div className='postBody'>
                <p className='postTitleText'>{post.title}</p>
                <p className='postBodyText'>{post?.body}</p>
                {/* <div className='postReadMore'><span className='postReadMoreBtn'>Read more</span></div> */}
            </div>
            <div className='postFooter'>
                <div className='footerLeftSide'>
                    <div className='postCommentIconHolder' id={post.id} onClick={() => onPostCommentsToggle(post.id)}>
                        <FiMessageSquare className='commentIcon' size='1.5em'/>
                        <p>{post.comments.length}</p>
                    </div>
                    <div className='postLikes' onClick={likeHandler}>
                        <BiLike className={`likeIcon ${post.isLiked ? 'liked' : ''}`} size='1.5em'/>
                        <p className={`likeCounter ${post.isLiked ? 'liked' : ''}`}>{likes}</p>
                    </div>
                </div>
                <div className='footerRightSide'>
                    <div className='postSave'>
                        <BiBookmark className='saveIcon' size='1.5em'/>
                    </div>
                </div>
            </div>
            <div className='postComments' id={post.id}>
                <div className='postAComment'>
                    <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' className='profileImage' />
                    <textarea name='comment'  id='comment' placeholder='Write something...'></textarea>
                    <input className='postACommentBtn' type='submit' value='Post Comment'/>
                </div>
                <Comments comments={post.comments}/>
            </div>
        </div>
    )
}

export default Post;
