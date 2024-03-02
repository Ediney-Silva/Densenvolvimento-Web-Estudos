let contagem = 10;

function imprimirContagem() {
    if (contagem === 0) {
        console.log("KABUUUUUUUM");
        clearInterval(intervalId);
    } else {
        console.log(`Abomba explodirá em ${contagem} segundo${contagem === 1 ? "" : "s"}`);
        contagem -- ;
    }
}

imprimirContagem();
const intervalId = setInterval(imprimirContagem, 1000); 

//Abomba explodirá em 10 segundos
//KABUUUUUUUM