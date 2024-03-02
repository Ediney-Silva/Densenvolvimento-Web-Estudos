const ultimos4dig = "56789";

const numCartao = ultimos4dig.padStart(10, "****");

console.log(numCartao);

//".padStart" preenche uma string colocando texto no inicio.

const ultimos4dig2 = "56789";

const numCartao2 = ultimos4dig2.padEnd(10, "****");

console.log(numCartao2);

//".padEnd" preenche uma string colocando texto no final.