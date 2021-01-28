// import { toConvert } from '../helpers/helpers.js'

export const buildHeader = (weather_state_abbr, min_temp, weather_state_name, applicable_date, title ) => {
  return `
  <div id="image-container" class="image">
  <img src="https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg" alt="" width="200" height="200">
  </div>
  <div class="temperature">${Math.floor(min_temp)} <span>ºc</span></div>
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