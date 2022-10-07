import './Contributors.css'
import ContentWrapper from '../ContentWrapper/ContentWrapper'

const Contributors = () => {
  return (
    <ContentWrapper type={'list'}>
        <header className='contentWrapper-header'>
            <p className='contentWrapper-title contentWrapper-header-text'>102 Contributors</p>
            {/* <p className='contentWrapper-header-text'>view all</p> */}
        </header>
        <ul className='contentWrapper-list'>
            <li className='contentWrapper-list-item'>What's the best stack for build a social platform?</li>
            <li className='contentWrapper-list-item'>What should i do to get my first job in tech?</li>
            <li className='contentWrapper-list-item'>What's the most common error in learning to code?</li>
            <li className='contentWrapper-list-item'>What's the React library for?</li>
            <li className='contentWrapper-list-item'>What's the best job in tech?</li>
        </ul>
        <footer className='contentWrapper-footer'>View all</footer>
    </ContentWrapper>
)
}

export default Contributors