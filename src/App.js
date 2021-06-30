import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
        {/* When you are building a component/feature/page add it to here to see your changes in realtime */}
        <LandingPage />
    </div>
  );
}

export default App;
