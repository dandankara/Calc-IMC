const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const result = document.getElementById('result');

  if (nome !== '' && altura !== '' && peso !== '') {
    const ImcValue = (peso / (altura ** 2)).toFixed(1);

    let resultIMC = '';

    if (ImcValue < 18.5) {
      resultIMC = 'abaixo do peso.';
    } else if (ImcValue < 25) {
      resultIMC = 'com peso ideal. Parabéns!!!';
    } else if (ImcValue < 30) {
      resultIMC = 'levemente acima do peso.';
    } else if (ImcValue < 35) {
      resultIMC = 'com obesidade grau I.';
    } else if (ImcValue < 40) {
      resultIMC = 'com obesidade grau II';
    } else {
      resultIMC = 'com obesidade grau III. Cuidado!!';
    }
    
    result.textContent = `${nome} seu IMC é ${ImcValue} e você está ${resultIMC}`;
  } else {
    result.textContent = "Preencha todos os campos"
  }
}

calcular.addEventListener('click', imc);