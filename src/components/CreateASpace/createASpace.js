import React from 'react'
import './createASpace.css'
import { BsPlus } from "react-icons/bs";



const createASpace = () => {
  return (
    <div className='createASpace'>
        <BsPlus className='createASpaceIcon'/>
        <p>Create Space</p>
    </div>
  )
}

export default createASpace