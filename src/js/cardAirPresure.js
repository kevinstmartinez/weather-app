export const cardAirPresure = (air_pressure) => {
  return `
  <p class="title">Air presure</p>
  <div class="metrics">
    <p class="number">${Math.round(air_pressure)}</p>
    <p class="unit">mb</p>
  </div>
  `
}