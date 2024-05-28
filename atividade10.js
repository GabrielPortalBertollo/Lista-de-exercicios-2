/*Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/
const prompt= require('prompt-sync')();

let valores=[];//array que vai salvar todos os valores inseridos
let menorValor;//variavel para salvar o menor valor
let controlePegar1=1;//variavel criada para ver quando for a primeira volta e definir o menor valor como o primeiro para evitar problemas tendo valores especificos
let pares=0;//variavel para salvar a quantidade de números pares
let media=0;//variavel para salvar o valor da média
let continuar=0;//variavel para controlar se a pessoa deseja continuar inserindo valores ou não
let total=0;//soma de todos os valores
let controleVoltas=0;
console.log("Sistema de soma de valores e resumo de algumas outras informações.\nAceitamos apenas valores inteiros.")
do {
valores.push(parseInt(prompt("Digite o valor que deseja adicionar: ")));
if(controlePegar1==1){
    controlePegar1++;
    menorValor=valores[0];
}
total+=valores[controleVoltas];
if(valores[controleVoltas]%2==0){//if para verificar se o resto de uma divisão do valor inserido por 2 é 0(se ele é par)
    pares++;
}
if(menorValor>valores[controleVoltas]){//if para verificar se o valor inserido é menor que o menor valor salvo e então atualizar se for
    menorValor=valores[controleVoltas];
}




    continuar=prompt("Deseja inserir mais algum valor? Digite 1 para sim e 2 para não: ")
    controleVoltas++;
} while (continuar==1);
media=total/controleVoltas;
console.log("Fim da inserção de valores. Resumindo todos os dados...")
console.log("Soma de todos os valores: "+total)
console.log("Menor valor inserido: "+menorValor)
console.log("Média de todos os valores: "+media)
console.log("Total de valores pares: "+pares)