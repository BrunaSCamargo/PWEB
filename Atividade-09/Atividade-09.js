function maior(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordemCrescente(num1, num2, num3) {
    return [num1, num2, num3].sort((a, b) => a - b);
}

function palindromo(str) {
    const strMaiuscula = str.toUpperCase();
    const strInvertida = strMaiuscula.split('').reverse().join('');
    return strMaiuscula === strInvertida;
}

function triangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return 'Triângulo Equilátero';
        } else if (a === b || a === c || b === c) {
            return 'Triângulo Isósceles';
        } else {
            return 'Triângulo Escaleno';
        }
    } else {
        return 'Não forma um triângulo';
    }
}

function funcReturn() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let num3 = parseFloat(prompt("Digite o terceiro número:"));
    
    alert("O maior número é: " + maior(num1, num2, num3));

    alert("Ordem crescente: " + ordemCrescente(num1, num2, num3).join(", "));

    let str = prompt("Digite uma string para verificar se é palíndromo:");
    alert(str + (palindromo(str) ? " é um palíndromo." : " não é um palíndromo."));

    let lado1 = parseFloat(prompt("Comprimento do primeiro lado:"));
    let lado2 = parseFloat(prompt("Comprimento do segundo lado:"));
    let lado3 = parseFloat(prompt("Comprimento do terceiro lado:"));
    
    alert(triangulo(lado1, lado2, lado3));
}

funcReturn();