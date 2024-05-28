/*Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */
let nomes=[];

const prompt= require('prompt-sync')();

console.log("Favor inserir o nome de 7 pessoas.")
for (let i = 0; i < 7; i++) {
    nomes.push(prompt("Digite o "+(i+1)+"° nome: "));
}
console.log("Agora sera informado os nomes inseridos do mais recente para o mais antigo.")
for (let i = nomes.length-1; i >= 0; i--) {
    console.log(nomes[i]);
    
}