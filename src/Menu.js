import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = ({ position }) => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuPosition, setSubMenuPosition] = useState('right');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
    setIsSubMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    setIsSubMenuOpen((prevState) => !prevState);
  };

  const handleSubMenuPosition = () => {
    const menuRect = menuRef.current.getBoundingClientRect();
    const menuWidth = menuRect.width;
    const menuLeft = menuRect.left;
    const menuRight = menuRect.right;
    const windowWidth = window.innerWidth;

    if (position === 'top-right' && (menuRight + menuWidth) > windowWidth) {
      setSubMenuPosition('left');
    } else if (position === 'top-left' && menuLeft < 0) {
      setSubMenuPosition('right');
    } else if (position === 'bottom-right' && (menuRight + menuWidth) > windowWidth) {
      setSubMenuPosition('left');
    } else if (position === 'bottom-left' && menuLeft < 0) {
      setSubMenuPosition('right');
    } else {
      setSubMenuPosition('right');
    }
  };

  useEffect(() => {
    handleSubMenuPosition();
  }, [isOpen]);

  return (
    <div ref={menuRef} className={`menu-container ${position}`}>
      <div className="menu-trigger" onClick={handleMenuClick}></div>
      {isOpen && (
        <div className={`menu-popup ${isSubMenuOpen ? 'sub-menu-open' : ''} ${subMenuPosition}`}>
          <ul className="menu-items">
            <li onClick={handleMenuItemClick}>Menu Item 1</li>
            <li onClick={handleMenuItemClick}>Menu Item 2</li>
            <li onClick={handleMenuItemClick}>Menu Item 3</li>
          </ul>
          {isSubMenuOpen && (
            <div className={`sub-menu-popup ${subMenuPosition}`}>
              <ul className="sub-menu-items">
                <li>Sub Menu Item 1</li>
                <li>Sub Menu Item 2</li>
                <li>Sub Menu Item 3</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Menu.propTypes = {
  position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']).isRequired,
};

export default Menu;
