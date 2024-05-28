/*Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

const prompt= require('prompt-sync')();

let quantidade= parseInt(prompt("Digite até qual valor da sequência de Fibonacci deseja ver: "));
let valores=[1,1]

for (let i = 0; i < quantidade; i++) {
    if(i==0||i==1){}
    else{
    let valorAtual=valores[i-1]+valores[i-2]
    valores.push(valorAtual)
        
    }
    console.log((i+1)+"->"+valores[i])
    
}