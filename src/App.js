import React, { useState } from 'react';
import './App.css';

function App() {
	  const [menuOpen, setMenuOpen] = useState(false);

	  const toggleMenu = () => {
		      setMenuOpen(!menuOpen);
		    };

	  return (
		      <div className="App">
		        <header className="App-header">
		          <div className="container">
		            <div className="menu-icon" onClick={toggleMenu}>
		              <div className="menu-icon__line"></div>
		              <div className="menu-icon__line"></div>
		              <div className="menu-icon__line"></div>
		            </div>
		            <nav className={`navbar ${menuOpen ? "show" : ""}`}>
		              <ul>
		                <li><a href="#">Menu Item 1</a></li>
		                <li><a href="#">Menu Item 2</a></li>
		                <li><a href="#">Menu Item 3</a></li>
		              </ul>
		            </nav>
		            <div className="header-links">
		              <a href="#">Link 1</a>
		              <a href="#">Link 2</a>
		              <a href="#">Link 3</a>
		            </div>
		          </div>
		        </header>
		        <div className="App-body">
		          <div className="tile">
		            <h2>Tile 1</h2>
		          </div>
		          <div className="tile">
		            <h2>Tile 2</h2>
		          </div>
		          <div className="tile">
		            <h2>Tile 3</h2>
		          </div>
		        </div>
		      </div>
		    );
}

export default App;

