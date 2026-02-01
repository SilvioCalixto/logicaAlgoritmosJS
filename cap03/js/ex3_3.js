function calcularFuso() {
  const inHorario = document.getElementById("inHorario");
  const outHorario = document.getElementById("outHorario");

  const horario = Number(inHorario.value);

  let fuso = horario + 5;

  if (horario == "" || isNaN(horario) || horario < 0) {
    alert("Por favor, informe a hora correta...");
    inHorario.focus();
    return;
  }
  if (fuso >= 24) {
    fuso -= 24;
  }

  outHorario.textContent = `Hora da França ${fuso}`;
}

const btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso)





