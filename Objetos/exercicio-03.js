const produtosConsumidos = [
    {
        nome: "Pão de alho",
        precoUnit: 1500,
        quntidade: 3
    },
    {
        nome: "Cerveja",
        precoUnit: 1000,
        quntidade: 2
    },
    {
        nome: "Água",
        precoUnit: 500,
        quntidade: 1
    }
]





const cartao = {
    nome: "Marcos",
    idade: 35,

};
let totalAPagar = 0;

for (let produto of produtosConsumidos) {
    totalAPagar += produto.precoUnit * produto.quntidade
}
console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$ ${(totalAPagar / 100).toFixed(2)}`)