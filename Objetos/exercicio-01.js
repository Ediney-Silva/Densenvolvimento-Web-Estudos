const pessoa = {
    nome: "Mateus",
    idade: 30,
    altura: 1.70,
    CNH: true,
    apelido: ["Jr", "Juninho"]
};
//Ternário
const textoCNH = pessoa.CNH ? "possui CNH" : "não tem CNH";


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH}, e tem o seguinte apelido:
-${pessoa.apelido[1]}
-${pessoa.apelido[0]}`)