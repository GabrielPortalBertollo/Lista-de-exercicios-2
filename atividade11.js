/*Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const prompt= require('prompt-sync')();

let inicial= parseFloat(prompt("Insira o valor inicial: "))
let pa=parseFloat(prompt("Agora insira de quantos em quantos ele ira andar: "))
let total=0;
console.log("Sequência dos 10 próximos valores:")
for (let i = 1; i <= 10; i++) {
    let valor=inicial+(pa*i)
    total+=valor;
    console.log(i+"->"+valor)
}
console.log("Soma dos valores: "+total)