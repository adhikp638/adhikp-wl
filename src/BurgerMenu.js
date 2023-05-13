import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  position: relative;
    display: inline-block;
    `;

const BurgerIcon = styled.div`
  width: 30px;
    height: 3px;
      background-color: black;
        margin: 5px 0;
	`;

const PopupContainer = styled.div`
  position: absolute;
    top: 35px;
      left: 0;
        width: 200px;
	  padding: 20px;
	    background-color: white;
	      border: 1px solid purple;
	        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		  z-index: 1;
		  `;

const MenuItem = styled.div`
  padding: 10px;
    &:hover {
        background-color: lightgray;
	  }
	  `;

const BurgerMenu = () => {
	  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	  return (
		      <MenuContainer>
		        <BurgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
		        {isMenuOpen && (
				        <PopupContainer>
				          <MenuItem>Menu Item 1</MenuItem>
				          <MenuItem>Menu Item 2</MenuItem>
				          <MenuItem>Menu Item 3</MenuItem>
				        </PopupContainer>
				      )}
		      </MenuContainer>
		    );
};

export default BurgerMenu;

