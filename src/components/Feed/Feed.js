import './Feed.css';
import Posts from '../Posts/Posts'
import PostAQuestion from '../PostAQuestion/PostAQuestion';

const Feed = () => {
    return (
        <div className='feed'>
            <PostAQuestion />
            <Posts />
        </div>
    )
}

export default Feed;
