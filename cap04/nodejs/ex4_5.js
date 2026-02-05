const prompt = require("prompt-sync")();
const moedas = Number(prompt("Valor de Moedas: R$ ").replace(",","."));

if (Number.isNaN(moedas) || moedas <= 0){
  console.log("Valor inválido");
}else{
  let tempo;
  let preco;
}

if (moedas < 1){
  console.log("Valor Insuficiente!");
  process.exit(0);
}else if (moedas < 1.75) {
  tempo = 30;
  preco = 1;
}else if (moedas < 3){
  tempo = 60;
  preco = 1.75;
}else {
  tempo = 120;
  preco = 3;
}

const troco = moedas - preco;

console.log(
  `O tempo será de ${tempo} min, e o troco será de R$ ${troco.toFixed(2)}`
);









if (
  lado1 <= 0 ||
  lado2 <= 0 ||
  lado3 <= 0 ||
  Number.isNaN(lado1) ||
  Number.isNaN(lado2) ||
  Number.isNaN(lado3)
) {
  console.log("Valores inválidos. Digite apenas números maiores que zero.");
  process.exit(0);
}
