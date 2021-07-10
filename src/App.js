import { useState } from 'react';
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import Homepage from './pages/Homepage/Homepage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        {/* When you are building a component/feature/page add it to here to see your changes in realtime */}
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/homepage">
              <Homepage />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
