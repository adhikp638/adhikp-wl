import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import logo from './wealthlane.svg';
import BurgerMenu from "./BurgerMenu";

function App() {

  const [activeTab, setActiveTab] = useState("/");

  const handleTabClick = (path) => {
    setActiveTab(path);
  };


  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event

function handleScroll() {
  var elements = document.querySelectorAll('.fadeIn');
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

  useEffect(() => {
    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Check initial visibility
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="App">
      <header>
        <div>
          <BurgerMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
        </div>
        <img src={logo} alt="logo" className="logo" />
      </header>
      <Router>
        <table border="2" className="fadeIn">
          <thead>
            <tr>
<NavLinkWithActiveStyle
  to="/"
  exact
  setActiveTab={setActiveTab}
  activeTab={activeTab}
>
  Home
</NavLinkWithActiveStyle>
<NavLinkWithActiveStyle
  to="/about"
  setActiveTab={setActiveTab}
  activeTab={activeTab}
>
  About
</NavLinkWithActiveStyle>
<NavLinkWithActiveStyle
  to="/contact"
  setActiveTab={setActiveTab}
  activeTab={activeTab}
>
  Contact
</NavLinkWithActiveStyle>
            </tr>
          </thead>
        </table>
<div className="fadeIn"><img src="./drunken_night.jpg" /></div>

        <div style={{ border: '2px solid black', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}	

function Home() {
  return <h2>aaaRGH!!</h2>;
}

function About() {
  return (
    <div>
      <h2 className="fadeIn">About Us</h2>
      <p className="fadeIn">We are a team of professionals dedicated to providing the best services.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lectus vel nisi tristique, et pulvinar odio
        scelerisque. Quisque eu lectus eu dolor sagittis consectetur.
      </p>
    </div>
  );
}

function NavLinkWithActiveStyle({ to, exact, children, setActiveTab, activeTab }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const activeStyle = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '5px 10px',
  };

  const regularStyle = {
    backgroundColor: 'grey',
    color: 'black',
    padding: '5px 10px',
  };

  const style = isActive ? activeStyle : regularStyle;

  const handleClick = () => {
    setActiveTab(to);
  };

  return (
    <th className="nav-link" style={style} onClick={handleClick}>
      <Link to={to}>{children}</Link>
    </th>
  );
}

export default App
