// replace all occurrence of a string
const string = 'A red bird was sitting on a red fence, is it a redpoll';

// regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);