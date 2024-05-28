/*Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/

const prompt= require('prompt-sync')();

console.log("Filtro de pessoas menores de 18 anos.")
console.log("Favor inserir o nome de 9 pessoas.")
let pessoas=[]
for (let i = 0; i < 9; i++) {
    let nome=prompt("Insira o nome da "+(i+1)+"° pessoa: ")
    let idade=prompt("Agora insira a idade: ")
    let pessoa={
        nome:nome,
        idade:idade
    }
    pessoas.push(pessoa)
    console.log("-----------")
}
console.log("Lista de pessoas menores de 18 anos: ")

for (let i = 0; i < 9; i++) {
    if(parseInt(pessoas[i].idade)<18){
        console.log(pessoas[i])
        console.log("------------")
    }
}
console.log("Fim da lista.");