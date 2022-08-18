import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage';
import Homepage from '../pages/Homepage/Homepage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

const routingComponent = ({ setAuth }) => {
  return (
    <>
        {/* When you are building a component/feature/page add it to here to see your changes in realtime when you do npm start*/}
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/signin' element={<SignIn setAuth={setAuth}/>}/>
          <Route path='/signup' element={<SignUp setAuth={setAuth}/>}/>
        </Routes>
    </>
  )
}

export default routingComponent