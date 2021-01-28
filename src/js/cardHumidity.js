export const cardHumidity = (humidity) => {
  return `
  <p class="title">Humidity</p>
  <div class="metrics">
    <p class="number">${humidity}</p>
    <p class="unit">%</p>   
  </div>
  <div class="percentages">
    <p>0</p>
    <p>50</p>
    <p>100</p>
  </div>
  <div class="progress-bar">
    <span class="bar">
      <span class="progress"></span>
    </span>
  </div>
  
  `

}