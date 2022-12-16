import logo from './logo.svg';
import './App.css';

function App() {

function onButtonClick() {
  window.open("amitdeeplink://amitdeeplink.com");
}

  return (
    <div className="App">
      <button onClick={onButtonClick}>Click</button>
    </div>
  );
}

export default App;
