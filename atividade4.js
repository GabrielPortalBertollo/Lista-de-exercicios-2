/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

const prompt= require('prompt-sync')();
let lados= [];
lados[0]= parseFloat(prompt("Digite o tamanho do primeiro lado: "))
lados[1]= parseFloat(prompt("Digite o tamanho do segundo lado: "))
lados[2]= parseFloat(prompt("Digite o tamanho do terceiro lado: "))

for (let i = 0; i < 3; i++) {
    let soma= lados[0]+lados[1]+lados[2]-lados[i];
    if(lados[i]>=soma){
        console.log("Os valores fornecidos não formam um triângulo.")
        return;
    }
}
console.log("Estes 3 valores formam um triângulo.")
