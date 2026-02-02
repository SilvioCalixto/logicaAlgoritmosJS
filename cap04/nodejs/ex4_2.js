const prompt = require("prompt-sync")();                           //adiciona o pacote prompt- sync
const totalCompra = Number(prompt("Valor da compra R$: "));        //Lê o valor da compra        
const aux = Math.floor(totalCompra / 20);                                //aux = nº de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;                 // operador ternário
const valorParcela = totalCompra / parcelas;                       // cálculo do valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);