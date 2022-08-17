// import { useState } from 'react';
import './App.css'
import RoutingComponent from './containers/routingComponent';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
        {/* <Header /> */}
        {/* When you are building a component/feature/page add it to here to see your changes in realtime when you do npm start*/}
        <RoutingComponent />
    </div>
  );
}

export default App;
