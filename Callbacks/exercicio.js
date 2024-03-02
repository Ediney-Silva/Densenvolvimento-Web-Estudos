const pessoas = [{
    nome: "João",
    idade: 33,
    altura: 180,
},
{
    nome: "Maria",
    idade: 24,
    altura: 167,
},
{
    nome: "Pedro",
    idade: 28,
    altura: 175,
}];

const pessoastraf = pessoas.map((x) => {
    return {
        nome: x.nome,
        idade: `${x.idade} anos`,
        altura: `${x.altura / 100}m`,
        maioridade: `${x.idade = 18 ? "É maior de idade" : "É menor de idade"}`
    }
});
console.log(pessoastraf)

