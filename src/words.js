const words = [ "i", "hate", "you" ];

let wordsArray = [];

function randomNumber(min, max) {  
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

[...Array(125)].forEach((_, i) => {
  wordsArray.push({ text: words[randomNumber(0, 2)], value: randomNumber(10, 77) });
});

export default wordsArray;