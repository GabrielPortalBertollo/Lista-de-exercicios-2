/*A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/


const prompt= require('prompt-sync')();
let populacao=[];

let repetir;
do {
    let salario=prompt("Digite o salário da pessoa: R$")
    let filhos=prompt("Digite quantos filhos esta pessoa possui: ")
    populacao.push({
        salario:salario,
        filhos:filhos
    });
    console.log("Dados cadastrados com sucesso!")
    repetir=prompt("Digite 1 se deseja adicionar mais uma pessoa e 2 se deseja finalizar ==>")
} while (repetir==1);

console.log("Resumindo dados...")
let mediaSalario=0;
let mediaFilhos=0;
let maiorSalario=0;
let ate350=0;
for (const pessoa of populacao) {
    mediaSalario+=parseFloat(pessoa.salario);
    mediaFilhos+=parseInt(pessoa.filhos);
    if(maiorSalario<parseFloat(pessoa.salario)){maiorSalario=parseFloat(pessoa.salario)}
    if(parseFloat(pessoa.salario)<=350){ate350++}
}
mediaSalario=mediaSalario/populacao.length;
mediaFilhos=mediaFilhos/populacao.length;
ate350=ate350/populacao.length*100;

console.log("A média salarial é de R$"+mediaSalario);
console.log("A média de filhos é de "+mediaFilhos);
console.log("O maior salário é de "+maiorSalario);
console.log("A porcentagem de pessoas que recebem até R$350 é de "+ate350+"%");
