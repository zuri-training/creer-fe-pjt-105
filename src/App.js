import { useState } from 'react';
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import Homepage from './pages/Homepage/Homepage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CommunityPage from './pages/CommunityPage/CommunityPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {

  // const showFaqsAnswer = (event) => {
  //   // const addButton = document.querySelectorAll('.addBtn');
  //   const btn = document.getElementById('1');
  //   const buttonId = btn.getAttribute('id');

  //   const answer = document.getElementById('1');
  //   const answerId = answer.getAttribute('id');

  //   // const answer = document.querySelectorAll('.faqsAnswer');

  //   (buttonId === answerId) ? answer.classList.toggle('active') : console.log('not the same');

  // }

  return (
    <div className="App">
<<<<<<< HEAD
      {/* When you are building a component/feature/page add it to here to see your changes in realtime when you do npm start*/}
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>

=======
        {/* When you are building a component/feature/page add it to here to see your changes in realtime when you do npm start*/}
        <Router>
          <Switch>
            <Route exact path="/creer-fe-pjt-105">
              <LandingPage />
            </Route>
            <Route exact path="/creer-fe-pjt-105/homepage">
              <Homepage />
            </Route>
            <Route exact path="/creer-fe-pjt-105/signin">
              <SignIn />
            </Route>
            <Route exact path="/creer-fe-pjt-105/signup">
              <SignUp />
            </Route>
            <Route exact path='/creer-fe-pjt-105/communitypage'>
              <CommunityPage />
            </Route>
            <Route exact path='/creer-fe-pjt-105/profile'>
              <ProfilePage />
            </Route>
          </Switch>
        </Router>

        {/* <CommunityPage /> */}
        
>>>>>>> f7c78abc4214b9ee6347ce06d2d657f2dfbd01d9
    </div>
  );
}

export default App;
