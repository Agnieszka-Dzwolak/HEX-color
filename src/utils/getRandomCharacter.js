import data from '../data.js';

const getRandomCharacter = () => {
  let randomCharacterIndex = Math.floor(Math.random() * data.characters.length);
  return data.characters[randomCharacterIndex];
};

export default getRandomCharacter;
