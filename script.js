// Script referente às funções da calculadora

function clearDisplay() {
  document.getElementById("display").value = "";
}

//  Para calcular soma, subtração, divisão e multiplicação com --> onclick="appendToDisplay()"

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Para emitir a mensagem de erro caso o formato seja inválido

function calculate() {
  try {
    var result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Erro";
  }
}

// Para calcular a potência

function square() {
  var value = document.getElementById("display").value;
  var number = parseFloat(value);
  if (!isNaN(number)) {
    var result = Math.pow(number, 2);
    document.getElementById("display").value = result;
  } else {
    document.getElementById("display").value = "Erro";
  }
}

// Para calcular a porcentagem

function percentage() {
  var value = document.getElementById("display").value;
  var number = parseFloat(value);
  if (!isNaN(number)) {
    var result = number / 100;
    document.getElementById("display").value = result;
  } else {
    document.getElementById("display").value = "Erro";
  }
}

// Para calcular a raiz quadrada

function sqrt() {
  var value = document.getElementById("display").value;
  var number = parseFloat(value);
  if (!isNaN(number)) {
    if (number >= 0) {
      var result = Math.sqrt(number);
      document.getElementById("display").value = result;
    } else {
      document.getElementById("display").value = "Erro";
    }
  } else {
    document.getElementById("display").value = "Erro";
  }
}

// Para calcular o fatorial (não consta na calculadora devido ao espaço)

function factorial() {
  var value = document.getElementById("display").value;
  var number = parseInt(value);
  if (!isNaN(number) && number >= 0) {
    var result = 1;
    for (var i = 2; i <= number; i++) {
      result *= i;
    }
    document.getElementById("display").value = result;
  } else {
    document.getElementById("display").value = "Erro";
  }
}
