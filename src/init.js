//data
const data = {
  characters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
};

//DOM
const dom = {
  btn : document.querySelector('.js-btn'),
  display : document.querySelector('.js-display'),
  body : document.body
};

//handlers
const changeColor = () => {
  let hexColor = '#';
  for(let i = 0; i < 6; i++) {
    hexColor += getRandomCharacter();
  }
  console.log(hexColor)
  dom.body.style.backgroundColor = hexColor;
  dom.display.innerHTML = `Background color: ${hexColor}`;
  dom.display.style.display = 'block';
}

//utils
const getRandomCharacter = () => {
  let randomCharacterIndex = Math.floor(Math.random() * data.characters.length);
  return data.characters[randomCharacterIndex]
}

//event listeners
dom.btn.addEventListener('click', changeColor)