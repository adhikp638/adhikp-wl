import React, { useRef, useEffect, useState } from 'react';
import './BurgerMenu.css';
import Fade from 'react-reveal/Fade';


const BurgerMenu = ({ isMenuOpen, handleMenuClick }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        handleMenuClick(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleMenuClick, isMenuOpen]);

  return (
    <div className="container" onClick={() => handleMenuClick(!isMenuOpen)}>
      <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`} />
      <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`} />
      <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`} />
      <div className={`popup-container ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
      <div className="close-btn">
		<div className="burger-icon-open"/>
		<div className="burger-icon-open"/>
		<div className="burger-icon-open"/>
       </div>
	 <div>&nbsp;</div>

        <a href="https://wealthlane-participant-uat.wealthlane.co" className="menu-item-link"><div className="menu-item">Participant Login</div></a>
        <a href="https://wealthlane-customer-uat.wealthlane.co" className="menu-item-link"><div className="menu-item">Admin Login</div></a>
      </div>
    </div>
  );
};

export default BurgerMenu;
