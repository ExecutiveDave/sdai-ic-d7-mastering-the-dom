// Write your JavaScipt code below this line.
const mainTitle = document.getElementById('main-title')
mainTitle.textContent = "Cat Adoption Center"

const description = document.getElementById("description")
description.textContent = "Find your Cat"

const cat1Button = document.getElementById('cat-1-button')
cat1Button.addEventListener('click', () => {
  console.log('clicked the first cat')

})