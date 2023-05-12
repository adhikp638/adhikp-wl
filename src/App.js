import React, { useState } from "react";
import "./App.css";
import Tile from "./Tile";

function App() {
	  const [isOpen, setIsOpen] = useState(false);

	  const toggleMenu = () => setIsOpen(!isOpen);

	  return (
		      <div className="App">
		        <header className="App-header">
		          <div className="menu">
		            <button className="burger-icon" onClick={toggleMenu}>
		              <span className="line"></span>
		              <span className="line"></span>
		              <span className="line"></span>
		            </button>
		            {isOpen && (
				                <div className="menu-items">
				                  <a href="#">Menu Item 1</a>
				                  <a href="#">Menu Item 2</a>
				                  <a href="#">Menu Item 3</a>
				                </div>
				              )}
		          </div>
		          <div className="header-links">
		            <a href="#">Link 1</a>
		            <a href="#">Link 2</a>
		            <a href="#">Link 3</a>
		          </div>
		        </header>
		        <div className="tiles">
		          <Tile title="Tile 1" />
		          <Tile title="Tile 2" />
		          <Tile title="Tile 3" />
		        </div>
		      </div>
		    );
}

export default App;

