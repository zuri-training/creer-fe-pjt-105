import './Comments.css';
import Comment from '../Comment/Comment';
// import { posts } from '../../dummyData';

const Comments = ({ comments }) => {
    return (
        <div>

          {comments.map((c) => {
            return <Comment key={c.id} comment={c}/>
          })}
        </div>
    )
}

export default Comments;
