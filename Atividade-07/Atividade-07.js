var escolha = prompt("Pedra, Papel ou Tesoura");

var A;
var num;

function jogo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var num = jogo(1, 100);


if (num <= 33) {
    A = "Pedra";
}
else if (num <= 66) {
    A = "Papel";
}
else {
    A = "Tesoura";
}

alert("Computador: " + A);

if (A === "Pedra") {
    if (escolha === "Pedra") {
        alert("Empate");
    } else {
        if (escolha === "Papel") {
            alert("Você ganhou");
        } else {
            alert("Computador ganhou");
        }
    }
}
else
    if (A === "Papel") {
        if (escolha === "Pedra") {
            alert("Computador ganhou");
        } else if (escolha === "Papel") {
            alert("Empate");
        } else {
            alert("Você ganhou");
        }
    }
    else {
        if (escolha === "Pedra") {
            alert("Você ganhou");
        } else {
            if (escolha === "Papel") {
                alert("Computador ganhou");
            } else {
                alert("Empate");
            }
        }
    }
