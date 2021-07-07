import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {

    const postCommentsToggle = () => {
        const postComments = document.querySelectorAll('.postComments');
        // postComments.classList.toggle('noDisplay');

        postComments.forEach(e => {
            console.log(e.getAttribute('id'))
        })
    }
  

    return (
        <div className='posts'>
            <Post onPostCommentsToggle={postCommentsToggle}/>
            <Post onPostCommentsToggle={postCommentsToggle}/>
            <Post onPostCommentsToggle={postCommentsToggle}/>
            <Post onPostCommentsToggle={postCommentsToggle}/>
        </div>
    )
}

export default Posts;
