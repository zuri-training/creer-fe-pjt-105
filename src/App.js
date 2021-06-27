import './App.css'
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
        {/* When you are building a component/feature/page add it to here to see your changes in realtime */}
        <Homepage />
    </div>
  );
}

export default App;
