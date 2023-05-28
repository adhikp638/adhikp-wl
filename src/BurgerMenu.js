import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <div className={`burger-menu-container ${isOpen ? 'open' : ''}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="menu-popup">
          <div className="menu-item" onClick={() => toggleSubMenu(1)}>
            Item 1
            {activeSubMenu === 1 && (
              <div className="sub-menu">
                <div className="sub-menu-item">Sub Menu 1</div>
                <div className="sub-menu-item">Sub Menu 2</div>
                <div className="sub-menu-item">Sub Menu 3</div>
              </div>
            )}
          </div>
          <div className="menu-item" onClick={() => toggleSubMenu(2)}>
            Item 2
            {activeSubMenu === 2 && (
              <div className="sub-menu">
                <div className="sub-menu-item">Sub Menu 4</div>
                <div className="sub-menu-item">Sub Menu 5</div>
                <div className="sub-menu-item">Sub Menu 6</div>
              </div>
            )}
          </div>
          <div className="menu-item" onClick={() => toggleSubMenu(3)}>
            Item 3
            {activeSubMenu === 3 && (
              <div className="sub-menu">
                <div className="sub-menu-item">Sub Menu 7</div>
                <div className="sub-menu-item">Sub Menu 8</div>
                <div className="sub-menu-item">Sub Menu 9</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
