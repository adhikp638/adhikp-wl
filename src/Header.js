import React, { useRef, useEffect, useState } from 'react';
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import logo from './wealthlane.svg';

function Header()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
var tracker=0;

const handleMenuClick = () => {
  setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen); //prevIsMenuOpen is automatically provided by React
  tracker=tracker+1;
  alert(tracker);
};


   return (
    <div>
    <div className="topBanner">abcde</div>
    <header>
        <BurgerMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
        <img src={logo} alt="logo" className="logo" />
	   <div>
		<Menu />
        </div>

    </header>
    </div>
   );
}

export default Header;