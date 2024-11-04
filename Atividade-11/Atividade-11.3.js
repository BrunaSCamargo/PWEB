class Funcionario {
    constructor(matricula, nome, funcao) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
    }
}

const funcionario1 = new Funcionario('123', 'bruna', 'Dev');

console.log(funcionario1);