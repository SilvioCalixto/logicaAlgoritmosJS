const prompt = require("prompt-sync")();    //adiciona pacote ao programa
const veiculo = prompt("Veículo: ");        //Lê os dados de entrada
const preco = Number(prompt("Preço R$: "));
const entrada = preco * 0.50;               //calcula o valor da entrada
const parcela = (preco * 0.50)/12;          //... e das parcelas
console.log(`Promoção: ${veiculo}`);        //exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12 de R$ ${parcela.toFixed(2)}`);