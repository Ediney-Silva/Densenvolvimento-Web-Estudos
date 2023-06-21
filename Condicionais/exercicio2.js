//Neste exercício vai ser o mesmo da anterior, mas agora 
//com o juros de 1% apatir de 7 parcelas.

const valorDoProduto = 100;
const numeroDeParcelas = 6;

if (numeroDeParcelas === 1) { //A vista
    const desconto = valorDoProduto * 10 / 100;
    const valorAPaga = valorDoProduto - desconto;
    console.log(`Você vai pagar R$ ${valorAPaga} pois a vista tem o desconto de 10%`);
} else {
    if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {//parcelado sem juros
        const valorDasParcelas = valorDoProduto / numeroDeParcelas;
        console.log(`Você vai pagar R$ ${valorDasParcelas.toFixed(2)} dividido em ${numeroDeParcelas} vezes sem juros`);

    } else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {//parcelado com juro
        const valorAPagaComJuros = (valorDoProduto * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
        const valorDasParcelas = (valorAPagaComJuros / numeroDeParcelas).toFixed(2);
        console.log(`Você vai pagar R$${valorDasParcelas} em ${numeroDeParcelas} vezes totalizando ${valorAPagaComJuros} com o acressimo de juros de 1% por estar acima de 6 parcelas `)
    } else {
        //número de parcelas invalido
        console.log("Números de parcelas invalido")
    }
}