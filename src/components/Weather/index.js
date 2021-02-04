import React, {useState} from 'react';
import { FormContainer } from './styles';
import searchWeatherApi from '../../services/weather'
import {useStateContextValue} from '../../StateProvider';


const Weather = () => {
  const [{temperature, weather}, dispatch] = useStateContextValue();
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)

  const searchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    searchWeatherApi(city)
    .then(weather => {
      dispatch({type: 'SET_WEATHER', weather: weather})
      dispatch({type: 'SET_TEMPERATURE', temperature: weather.data.main.temp})
      setLoading(false)
    })
    setCity('')
  }

  return (
    <FormContainer>
      <div className="content-wrapper">
        <form onSubmit={searchWeather}>
          <h2>Please type in your city name:</h2>
          <input 
            type="text" 
            placeholder="Ex: New York"
            id="city" 
            value={city} 
            onChange={e => setCity(e.target.value)}
            />
          {loading ? <span className="loading-message">Loading...</span> : null}
          <button type="submit" disabled={city === ''}>
            Search
          </button>
        </form>
        <div className="bottom-block">
          {weather ? (
            <div className="weather-result">
              <div className="city-info">
                <span>{weather.data.name} / </span>
                <span>{weather.data.sys.country}</span>
              </div> 
              <span>{Math.round(weather.data.main.temp)}ºC</span>
            </div>
          ) : null}
        </div>
        <div className="music-suggestion">
          {temperature && temperature <= 0 ? 
            <p>
              Looks like it's a little bit chilly, huh?
              How about you listen to some trap music to get you going?
              I promise it will warm you up.
            </p> : null}
          {temperature > 0 && temperature < 15 ?
            <p>
              Well, it's not warm but it is not that cold either, is it?
              How about you listen to some country music to hype you up?
              I know how low temperatures can make you feel sad sometimes...
            </p> : null}
          {temperature >= 15 && temperature < 25 ? 
            <p>
              If you complain about this nice and warm weather, I will be mad.
              How about you listen to some hip hop to get that momentum going?
              Who doesn't like to burst some rhymes?
            </p> : null}
          {temperature >= 25 ? 
            <p>
              Stop crying.. wait, is that sweat? uh.. Gross!
              How about you chill a bit while listening to some chill music?
              I will let you pick, pick wisely and just don't sweat more than you already are.
            </p> : null}
        </div>
      </div>
    </FormContainer>
  );
}

export default Weather;