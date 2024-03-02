function apresetar(pessoa) {
    if (pessoa.idade < 20) {
        console.log(`Olá sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, tenho ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
    }
    else if (pessoa.idade < 60) {
        console.log(`Olá sou ${pessoa.nome}, sou um aduto de ${pessoa.idade} anos, tenho ${pessoa.altura} de altura e sou ${pessoa.profissao}`);
    }
    else {
        console.log(`Olá sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos, tenho ${pessoa.altura} de altura e sou ${pessoa.profissao}`);
    }
}

let jose = {
    nome: "José",
    idade: 72,
    altura: 1.70,
    profissao: "professor"
};

apresetar(jose);

let joao = {
    nome: "João",
    idade: 19,
    altura: 1.85,
    profissao: "atendente de caixa"

};

apresetar(joao);

let maria = {
    nome: "Maria",
    idade: 25,
    altura: 1.62,
    profissao: "enfermeira"
}

apresetar(maria);