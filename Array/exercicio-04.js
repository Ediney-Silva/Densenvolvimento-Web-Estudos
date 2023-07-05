//Faça um programa que conta quantas letras "a"
//existem numa determinda palavra.

const palavra = 'casa';

let quatidadeDeLetra = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        quatidadeDeLetra++;
    }
}
console.log(quatidadeDeLetra)