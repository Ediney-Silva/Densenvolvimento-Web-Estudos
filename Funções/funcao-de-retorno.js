function verificaeMaioridade(idade) { //verificar se uma pessoa é maior de idade
    if (idade >= 18) {
        return true;
    } else {
        return false
    }
}

const valorRetornadoPelaFuncao = verificaeMaioridade(20);

console.log(valorRetornadoPelaFuncao)