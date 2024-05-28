/*Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

const prompt= require('prompt-sync')();
let valores=[];
let pares=[];
console.log("Favor inserir 10 números inteiros para filtrarmos quais os pares.")
for (let i = 0; i < 10; i++) {
    valores.push(parseInt(prompt("Digite o "+(i+1)+"° número: ")))
    if((valores[i]%2)==0){//verificar se o valor inserido é par
        pares.push([i,valores[i]])//adicionar a posição e o valor par no vetor de pares.
    }
}
if(pares.length>0){
for (let i = 0; i < pares.length; i++) {
    console.log("O valor "+pares[i][1]+" esta na posição "+pares[i][0]+" do vetor")
    
}
}
else{
    console.log("Não foi digitado nenhum valor par")
}