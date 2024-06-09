/*Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

const prompt= require('prompt-sync')();

let matriz=[];
for (let i = 0; i < 30; i++) {
    matriz[i]=[];
    for (let u = 0; u < 30; u++) {
         matriz[i][u]=Math.floor(Math.random()*4)+1//gerar valores aleatórios entre 1 e 4
    }
}
console.log("Valores da matriz gerada:")
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}

let num=prompt("Digite um número entre 1 e 4 para remover da tabela:")
let matrizResultado=[];
let quantidade=0;

for (let i = 0; i < matriz.length; i++) {
    matrizResultado[i]=[];
    for (let u = 0; u < matriz[i].length; u++) {
         if(matriz[i][u]==num){
            matrizResultado[i][u]=0;
            quantidade++;
         }
         else{
            matrizResultado[i][u]=matriz[i][u];
         }
    }
}
console.log("Foram removidos "+quantidade+" valores, estes valores foram substituidos por 0.")
console.log("Resultado:")
for (let i = 0; i < matrizResultado.length; i++) {//exibir os valores gerados
    console.log(...matrizResultado[i])
}