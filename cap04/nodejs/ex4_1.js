const prompt = require("prompt-sync")();
const quantidadePessoas = Number(prompt("Quantidade de Pessoas: "));
const quantidadePeixes = Number(prompt("Número de Peixes Obtidos: "));

let total;

if (quantidadePeixes > quantidadePessoas) {
  total = ((quantidadePeixes - quantidadePessoas)* 12) + (quantidadePessoas * 20);
}else {
  total = quantidadePessoas * 20;
}

console.log(`O total a pagar será de R$ ${total.toFixed(2)}`);