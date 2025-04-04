document.getElementById("imc").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    const altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    const resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        resultado.style.color = "#d00000"; 
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    resultado.innerHTML = `
    <strong>Resultado:</strong><br><br>
    Seu IMC é: ${imc.toFixed(2)}<br>
    Classificação: ${classificacao}
`;

    resultado.style.color = "#2a4d69";
});
