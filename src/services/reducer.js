export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playlist: null,
  playing: false,
  item: null,
  temperature: null,
  profile_picture: null,
  username: null,
  search_result: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.user}
    case 'SET_TOKEN':
      return {...state, token: action.token}
    case 'SET_WEATHER':
      return {...state, weather: action.weather}
    case 'SET_TEMPERATURE':
      return {...state, temperature: action.temperature}
    case 'SET_PROFILE_PICTURE':
      return {...state, profile_picture: action.profile_picture}
    case 'SET_USERNAME':
      return {...state, username: action.username}
    case 'SET_PLAYLISTS':
      return {...state, playlists: action.playlists}
    case 'SET_PLAYLIST':
      return {...state, playlist: action.playlist}
    case 'SET_PLAYING':
      return {...state, playing: action.playing}
    case 'SET_ITEM':
      return {...state, item: action.item}
    case 'SET_SEARCH_RESULT':
      return {...state, search_result: action.search_result}
    default:
      return state;
  }
}

export default reducer;