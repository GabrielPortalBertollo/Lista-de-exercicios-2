/*Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).*/

const prompt= require('prompt-sync')();

let funcionarios=[];



function menu(){
    let resposta;
    do{
    console.log("Digite o número da função desejada: ")
    console.log("1-Adicionar funcionário\n2-Ver funcionários")
    resposta=prompt("Digite aqui: ")
    if(resposta==1){
        criarFuncionario();
    }
    else if(resposta==2){
        exibirFuncionarios()
    }
    else{
        console.log("Fim do programa")
    }
}while(resposta==1||resposta==2);
}




function criarFuncionario(){
let repetir;
do {
    let matricula=prompt("Digite a matrícula do funcionário: ")
    let nome=prompt("Digite o nome do funcionário: ")
    let salario=prompt("Digite o salário: R$")
    let inss=salario*0.11;
    let liquido=salario-inss;

    funcionarios.push({
        matricula:matricula,
        nome:nome,
        bruto:salario,
        inss:inss,
        liquido:liquido
    })

    console.log("Funcionario adicionado com sucesso.")
    console.log("Deseja adicionar mais um?\n1-Sim\n2-Não")
    repetir=prompt("Sua resposta: ")
} while (repetir==1);

}

function exibirFuncionarios(){
console.log("Exibindo "+funcionarios.length+" funcionários.")
console.log("--------------------------------------------------------------------")
for (const funcionario of funcionarios) {
    console.log("Funcionário "+funcionario.nome+" possui a matrícula "+funcionario.matricula)
    console.log("Salário bruto: R$"+funcionario.bruto+"\nValor cobrado pelo INSS: R$"+funcionario.inss+"\nSalário líquido: R$"+funcionario.liquido)
    console.log("--------------------------------------------------------------------")
}
console.log("Fim dos funcionários")
}







menu();