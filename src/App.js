import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Home } from './pages/Home';
import './scss/app.scss';



function App() {
  
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
      <div className="content">
        <div className="container">
          <Home/>
          
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;
