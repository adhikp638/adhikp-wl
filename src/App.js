import React, { useEffect, useState } from 'react';
import logo from './wealthlane.svg';
import eq_comp_graph from './eq_comp_graph.png';
import BurgerMenu from "./BurgerMenu";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';

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
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>

    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image"><img src={eq_comp_graph} className="body-image"/></div>
       
        <div className="card-content">
              <p>
			<ul>
				<li><b><Zoom Right>$800 billion: </Zoom></b>The amount public companies will dish out as equity compensation over the next 10 years</li>
                        <li><b><Zoom Right>$40 billion: </Zoom></b> The amount tech companies will dish out in just Restricted Stock Units</li>
			</ul>			
              </p>

        </div>
          
    </Fade>
    </div>


    <div className="footer">
	<text>Some random content</text>
    </div>

    </div>
  );
}

export default App;
