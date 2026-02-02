const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um nº (Centena): "));

if (numero < 100 || numero > 1000) {
  console.log("Erro... deve ser uma centena");
  return
}
else {
  const num1 = Math.floor(numero / 100); // obtém o primerio Número
  const sobra = numero % 100;            // o que sobra dezena
  const num2 = Math.floor(sobra / 10);   // obtém o segundo Número
  const num3 = sobra % 10;               // obtém o terceiro Número

  console.log(`Invertido: ${num3}${num2}${num1}`); //exibe o número invertido
}