import Post from '../Post/Post';
import './Posts.css';
import { posts } from '../../dummyData';
import { useEffect } from 'react';


const Posts = () => {

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('http://creer-pjt-105.herokuapp.com/api/qanda/')
            const data = await res.json()
            
            console.log(data)
        }

        fetchPosts();
    }, [])

    return (
        <div className='posts'>

            {posts.map((p) => {
               return <Post key={p.id} post={p} />
            })}

        </div>
    )
}

export default Posts;
