const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#input-peso");
  const inputAltura = e.target.querySelector("#input-altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  const imc = getImc(peso, altura);

  if (!peso) {
    setResultado("Peso Inválido", false);
    document.querySelector("#resultado").style.background =
      "rgb(255, 109, 109)";
    return;
  }
  if (!altura) {
    setResultado("Altura Inválida", false);
    document.querySelector("#resultado").style.background =
      "rgb(255, 109, 109)";
    return;
  }
  if (imc < 18.5) {
    setResultado(`Seu IMC é: ${imc}<br> Você está abaixo do peso!`, true);
    document.querySelector("#resultado").style.background =
      "rgb(255, 109, 109)";
  } else if (imc >= 18.5 && imc <= 24.9) {
    setResultado(`Seu IMC é: ${imc}<br> Você está com o peso normal!`, true);
    document.querySelector("#resultado").style.background =
      "rgb(109, 255, 182)";
  } else if (imc >= 25 && imc <= 29.9) {
    setResultado(`Seu IMC é: ${imc}<br> Você está com sobrepeso!`, true);
    document.querySelector("#resultado").style.background =
      "rgb(255, 197, 109)";
  } else if (imc >= 30 && imc <= 34.9) {
    setResultado(`Seu IMC é: ${imc}<br> Você está com obesidade grau 1!`, true);
    document.querySelector("#resultado").style.background =
      "rgb(255, 109, 109)";
  } else if (imc >= 35 && imc <= 39.9) {
    setResultado(`Seu IMC é: ${imc}<br> Você está com obesidade grau 2!`, true);
    document.querySelector("#resultado").style.background =
      "rgb(255, 109, 109)";
  } else if (imc > 40) {
    setResultado(`Seu IMC é: ${imc}<br> Você está com obesidade grau 3!`, true);
    document.querySelector("#resultado").style.background =
      "rgb(255, 109, 109)";
  } else {
    setResultado(`O(s) Valor(es) inserido(s) é(são) inválido(s)`, true);
    document.querySelector("#resultado").style.background =
      "rgb(255, 109, 109)";
  };
});

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p);
}
