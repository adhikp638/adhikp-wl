import React, { useRef, useEffect } from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ isMenuOpen, handleMenuClick }) => {
  const menuRef = useRef();

  const handleClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      handleMenuClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleMenuClick]);

  return (
    <div className="container" onClick={() => handleMenuClick(!isMenuOpen)}>
      <div className="burger-icon" />
      <div className="burger-icon" />
      <div className="burger-icon" />

      {isMenuOpen && (
        <div className="popup-container" ref={menuRef}>
          <div className="menu-item"><a href="https://wealthlane-participant-uat.wealthlane.co">Participant Login</a></div>
          <div className="menu-item"><a href="https://wealthlane-customer-uat.wealthlane.co">Admin Login</a></div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
