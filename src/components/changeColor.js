import dom from '../dom.js';

const changeColor = (hexColor) => {
  dom.body.style.backgroundColor = hexColor;
  dom.display.innerHTML = `Background color: ${hexColor}`;
  dom.display.style.display = 'block';
};

export default changeColor;
