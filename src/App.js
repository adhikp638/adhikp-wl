
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function App() {
	  return (
		      <div>
		        <Menu styles={{ bmBurgerButton: { position: 'fixed', width: '36px', height: '30px', left: '36px', top: '36px' }, bmBurgerBars: { background: '#373a47' }, bmCrossButton: { height: '24px', width: '24px' }, bmCross: { background: '#bdc3c7' }, bmMenuWrap: { position: 'fixed', height: '100%' }, bmMenu: { background: '#373a47' }, bmMorphShape: { fill: '#373a47' }, bmItemList: { color: '#b8b7ad', padding: '0.8em' }, bmItem: { display: 'inline-block' }, bmOverlay: { background: 'rgba(0, 0, 0, 0.3)' } }}>>
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

