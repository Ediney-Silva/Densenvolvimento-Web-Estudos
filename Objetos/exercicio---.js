function apresetar(pessoa) {
    if (pessoa.idade < 20) {
        console.log(`Olá sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, tenho ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
    }
    else if (pessoa.idade < 60) {
        console.log(`Olá sou ${pessoa.nome}, sou um aduto de ${pessoa.idade} anos, tenho ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
    }
    else {
        console.log(`Olá sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos, tenho ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
    }
}


let Mateus = {
    nome: "Mateus",
    idade: 19,
    altura: 1.93,
    profissao: "jovem-aprediz"
};

apresetar(Mateus)

let joao = {
    nome: "João",
    idade: 65,
    altura: 1.85,
    profissao: "bombeiro"
};

apresetar(joao)

let lucas = {
    nome: "Lucas",
    idade: 30,
    altura: 1.87,
    profissao: "mecânico"

};

apresetar(lucas)

