import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import HomePage from './pages/Homepage/Homepage';
import SignUp from './components/SignUp/SignUp';

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
        <LandingPage />
        <SignUp />
    </div>
  );
}

export default App;
