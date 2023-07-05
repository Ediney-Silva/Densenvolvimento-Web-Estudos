const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; //tamanho 10

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    //sera executado para ir de 0 até 7 | 8 não será mais executado
    soma = soma + numeros[i];
}   //soma += numeros[i]
console.log(soma)