import { useState } from "react";
import { Tile } from "@kiwicom/orbit-components";
import BurgerMenu from './BurgerMenu';
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
		          {isMenuOpen && (
				            <div className="menu-container">
				              <div className="menu-items">
				                <a href="/">Menu Item 1</a>
				                <a href="/">Menu Item 2</a>
				                <a href="/">Menu Item 3</a>
				              </div>
				            </div>
				          )}
		        </header>
		        <main>
		          <Tile title="Tile 1" />
		          <Tile title="Tile 2" />
		          <Tile title="Tile 3" />
		        </main>
		      </div>
		    );
}

export default App;

