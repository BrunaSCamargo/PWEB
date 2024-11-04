function Retangulo(b, a) {
    base = b;
    altura = a;

    this.calcularArea = function() {
        return b * a;
    };
}

const b = parseFloat(prompt("Digite a base do retangulo:"));
const a= parseFloat(prompt("Digite a altura do retangulo:"));

const retangulo = new Retangulo(b, a);

alert("Area do Retangulo:" + retangulo.calcularArea());