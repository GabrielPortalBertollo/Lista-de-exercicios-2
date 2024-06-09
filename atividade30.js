/*Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.*/


let matriz=[];
for (let i = 0; i < 5; i++) {
    matriz[i]=[];
    for (let u = 0; u < 5; u++) {
         matriz[i][u]=Math.floor(Math.random()*4)+1//gerar valores aleatórios entre 1 e 4
    }
}
console.log("Valores da matriz:")
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}

let sl=[0,0,0,0,0];
let sc=[0,0,0,0,0];


for (let i = 0; i < matriz.length; i++) {
    for (let u = 0; u < matriz.length; u++) {
        sl[i]+=matriz[i][u];
        sc[i]+=matriz[u][i];
    }
}

function exibir(vetor,tipo) {
    //tipo 0 linha, tipo 1 coluna
    for (let i = 0; i < vetor.length; i++) {
        if(tipo==0){
        console.log("A soma da "+(i+1)+"° linha é "+vetor[i])
        }
        else if(tipo==1){
            console.log("A soma da "+(i+1)+"° coluna é "+vetor[i])
        }
    }
}
exibir(sl,0);
exibir(sc,1);