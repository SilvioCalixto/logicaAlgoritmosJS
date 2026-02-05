const prompt = require("prompt-sync")();

const lado1 = Number(prompt("Digite o primeiro lado: "));
const lado2 = Number(prompt("Digite o segundo lado: "));
const lado3 = Number(prompt("Digite o terceiro lado: "))

if (
  lado1 <=0 ||
  lado2 <=0 ||
  lado3 <=0 ||
  Number.isNaN(lado1) ||
  Number.isNaN(lado2) ||
  Number.isNaN(lado3)
) {
  console.log("Valores inválidos. Digite apenas números maiores que zero.")
  process.exit(0);
}

if (
  (lado1 + lado2) <= lado3 || 
  (lado2 + lado3) <= lado1 || 
  (lado1 + lado3) <= lado2
) {
  console.log(
    "ERRO...Um dos lados não pode ser maior que a soma dos outros dois lados!"
  );
}else{
  console.log("Lados podem formar um triângulo.");
  if (
    lado1 == lado2 && 
    lado1 == lado3
  ){
    console.log("Equilátero, 3 lados iguais.");
  }
  else if (
    lado1 == lado2 || 
    lado1 == lado3 || 
    lado2 == lado3
  ){
    console.log("Isósceles, 2 lados iguais.");
  }
  else {
    console.log("Escaleno, 3 lados diferentes.");
  }
}