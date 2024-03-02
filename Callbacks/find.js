const array = ["Ola", "Aoba", "paralelepipedo"];

const encontrado = array.find((x) => {
    if (x.length > 10) {
        return true;
    } else {
        return false;
    }
});

if (encontrado) {
    console.log(`a palavra com mais de 10 caracteres é ${encontrado}`)
} else {
    console.log(`Nenhum item ten mais de 10 caracteres`)
}