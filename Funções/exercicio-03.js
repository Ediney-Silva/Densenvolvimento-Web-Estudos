function determinarFaixaEtaria(idade){
    if (idade <= 21) {
        return "jovem";
    } else if (idade <= 65) {
        return "adulto"
    } else{
        return "idoso"
    }

};
function apresentar (pessoa){
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}
const pessoa1 ={
    nome: "José",
    idade:30,
    profissao: "professor"
}

apresentar(pessoa1)