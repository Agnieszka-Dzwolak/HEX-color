import dom from './dom.js';
import getRandomCharacter from './utils/getRandomCharacter.js';
import changeColor from './components/changeColor.js';

//handlers
const changeColorHandler = () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += getRandomCharacter();
  }
  changeColor(hexColor);
};

//event listeners
dom.btn.addEventListener('click', changeColorHandler);
