import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import auth0 from 'auth0-js';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    var webAuth = new auth0.WebAuth({
      domain:       'neobrix-gamepay.us.auth0.com',
      clientID:     process.env.REACT_APP_CLIENT_ID,
      responseType: 'id_token token',
        redirectUri: 'neobrix://s9y.gg',
    });
  
    // Trigger login with google
    webAuth.authorize({
      connection: 'google-oauth2'
    });
  }, [])

function onButtonClick() {
  // window.location.href = "amitdeeplink://amitdeeplink.com"
  // window.location = "amitdeeplink://amitdeeplink.com"
  // window.open("amitdeeplink://amitdeeplink.com");

  var webAuth = new auth0.WebAuth({
    domain:       'neobrix-gamepay.us.auth0.com',
    clientID:     process.env.REACT_APP_CLIENT_ID,
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

    </>
  );
}

export default App;
