import React, { useState } from "react";
import { Tile } from "@kiwicom/orbit-components";
import "./App.css";

function App() {
	  const [isMenuOpen, setIsMenuOpen] = useState(false);

	  const toggleMenu = () => {
		      setIsMenuOpen(!isMenuOpen);
		    };

	  return (
		      <div className="App">
		        <header>
		          <div className="burger-menu" onClick={toggleMenu}>
		            <div className="line"></div>
		            <div className="line"></div>
		            <div className="line"></div>
		          </div>
		          <div className="header-links">
		            <a href="/">Link1</a>
		            <a href="/">Link2</a>
		            <a href="/">Link3</a>
		          </div>
		        </header>
		        {isMenuOpen && (
				        <div className="menu-items">
				          <a href="/">Menu Item 1</a>
				          <a href="/">Menu Item 2</a>
				          <a href="/">Menu Item 3</a>
				        </div>
				      )}
		        <main>
		          <Tile raised title="Tile 1" />
		          <Tile raised title="Tile 2" />
		          <Tile raised title="Tile 3" />
		        </main>
		      </div>
		    );
}

export default App;

