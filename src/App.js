import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> HELLO KEDAAAAR....123 and 234 </h1>
	  <button size=20 onClick='clicked()'/>
      </header>
    </div>
  );
}
function clicked() {
 this.document.h1.text="blah";
}
export default App;
