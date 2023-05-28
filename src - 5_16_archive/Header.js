import React, { useRef, useEffect, useState } from 'react';
import BurgerMenu from "./BurgerMenu";
import logo from './wealthlane.svg';

function Header()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuClick = () => {
  setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen); //prevIsMenuOpen is automatically provided by React
};

   return (
    <div>
    <header>

        <BurgerMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
        <img src={logo} alt="logo" className="logo" />
	  < div className="header-links"> Home | About | Contact </div>

    </header>
    </div>
   );
}

export default Header;