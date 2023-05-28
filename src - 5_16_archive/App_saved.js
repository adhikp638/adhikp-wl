import React, { useState, useEffect } from "react";
import "./App.css";
import { Tile, Tabs, Tab } from "@kiwicom/orbit-components";
import BurgerMenu from "./BurgerMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    fetch("/content.json")
      .then((response) => response.json())
      .then((data) => setTiles(data.tiles))
      .catch((error) => console.error(error));
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newTabIndex) => {
    setActiveTab(newTabIndex);
  };

  return (
    <div className="App">
      <header>
        <BurgerMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
        <h1>My App</h1>
      </header>

      <main>
        {activeTab === 0 && (
          <div className="tile-container">
            {tiles.map((tile) => (
              <div key={tile.title} className="tile">
                <Tile title={tile.title} description={tile.content} />
              </div>
            ))}
          </div>
        )}

<Tabs activeTabIndex={activeTab} onTabChange={handleTabChange}>
  <Tab label="Tab 1">
    <div className="tile-container">
      {tiles.map((tile) => (
        <div key={tile.title} className="tile">
          <Tile title={tile.title} description={tile.content} />
        </div>
      ))}
    </div>
  </Tab>
  <Tab label="Tab 2">
    <div>Content for Tab 2</div>
  </Tab>
  <Tab label="Tab 3">
    <div>Content for Tab 3</div>
  </Tab>
</Tabs>
      </main>
    </div>
  );
}

export default App;
