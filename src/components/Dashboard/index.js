import React, {useState, useEffect} from 'react';
import Weather from '../Weather';
import Footer from '../Footer';
import { Board, ContentWrapper } from './styles';
import {useStateContextValue} from '../../StateProvider';
import {FiLogOut, FiPlay, FiTrash2} from 'react-icons/fi'
import {IoIosAddCircleOutline} from 'react-icons/io'



const Dashboard = ({spotify}) => {
  const [{temperature, profile_picture, username, playlists, playlist, search_result}, dispatch] = useStateContextValue()
  const [image, setImage] = useState(null)
  const [name, setName] = useState(null)
  const [duration, setDuration] = useState(null)
  const [playlistId, setPlaylistId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const logOut = () => {
    dispatch({type: 'SET_TOKEN', token: ''})
  }

  const getSongInfo = (index) => {
    setImage(playlist.tracks.items[index].track.album.images[0].url)
    setName(playlist.tracks.items[index].track.name)
    setDuration(playlist.tracks.items[index].track.duration_ms)
  }

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:${id}`,
      })
      .then((res) => {
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
      });
  };

  useEffect(() => {
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({type: 'SET_PLAYLISTS', playlists: playlists})
    })
  }, [spotify, dispatch, playlists])

  useEffect(() => {
    spotify.getPlaylist(playlistId).then(response => {
      dispatch({type: 'SET_PLAYLIST', playlist: response})
    })
  }, [spotify, dispatch, playlistId])

  
  const addPlayList = () => {
    // write your own user_id in the first argument
    spotify.createPlaylist('ENTER YOUR USER_ID', {name: inputValue}).then((playlist) => {
      dispatch({type: 'SET_PLAYLISTS', playlists: playlist})
      setIsModalOpen(false)
      setInputValue('')
    })
  }

  const getPlaylistId = (id) => {
    if (id === playlistId) {
      return playlistId
    } else {
      setPlaylistId(id)
    }
  }

  const handleDelete = (id_playlist) => {
    spotify.unfollowPlaylist(id_playlist).then(() => {
      dispatch({
        type: 'SET_PLAYLISTS', 
        playlists: playlists,
      })
    })
  };

  const searchSongs = (e) => {
    e.preventDefault()
    spotify.search(searchValue, ['track'], {limit: 50, offset: 5}).then(songs => {
      dispatch({type: 'SET_SEARCH_RESULT', search_result: songs.tracks})
      setSearchValue('')
    })
  }

  const addToPlaylist = (uri) => {
    spotify.addTracksToPlaylist(playlistId, [uri]).then(playlist => {
      dispatch({type: 'SET_PLAYLIST', playlist: playlist})
    })
  }

  const deleteTrackFromPlaylist = (uri) => {
    spotify.removeTracksFromPlaylist(playlistId, [{'uri': uri}]).then(playlist => {
      dispatch({type: 'SET_PLAYLIST', playlist: playlist})
    })
  }

  return (
    <>
      {
        temperature ? (
          <Board>
            <Weather />
            <ContentWrapper>
              <div className="user-info">
                <div className="searchbar">
                  <form onSubmit={searchSongs}>
                    <input 
                      type="text" 
                      placeholder="Search for a song"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)} 
                    />
                  </form>
                  <ul className="list-of-songs">
                    {search_result?.items?.map((item) => (
                      <li className="result-info" key={item.id}>
                        <IoIosAddCircleOutline 
                          className="add-song" 
                          size={15} 
                          color="#1db954"
                          onClick={() => addToPlaylist(item.uri)}
                        />
                        <p>
                          {item.name}
                        </p>
                        <a href={item.preview_url} target="_blank" rel="noreferrer">Preview song</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="user-option">
                  <div className="picture-username">
                    <img src={profile_picture} alt="User's Profile"/>
                    <span>{username}</span>
                  </div>
                  <div className="exit">
                    <FiLogOut className="log-out" size={30} color="#1db954" onClick={logOut}/>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="main-content">
                  <div className="playlist">
                    <div className="title">
                      <div className="add-block">
                        <h2>Playlists</h2>
                        <IoIosAddCircleOutline className="add-icon" size={30} color="#1db954" onClick={() => setIsModalOpen(!isModalOpen)}/>
                      </div>
                      {isModalOpen ? (
                        <div className="playlist-modal-creation">
                          <h2>Create a name for your playlist:</h2>
                          <input 
                            type="text" 
                            placeholder="New Playlist" 
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                          />
                          <div className="buttons">
                            <button className="create" onClick={addPlayList}>Create</button>
                            <button className="cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="list">
                      <ul>
                        {playlists?.items?.map(playlist => (
                          <li key={playlist.id}>
                            <span onClick={() => getPlaylistId(playlist.id)}>{playlist.name}</span>
                            <FiTrash2 className="trash-icon" size={16} color="#1db954" onClick={() => handleDelete(playlist.id)}/>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="playlist-content">
                    <div className="playlist-info">
                      <FiPlay className="player-button" size={20} color="#1db954" onClick={() => playPlaylist(playlist.id)}/>
                      <h3>{playlist?.name}</h3>
                      <span>Songs: {playlist?.tracks?.items?.length}</span>
                    </div>
                    <div className="playlist-songs">
                      <ul>
                        {playlist?.tracks?.items?.map((item, index) => (
                          <li key={item.track.id} onClick={() => getSongInfo(index)}>
                            {item.track.name}
                            <FiTrash2 className="trash-icon" size={20} color="#1db954" onClick={() => deleteTrackFromPlaylist(item.track.uri)}/>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="song-info">
                    <img src={image && image} alt={name}/>
                    <h4>{name && name}</h4>
                    <span>{duration && Math.round(duration / 1000)}s</span>
                  </div>
                </div>
                <Footer spotify={spotify}/>
              </div>
            </ContentWrapper>
          </Board> 
        ) : (
          <Weather spotify={spotify}/>
        )
      }
    </>
  );
}

export default Dashboard;