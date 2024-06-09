/*Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.*/

let matriz=[];
for (let i = 0; i < 3; i++) {
    matriz[i]=[];
    for (let u = 0; u < 3; u++) {
         matriz[i][u]=Math.floor(Math.random()*5)+1//gerar valores aleatórios entre 1 e 5
    }
}
console.log("Valores da matriz gerada:")
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}

let media=0;
for (let i = 0; i < matriz.length; i++) {
    media+=matriz[i][matriz.length-1-i];
}
media=media/matriz.length;
let resultado=[];
for (let i = 0; i < matriz.length; i++) {
    resultado[i]=matriz[i][i]*media;
}
console.log("A média dos elementos da diagonal secundária é: "+media)
console.log("Os resultados dos elementos da diagonal principal multiplicados pela média da diagonal secundária são:")
for (let i = 0; i < resultado.length; i++) {//exibir os valores gerados
    console.log(resultado[i])
}