import React from 'react';
import {FiSkipBack, FiSkipForward, FiPause, FiPlay, FiVolume2} from 'react-icons/fi'
import {useStateContextValue} from '../../StateProvider';
import DefaultSpotifyLogo from '../../images/default/spotify-photo.jpg'

import { FooterWrapper } from './styles';

const Footer = ({spotify}) => {
  const [{playing}, dispatch] = useStateContextValue()

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };
  
  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <FooterWrapper>
      <div className="player-left">
        <div className="song-details">
          <img src={DefaultSpotifyLogo} alt="Logo Spotify"/>
          <div className="name-author">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        </div>
      </div>
      <div className="player-center">
        <FiSkipBack className="player-button" size={30} color="#1db954" onClick={skipPrevious}/>
        {playing ? 
          <FiPause className="player-button" size={30} color="#1db954" onClick={handlePlayPause} /> : 
          <FiPlay className="player-button" size={30} color="#1db954" onClick={handlePlayPause}/>
        }
        <FiSkipForward className="player-button" size={30} color="#1db954" onClick={skipNext}/>
      </div>
      <div className="player-right">
        <FiVolume2 className="player-button" size={30} color="#1db954"/>
      </div>
    </FooterWrapper>
  )
}

export default Footer;