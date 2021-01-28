export const cardWind = (wind_speed) => {
  return `
  <p class="title">Wind status</p>
  <div class="metrics">
    <p class="number">${Math.round(wind_speed)}</p>
    <p class="unit">mph</p>
  </div>
  <div class="measure">
    <i class="fas fa-wind"></i>
    <p>WSW</p>
  </div>
  `
}