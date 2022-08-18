import { useState } from 'react';
import './App.css'
import RoutingComponent from './containers/routingComponent';
import Header from './components/Header/Header';
import { useLocation } from 'react-router-dom';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const routeName = useLocation().pathname.split('/')[1];
  const isFormPage = routeName === 'signup' || routeName === 'signin';
  console.log(isFormPage);

  const onAuth = () => {
    setIsAuth(true);
  }

  return (
    <div className="App">
        <>
          {
            (!isFormPage) ?
            (
              <Header isAuth={isAuth}/>
            )
            :
            ('')
          }
        </>
        <RoutingComponent setAuth={onAuth}/>
    </div>
  );
}

export default App;
