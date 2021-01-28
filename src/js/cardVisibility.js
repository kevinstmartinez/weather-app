export const cardVisibility = (visibility) => {
  return `
  <p class="title">Visibility</p> 
      <div class="metrics">
        <p class="number">${visibility.toFixed(1)}</p>
        <p class="unit">miles</p>
      </div>
  `
}