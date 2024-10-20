function calcIMC(altura, peso) {
    return peso/(altura * altura);
}

function mensagem(imc) {
    if (imc < 18.5) {
        return "MAGREZA";
    } else if (imc < 25) {
        return "NORMAL";
    } else if (imc < 30) {
        return "SOBREPESO (OBESIDADE GRAU I)";
    } else if (imc < 40) {
        return "OBESIDADE (GRAU II)";
    } else {
        return "OBESIDADE GRAVE (GRAU III)";
    }
}

const altura = parseFloat(prompt("Qual sua altura em centimetros? (Ex.: 1.57)"));
const peso = parseFloat(prompt("Qual seu peso em quilogramas?"));


const imc = calcIMC(altura, peso);
const men = mensagem(imc);

alert(`IMC: ${imc.toFixed(2)}`);
alert(`Classificação: ${men}`);