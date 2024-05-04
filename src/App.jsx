import React from 'react';
import "./style.css";
import Navlist from './assets/components/Navlist';
import Navlogo from './assets/components/Navlogo';
import LogoChikito from './assets/img/LogoChikito.png';

const App = () => {

  const linkList = ["Home", "About", "Contact"];

  const handleLogin = () => {
    console.log("tombol login ditekan");
  }

  const handleRedirect = (item) => {
    console.log(`redirect to ${item}`);
  }

  return (
    <div>
      <div className='navbar-wrapper'>
        <div className="navbar-container">
          <Navlogo logo={LogoChikito} />
          <Navlist data={linkList} handleRedirect={handleRedirect} />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default App;