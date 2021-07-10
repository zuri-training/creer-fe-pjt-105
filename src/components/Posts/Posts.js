import Post from '../Post/Post';
import './Posts.css';
import { posts } from '../../dummyData';

const Posts = () => {

    // const postCommentsToggle = () => {
    //     const postComments = document.getElementById('id');
    //     const post = document.getElementById('id');
    //     // const commentButton = document.querySelectorAll('.postCommentIconHolder');

    //     if (postComments.id === post.id ) {
    //         postComments.classList.toggle('noDisplay');
    //     }

    // }

    // onPostCommentsToggle={postCommentsToggle}

    const postCommentsToggle = (id) => {
        const postComments = document.querySelectorAll('.postComments');
        // const commentButton = document.querySelectorAll('.postCommentIconHolder');
        // if (postComments.id === id ) {
        //     postComments.classList.toggle('noDisplay');
        // }

        console.log(id, postComments);
        
        

    }
  

    return (
        <div className='posts'>

            {posts.map((p) => {
               return <Post key={p.id} post={p} onPostCommentsToggle={postCommentsToggle}/>
            })}

        </div>
    )
}

export default Posts;
