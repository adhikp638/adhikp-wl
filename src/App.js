import { useState } from "react";
import "./App.css";

function App() {
	  const [isActive, setActive] = useState(false);

	  const handleToggle = () => {
		      setActive(!isActive);
		    };

	  return (
		      <div className="App">
		        <header>
		          <nav>
		            <div className="burger-icon" onClick={handleToggle}>
		              <span></span>
		              <span></span>
		              <span></span>
		            </div>
		            <div className={`header-links ${isActive ? "active" : ""}`}>
		              <a href="#">Link 1</a>
		              <a href="#">Link 2</a>
		              <a href="#">Link 3</a>
		            </div>
		          </nav>
		        </header>
		        <main>
		          <div className="tile">
		            <h2>Tile 1</h2>
		            <p>Some content here</p>
		          </div>
		          <div className="tile">
		            <h2>Tile 2</h2>
		            <p>Some content here</p>
		          </div>
		          <div className="tile">
		            <h2>Tile 3</h2>
		            <p>Some content here</p>
		          </div>
		        </main>
		      </div>
		    );
}

export default App;

