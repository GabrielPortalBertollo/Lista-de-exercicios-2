/*Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.*/

let matriz=[];
for (let i = 0; i < 12; i++) {
    matriz[i]=[];
    for (let u = 0; u < 13; u++) {
         matriz[i][u]=Math.floor(Math.random()*9)-4//gerar valores aleatórios entre -4 e 4
    }
}
console.log("Valores da matriz gerada:")
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}

let matrizResultado=[];
for (let i = 0; i < matriz.length; i++) {
    matrizResultado[i]=[];
    let maiorLinha=Number.NEGATIVE_INFINITY//comando para pegar o menor valor possivel e evitar de eu ter que criar um sistema que identifique quando for o primeiro elemento
    for (let u = 0; u < matriz[i].length; u++) {//for para pegar o maior valor da linha
        if(maiorLinha<Math.abs(matriz[i][u])){
            maiorLinha=Math.abs(matriz[i][u]);
        }
    }//fim for que pega o maior valor da linha
    for (let u = 0; u < matriz[i].length; u++) {//for para construir a nova matriz com os novos valores
        matrizResultado[i][u]=matriz[i][u]/maiorLinha;
    }
}

console.log("Valores da nova matriz gerada:")
for (let i = 0; i < matrizResultado.length; i++) {//exibir os valores gerados
    console.log(...matrizResultado[i])
}