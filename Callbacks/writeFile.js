const fs = require('fs');

const erro = "Deu erro ao cadastrar";

fs.writeFile("./novoarquivo.txt",erro , () => {
    console.log("arquivo foi escrito!")
}); 