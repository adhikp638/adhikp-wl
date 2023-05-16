import React, { useEffect, useState } from 'react';
import logo from './wealthlane.svg';
import BurgerMenu from "./BurgerMenu";
import Fade from 'react-reveal/Fade';
import './App.css';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <header>

        <BurgerMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
        <img src={logo} alt="logo" className="logo" />
	  <div className="header-links"> Home | About | Contact </div>

    </header>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>

    <div className="footer">
	<text>Some random content</text>
    </div>

    </div>
  );
}

export default App;
