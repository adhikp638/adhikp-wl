import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ isMenuOpen, handleMenuClick }) => {
  const menuRef = React.useRef();

  const handleClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      handleMenuClick();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleMenuClick]);

  return (
    <div className={`menu-container ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
      <div className="burger-icon"></div>
      <div className="burger-icon"></div>
      <div className="burger-icon"></div>

      {isMenuOpen && (
        <div className="popup-container" ref={menuRef}>
          <div className="menu-item">Menu Item 1</div>
          <div className="menu-item">Menu Item 2</div>
          <div className="menu-item">Menu Item 3</div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
