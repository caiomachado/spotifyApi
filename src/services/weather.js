import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = 'd6edfc8063d6a014672b811b728d25b3'

const searchWeatherApi = (city) => {
  const data = axios.get(`${URL}?q=${city}&appid=${apiKey}&units=metric`)

  return data
}

export default searchWeatherApi