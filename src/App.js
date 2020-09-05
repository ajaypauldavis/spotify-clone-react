import React, { useEffect, useState } from 'react';
import Login from "./Login";
import './App.css';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  //use effect runs a code based on a given function
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if (_token){
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log('suer',user);
      });
    }
  }, []);
  return (
    <div className="App">
      { token ?
          <Player/>
          :<Login />
      }
    </div>
  )
}

export default App;
