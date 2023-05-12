import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './App.css';

function App() {
	  return (
		      <div className="App">
		        <header>
		          <nav>
		            <Menu>
		              <a className="menu-item" href="/">
		                Link 1
		              </a>
		              <a className="menu-item" href="/">
		                Link 2
		              </a>
		              <a className="menu-item" href="/">
		                Link 3
		              </a>
		            </Menu>
		            <div className="header-links">
		              <a href="/">Link 1</a>
		              <a href="/">Link 2</a>
		              <a href="/">Link 3</a>
		            </div>
		          </nav>
		        </header>
		        <main>
		          <div className="tile" id="tile1">
		            <h2>Tile 1</h2>
		            <p>This is the content for Tile 1.</p>
		          </div>
		          <div className="tile" id="tile2">
		            <h2>Tile 2</h2>
		            <p>This is the content for Tile 2.</p>
		          </div>
		          <div className="tile" id="tile3">
		            <h2>Tile 3</h2>
		            <p>This is the content for Tile 3.</p>
		          </div>
		        </main>
		      </div>
		    );
}

export default App;

