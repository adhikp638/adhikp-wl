import React, { useState, useEffect, useRef } from 'react';
import './Menu.css'; // Import your CSS file

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const menuRef = useRef(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (activeIndex !== null) {
      const subMenu = menuRef.current.querySelector(`.menu-item-${activeIndex} .sub-menu`);
      if (subMenu) {
        subMenu.classList.add('fade-in');
      }
    }
  }, [activeIndex]);

  return (
    <div className="menu-container" ref={menuRef}>
      <ul className="menu">
        <li
          className={`menu-item menu-item-0${activeIndex === 0 ? ' active' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          Item 1 {activeIndex === 0 ? '>' : 'V'}
          <div className="sub-menu">
            <div className="sub-menu-content">
              <ul>
                <li>Sub-Item 1</li>
                <li>Sub-Item 2</li>
                <li>Sub-Item 3</li>
              </ul>
            </div>
          </div>
        </li>
        <li
          className={`menu-item menu-item-1${activeIndex === 1 ? ' active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          Item 2 {activeIndex === 1 ? '>' : 'V'}
          <div className="sub-menu">
            <div className="sub-menu-content">
              <ul>
                <li>Sub-Item 1</li>
                <li>Sub-Item 2</li>
                <li>Sub-Item 3</li>
              </ul>
            </div>
          </div>
        </li>
        <li
          className={`menu-item menu-item-2${activeIndex === 2 ? ' active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          Item 3 {activeIndex === 2 ? '>' : 'V'}
          <div className="sub-menu">
            <div className="sub-menu-content">
              <ul>
                <li>Sub-Item 1</li>
                <li>Sub-Item 2</li>
                <li>Sub-Item 3</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
