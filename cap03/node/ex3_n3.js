const prompt = require("prompt-sync")();     //adiciona pacote ao programa
const salario = Number(prompt("Salário R$: ")); //Lê os dados de entrada
const tempo = Number(prompt("Tempo (Anos): "));
const quadrienios = Math.floor(tempo / 4);
const porcentagem = quadrienios / 100;

console.log(`O total de quadrienios é ${quadrienios}`);
console.log(`O salário com aumento é ${salario +(salario * porcentagem).toFixed(2)}`);