//Crie uma lista com 5 países
const paises = ['Brasil', 'Rússia', 'Japão', 'India', 'Portugal'];
console.log(paises);

//Remova um país do fim da lista
paises.pop();
console.log(paises);

//Adicionar um país ao inícioda lista
paises.unshift('Chile');
console.log(paises);

//Remover um país do inicio da lista
paises.shift();
console.log(paises);

//Imprimir o ultimo item da lista 
const ultimo = paises[paises.length - 1];
console.log(ultimo);

//Imprima o segundo pais da lista 
console.log(paises[1])