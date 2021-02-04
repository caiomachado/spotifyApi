import React, {useEffect} from 'react';
import './global.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { getTokenFromUrl } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useStateContextValue} from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useStateContextValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({type: 'SET_TOKEN', token: _token})
      
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({type: 'SET_USER', user: user})
        dispatch({type: 'SET_PROFILE_PICTURE', profile_picture: user.images[0].url})
        dispatch({type: 'SET_USERNAME', username: user.display_name})
      })
    }
  }, [dispatch]);

  return (
    <>
      {
        token ? (
          <Dashboard spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </>
  );
}

export default App;
