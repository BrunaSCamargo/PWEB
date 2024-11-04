class Conta {
    constructor(nomeCor, banco, numeroConta, saldo) {
        this.nomeCor = nomeCor;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    setnomeCor(nome) {
        this.nomeCor = nome;
    }

    setBanco(banco) {
        this.banco = banco;
    }

    setNumeroConta(numero) {
        this.numeroConta = numero;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(nomeCor, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCor, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor(nomeCor, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCor, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }
}

function criarContas() {
    const nomeCorrente = prompt("Digite o nome do correntista da conta corrente:");
    const bancoCorrente = prompt("Digite o banco da conta corrente:");
    const numeroContaCorrente = prompt("Digite o numero da conta corrente:");
    const saldoCorrente = parseFloat(prompt("Digite o saldo da conta corrente:"));
    
    const contaCorrente = new Corrente(nomeCorrente, bancoCorrente, numeroContaCorrente, saldoCorrente, 1000);
    const nomePoupanca = prompt("Digite o nome do correntista da conta poupanca:");
    const bancoPoupanca = prompt("Digite o banco da conta poupanca:");
    const numeroContaPoupanca = prompt("Digite o numero da conta poupanca:");
    const saldoPoupanca = parseFloat(prompt("Digite o saldo da conta poupanca:"));
    const jurosPoupanca = parseFloat(prompt("Digite a taxa de juros da conta poupanca:"));
    const dataVencimentoPoupanca = prompt("Digite a data de vencimento da conta poupanca:");

    const contaPoupanca = new Poupanca(nomePoupanca, bancoPoupanca, numeroContaPoupanca, saldoPoupanca, jurosPoupanca, dataVencimentoPoupanca);

    alert("Dados da Conta Corrente:" + contaCorrente);
    alert("Dados da Conta Poupanca:" + contaPoupanca);
}

criarContas();