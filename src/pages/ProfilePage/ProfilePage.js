import './ProfilePage.css';
import { FaTimes, FaGraduationCap } from 'react-icons/fa';
import { TbCake } from "react-icons/tb";
import { IoLocationOutline, IoAdd } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
// import { SlGraduation } from "react-icons/sl";
import Posts from '../../components/Posts/Posts';

const ProfilePage = () => {
    return (
        <div className='profilePage'>
            {/* <div className='profilePageContainer'> */}

                {/* Profile Page Body */}
                <main className='profilePageContainer'>
                    <div className='profilePageBodyLeft'>
                        <div className='profilePageBodyTop'>
                            <div className='profileImageAndName'>
                                <img className='profilePageImage' src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt=''/>
                                <div className='profileNameAndShortDescription'>
                                    <p className='profilePageName'>Tolulope Daniels</p>
                                    <p className='profilePageShortDescription'>Frontend Developer at Zuri Team</p>
                                </div>
                            </div>
                            {/* <div className='profilePageDescription'>
                                <p className='profilePageDescriptionText'>My youtube channel: www.chandler.youtube.com</p>
                            </div> */}
                        </div>
                        <div className='profilePageBodyCenter'>
                            <div className='profilePageStatsHolder'>
                                <div className='profilePagePostsHolder'>
                                    <p className='profilePageStatsText'>20 Posts</p>
                                </div>
                                <div className='postsBody noDisplay'>
                                    <Posts />
                                </div>
                                <div className='profilePageFollowersHolder'>
                                    <p className='profilePageStatsText'>2000 Followers</p>
                                </div>
                                <div className='followersBody noDisplay'>
                                    <Posts />
                                </div>
                                <div className='profilePageFollowingHolder'>
                                    <p className='profilePageStatsText'>300 Following</p>
                                </div>
                                <div className='followingBody noDisplay'>
                                    <Posts />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profilePageBodyRight'>
                        <div className='profilePageCredentials'>
                            <div className='profilePageCredentialsHeader'>
                                <p className='profilePageCredentialsHeaderText'>Personal Details</p>
                                <BiPencil className='editIcon'/>
                            </div>
                            <div className='profilePageCredentialsBody'>
                                <div className='profilePageCredential'>
                                    <MdWorkOutline className='editIcon'/> 
                                    <p className='profilePageCredentialText'>Add Work Details</p>
                                </div>
                                <div className='profilePageCredential'>
                                    <FaGraduationCap className='editIcon'/> 
                                    <p className='profilePageCredentialText'>Add Education Details</p>
                                </div>
                                <div className='profilePageCredential'>
                                    <IoLocationOutline className='editIcon'/> 
                                    <p className='profilePageCredentialText'>Add Location Details</p>
                                </div>
                                <div className='profilePageCredential'>
                                    <TbCake className='editIcon'/> 
                                    <p className='profilePageCredentialText joinDate'>Joined June 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className='profilePageCreateACommunity'>
                            <div className='profilePageCreateACommunityHeader'>
                                <p className='profilePageCreateACommunityHeaderText'>Communities</p>
                            </div>
                            <div className='profilePageCreateACommunityBody'>
                                <div className='createACommunityButton'>
                                    <IoAdd className='createACommunityIcon' />
                                    <p className='createACommunityText'>Create A Community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
            </div>
        // </div>
        
    )
}

export default ProfilePage;
