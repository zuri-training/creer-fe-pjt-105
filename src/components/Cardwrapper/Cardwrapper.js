import './Cardwrapper.css'

const Cardwrapper = ({ children }) => {
  return (
    <div className='cardwrapper-container'>
        <header className='cardwrapper-header'>Contributors</header>
        {children}
        <footer className='cradwrapper-footer'>View More</footer>
    </div>
  )
}

export default Cardwrapper