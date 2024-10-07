function coletarDados() {
    const total = 45;
    let idade = [];
    let opiniao = [];
    let masc = 0;
    let fem = 0;
    let pessimo = 0;

    for (let i = 0; i < total; i++) {
        let idade = parseInt(prompt(`Digite a idade ${i + 1}: `));
        let sexo = prompt(`Digite o sexo ${i + 1} (M/F): `).toUpperCase();
        let opiniao = parseInt(prompt(`Digite a opinião ${i + 1} (1= Péssimo, 2= Regular, 3= Bom, 4= Ótimo): `));

        idade.push(idade);
        opiniao.push(opiniao);

        if (sexo == 'M' || sexo == 'm')
            masc++;
        else if (sexo == 'F' || sexo == 'f')
            fem++;

        if (opiniao === 1)
            pessimo++;
    }

    const media = idade.reduce((a, b) => a + b, 0) / total;
    const maisVelho = Math.max(...idade);
    const maisNovo = Math.min(...idade);
    const porcentagem = ((opiniao.filter(op => op === 3 || op === 4).length) / total) * 100;

    alert(`Média da idade: ${media.toFixed(2)}`);
    alert(`Idade da pessoa mais velha: ${maisVelho}`);
    alert(`Idade da pessoa mais nova: ${maisNovo}`);
    alert(`Quantidade de pessoas que responderam péssimo: ${pessimo}`);
    alert(`Porcentagem de pessoas que responderam ótimo e bom: ${porcentagem.toFixed(2)}%`);
    alert(`Número de homens que responderam: ${masc}`);
    alert(`Número de mulheres que responderam: ${fem}`);
}

coletarDados();