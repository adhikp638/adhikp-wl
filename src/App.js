/* App.js */
import "./App.css";
import Tile from "./Tile";
import React, { useState } from "react";

function App() {
	  const [tiles, setTiles] = useState([
		      { id: 1, text: "Tile 1" },
		      { id: 2, text: "Tile 2" },
		      { id: 3, text: "Tile 3" },
		    ]);

	  return (
		      <div className="App">
		        <header>
		          <div className="header-links">
		            <a href="/">Link 1</a>
		            <a href="/">Link 2</a>
		            <a href="/">Link 3</a>
		            <div className="burger-menu">
		              <div className="menu">
		                <a href="/">Link 1</a>
		                <a href="/">Link 2</a>
		                <a href="/">Link 3</a>
		              </div>
		              <svg
		                xmlns="http://www.w3.org/2000/svg"
		                width="32"
		                height="32"
		                viewBox="0 0 24 24"
		                fill="#ffffff"
		              >
		                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
		              </svg>
		            </div>
		          </div>
		        </header>
		        <div className="tile-container">
		          {tiles.map((tile) => (
				            <Tile key={tile.id} text={tile.text} />
				          ))}
		        </div>
		      </div>
		    );
}

export default App;
