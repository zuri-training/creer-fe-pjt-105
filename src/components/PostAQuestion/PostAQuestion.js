import './PostAQuestion.css';

const PostAQuestion = () => {


    const openPostAQuestionBody = () => {
        const body = document.getElementById('postAQuestionBody');
        body.classList.toggle('noDisplay');
    }


    return (
        <div className='postAQuestion'>
            <div className='postAQuestionHeader'>
                <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' className='profileImage' />
                <div className='postAQuestionBtn' onClick={openPostAQuestionBody}>
                    <p>What's on your mind??</p>
                </div>
            </div>
            <div className='postAQuestionBody noDisplay' id='postAQuestionBody'>
                <div className='postAQuestionBodyTop'>
                    <p className='postAQuestionBody'><span className='userName'>David Adewole</span> is asking</p>
                </div>
                <div className='postAQuestionBodyCenter'>
                    <textarea name='question'  id='question' placeholder='Write something...'></textarea>
                </div>
                <div className='postAQuestionBodyBottom'>
                    <input className='posAQuestionBtn' type='submit' value='Ask Question'/>
                </div>
            </div>
        </div>
    )
}

export default PostAQuestion;
