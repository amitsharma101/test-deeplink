import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from "./About.js";
import { BrowserRouter } from 'react-router-dom'
import auth0 from 'auth0-js';

function App() {

function onButtonClick() {
  // window.location.href = "amitdeeplink://amitdeeplink.com"
  // window.location = "amitdeeplink://amitdeeplink.com"
  // window.open("amitdeeplink://amitdeeplink.com");

  var webAuth = new auth0.WebAuth({
    domain:       'neobrix-gamepay.us.auth0.com',
    clientID:     'QclomwNvig31IxmYN4URxlo8ECTO0A4G',
    responseType: 'token',
    redirectUri: 'amitdeeplink://amitdeeplink.com',
  });

  // Trigger login with google
  webAuth.authorize({
    connection: 'google-oauth2'
  });
}

  return (
    <>
    <div className="App">
      <button onClick={onButtonClick}>Click</button>
    </div>

    <BrowserRouter>
      <Routes>
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
