import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = 'ENTER YOUR API KEY'

const searchWeatherApi = (city) => {
  const data = axios.get(`${URL}?q=${city}&appid=${apiKey}&units=metric`)

  return data
}

export default searchWeatherApi