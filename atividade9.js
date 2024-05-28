/*Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/
const prompt= require('prompt-sync')();

function novoFuncionario(salario,sexo) {//função para formatar os dados como eu quero
    let funcionario={
        salario:salario,
        sexo:sexo
    }
    return funcionario;
}



let funcionarios=[];
let continuar=1;

console.log("Sistema de gerenciamente de funcionários.")
console.log("Para começar, precisamos que você digite os dados do primeiro funcionário")

while(continuar==1){
let salario=prompt("Digite qual o salário do funcionario: ")
let sexo=prompt("Agora digite 1 se for homem e 2 se for mulher: ")
funcionarios.push(novoFuncionario(salario,sexo));
console.log("Funcionário cadastrado com sucesso.")
console.log("Deseja adicionar mais algum funcionário?")
continuar=prompt("Digite 1 para sim e 2 para não continuar: ")
}
console.log("Fim do cadastro de funcionários. Resumindo dados...");
let salarioHomem=0;
let salarioMulher=0;
let salarioTotal=0;
let homens=0;
let mulheres=0;

for (let i = 0; i < funcionarios.length; i++) {
    if(funcionarios[i]["sexo"]==1){
        homens++;
        salarioHomem+=parseFloat(funcionarios[i]["salario"]);
    }
    else if(funcionarios[i]["sexo"]==2){
        mulheres++;
        salarioMulher+=parseFloat(funcionarios[i]["salario"]);
    }
}//fim for

salarioTotal=salarioHomem+salarioMulher;
console.log(`O total pago para os homens é de R$${salarioHomem} com um total de ${homens} funcionários homens.`)
console.log(`O total pago para as mulheres é de R$${salarioMulher} com um total de ${mulheres} funcionárias mulheres.`)
console.log(`O total pago de salário é de R$${salarioTotal} com um total de ${funcionarios.length} funcionários.`)




