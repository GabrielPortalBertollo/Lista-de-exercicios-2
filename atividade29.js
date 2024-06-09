/*Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.*/

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
let l4=0;
let c2=0;
let dp=0;
let total=0;
for (let i = 0; i < matriz.length; i++) {
    for (let u = 0; u < matriz.length; u++) {//neste caso coloquei sem a posição do i porque possui a mesma quantidade de linhas e colunas... consequentemente não faz diferença colocar novamente apenas a quantidade de linhas
    total+=matriz[i][u];
    if(i==u){dp+=matriz[i][u]}
    if(i==3){l4+=matriz[i][u]}
    if(u==1){c2+=matriz[i][u]} 
    }
}
console.log("Soma dos elementos da linha 4: "+l4)
console.log("Soma dos elementos da coluna 2: "+c2)
console.log("Soma dos elementos da diagonal principal: "+dp)
console.log("Soma de todos os elementos da matriz: "+total)