const fs = require('fs');

const buffer = fs.readFileSync('./texto.txt');

console.log(buffer.toString());

//Estamos aprendendo sobre callbacks