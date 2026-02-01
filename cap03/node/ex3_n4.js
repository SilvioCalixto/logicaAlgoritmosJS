const prompt = require("prompt-sync")();  //adiciona o pacote ao programa
const pesoRacao = Number(prompt("Ração(kg): "));
const consumo = Number(prompt("Consumo(gramas): "));
const pesoGr = pesoRacao * 1000;
const duracao = Math.floor(pesoGr / consumo);
const sobra = pesoGr % consumo;


console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);
