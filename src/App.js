import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function App() {
	  return (
		      <div>
		        <Menu>
		          <a className="menu-item" href="/">
		            Home
		          </a>
		          <a className="menu-item" href="/about">
		            About
		          </a>
		          <a className="menu-item" href="/contact">
		            Contact
		          </a>
		        </Menu>
		        <h1>Welcome to my React app!</h1>
		        <p>This is my first React app with a burger menu.</p>
		      </div>
		    );
}

export default App;
