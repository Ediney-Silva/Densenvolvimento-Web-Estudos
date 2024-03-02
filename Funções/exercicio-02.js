function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade <= 65) {
        return "adulto"
    } else {
        return "idoso"
    }

}

const valorRetornadoPelaFuncao = determinarFaixaEtaria(20)

console.log(valorRetornadoPelaFuncao)