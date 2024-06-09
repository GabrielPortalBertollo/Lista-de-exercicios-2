/*Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

let matriz=[];
for (let i = 0; i < 50; i++) {
    matriz[i]=[];
    for (let u = 0; u < 50; u++) {
         matriz[i][u]=Math.floor(Math.random()*5)+1//gerar valores aleatórios entre 1 e 5
    }
}
console.log("Valores da matriz gerada:")
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}
let resultado=[]
for (let i = 0; i < matriz.length; i++) {
    resultado[i]=[]
    for (let u = 0; u < matriz[i].length; u++) {
        resultado[i][u]=matriz[i][u]*matriz[i][i];
    }
}

console.log("Matriz gerada pela multiplicação de cada linha pelo seu respectivo elemento da matriz principal::")
for (let i = 0; i < resultado.length; i++) {//exibir os valores gerados
    console.log(...resultado[i])
}