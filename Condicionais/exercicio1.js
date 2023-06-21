//exercício 1

//Na compra de um determinado produto, o cliente consegue
//um desconto de 10% caso pague a vista.

//Caso queira parcelar, a loja parcela em até 6x sem juros, 
//mas sem desconto.

//imprima na tela uma mensagem explicando para o cliente como 
//ele tem que pagar, incluindo o valor da parcela.

const valorDoProduto = 100;
const numeroDeParcelas = 6;

if (numeroDeParcelas === 1) {
    const desconto = valorDoProduto * 10 / 100
    const valorAPaga = valorDoProduto - desconto
    console.log(`Você vai pagar R$ ${valorAPaga} pois a vista tem o desconto de 10%`)
} else {
    const valorDasParcelas = valorDoProduto / numeroDeParcelas
    console.log(`Você vai pagar R$ ${valorDasParcelas.toFixed(2)} dividido em ${numeroDeParcelas} vezes`)
}