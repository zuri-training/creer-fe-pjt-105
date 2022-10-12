import SpaceCard from '../SpaceCard/SpaceCard'
import './ProfileItemsList.css'

const ProfileItemsList = ({ contentType, content }) => {
  return (
    <ul className='profile-items-list'>
        <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li>
        <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li>
        <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li>
        <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li>
        <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li>
    </ul>
  )
}

export default ProfileItemsList