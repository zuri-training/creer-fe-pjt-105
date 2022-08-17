import { useState } from 'react';
import './App.css'
import RoutingComponent from './containers/routingComponent';
import Header from './components/Header/Header';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [formPage, setFormPage] = useState(false)

  const headerController = () => {
    if(formPage) {
      setFormPage(true)
    } else {
      setFormPage(false)
    }
  }

  return (
    <div className="App">
        <>
          {
            (!formPage) ?
            (
              <Header isAuth={isAuth}/>
            )
            :
            ('')
          }
        </>
        <RoutingComponent isFormPage={headerController} />
    </div>
  );
}

export default App;
