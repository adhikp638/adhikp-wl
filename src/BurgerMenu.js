.App {
	  font-family: sans-serif;
	  text-align: center;
}

.top-row {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background-color: #f5f5f5;
	  padding: 10px;
	  position: relative;
}

.burger-menu {
	  font-size: 24px;
	  cursor: pointer;
	  margin-right: 10px;
}

.menu-popup {
	  position: absolute;
	  top: 100%;
	  right: 0;
	  background-color: #fff;
	  border: 1px solid purple;
	  border-radius: 5px;
	  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	  padding: 10px;
	  z-index: 1;
	  opacity: ${(props) => (props.isMenuOpen ? "1" : "0")};
	  transform: translateY(${(props) => (props.isMenuOpen ? "0" : "-10px")});
	  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.menu-item {
	  margin: 10px;
	  cursor: pointer;
}

.menu-item:hover {
	  color: purple;
}

.tile-row {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 10px;
	  background-color: #f5f5f5;
}

.tile {
	  width: 30%;
	  height: 150px;
	  background-color: #fff;
	  border-radius: 5px;
	  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	  padding: 20px;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  transition: transform 0.3s ease-out;
}

.tile:hover {
	  transform: translateY(-10px);
}

