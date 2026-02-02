const prompt = require("prompt-sync")();
const permitida = Number(prompt("Digite a velocidade permitida: "));
const velocidade = Number(prompt("Digite a velocidade do condutor: "));
const porcento = (velocidade / permitida) * 100;
if(velocidade <= permitida) {
  console.log("Sem Multa");
}else if (porcento <= 120) {
  console.log("Multa Leve");
  
}else {
  console.log("Multa Grave");
}