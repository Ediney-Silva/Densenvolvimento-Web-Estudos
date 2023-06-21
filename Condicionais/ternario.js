const saldo = 1;

const unidade = (saldo === 1 ? "Real" : "Reais");

console.log(`Seu saldo é de ${saldo} ${unidade}`);

//outra linha decódigo para obter o mesmo resultado 

// if (saldo === 1) {
//      console.log(`${saldo} Real`);
// } else {
//     console.log(`${saldo} Reais`);
// }