// import { buildHeader } from './header.js'
import { cardWind } from './cardWind.js'
import { cardHumidity } from './cardHumidity.js'
import { cardVisibility } from './cardVisibility.js'
import { cardAirPresure } from './cardAirPresure.js'
// import { toConvert } from '../helpers/helpers.js'


const tempSelector = document.querySelector('#opt-1')
const getLocation = async location => {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const api = `${proxy}https://www.metaweather.com/api/location/${location}/`
  await fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const { applicable_date, min_temp, weather_state_abbr, weather_state_name, air_pressure, humidity, visibility, wind_speed } = data.consolidated_weather[0]
    const { title } = data
    
    tempSelector.addEventListener('change', function (unit){

      const buildHeader = () => {
        return `
        <div id="image-container" class="image">
        <img src="https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg" alt="" width="200" height="200">
        </div>
        <div class="temperature">${this.checked ? Math.round((min_temp * 9/5)+32) : Math.round(min_temp)} <span>º${this.checked ? `F` : `C`}</span></div>
        <div class="description"> 
        <p>${weather_state_name}</p>
        </div>
        <div class="date">Today • ${applicable_date}</div>
        <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <p>${title}</p>
        </div>
        </div>
        `
      }
      
      const buildDayCards = () => {
        return(      
          data.consolidated_weather
          .filter((item, index) => index !== 0)
          .map(({ applicable_date: date, min_temp: minTemp, max_temp: maxTemp, weather_state_abbr: weatherAbbr }, index)=>{
          const temp = this.checked ?  `${minTemp = Math.round((minTemp * 9/5)+32)} ${maxTemp = Math.round((maxTemp * 9/5)+32)} ${unit = 'F'}` : `${minTemp = Math.round(minTemp)} ${maxTemp = Math.round(maxTemp)} ${unit = 'C'}` 
  
         return `
          <div class="card-weekday">
            <div class="card-wrapper">      
              <p class="title">${ index === 0 ? 'Tomorrow' : date }</p>
              <div class="weather">
                <img src="https://www.metaweather.com/static/img/weather/${weatherAbbr}.svg" alt="" width="70px" height="70px">
              </div>
              <div class="degrees">
                <p class="degree">${ minTemp } º${unit}</p>
                <p class="degree">${ maxTemp }º${unit}</p>
              </div>
            </div>
          </div>
          `
        }))
      }

      headerContainer.innerHTML = buildHeader()
      weatherDays.innerHTML = buildDayCards()
    })



      const weatherDays = document.querySelector('#weather-days')
      const headerContainer = document.querySelector('#header-container')
      const windStatusContainer = document.querySelector('#card-wind')
      const humidityContainer = document.querySelector('#card-humidity')
      const visibilityContainer = document.querySelector('#card-visibility')
      const airPresureContainer = document.querySelector('#card-air')

      
      windStatusContainer.innerHTML = cardWind(wind_speed)
      humidityContainer.innerHTML = cardHumidity(humidity)
      visibilityContainer.innerHTML = cardVisibility(visibility)
      airPresureContainer.innerHTML = cardAirPresure(air_pressure)

    })
}

getLocation(368148)