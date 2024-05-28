/*Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

let matriz=[];
for (let i = 0; i < 6; i++) {
    matriz[i]=[];
    for (let u = 0; u < 8; u++) {
        matriz[i][u]=Math.floor(Math.random()*2)-1//gerar valores aleatórios entre -1 e 0
    }
}
console.log("Os valores gerados são os seguintes: ");
for (let i = 0; i < 6; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}
let negativos=[];
for (let i = 0; i < 6; i++) {
    for (let u = 0; u < 8; u++) {
        if(matriz[i][u]<0){
            if(negativos[i]>0){
            negativos[i]++;
        }
        else{
            negativos[i]=1
        }
        }
    }
}
console.log("os valores negativos de cada linha são os seguintes: ")
for (let i = 0; i < 6; i++) {
    console.log((i+1)+"°=>"+negativos[i])
}
