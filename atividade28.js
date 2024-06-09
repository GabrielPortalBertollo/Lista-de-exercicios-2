/*Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/

let matriz=[];
for (let i = 0; i < 10; i++) {
    matriz[i]=[];
    for (let u = 0; u < 10; u++) {
         matriz[i][u]=Math.floor(Math.random()*4)+1//gerar valores aleatórios entre 1 e 4
    }
}
console.log("Valores da matriz:")
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}

let acima=0;
let abaixo=0;

for (let i = 0; i < matriz.length; i++) {
    for (let u = 0; u < matriz.length; u++) {//neste caso coloquei sem a posição do i porque possui a mesma quantidade de linhas e colunas... consequentemente não faz diferença colocar novamente apenas a quantidade de linhas
    if(u>i){
        acima+=matriz[i][u];
    }
    else if(u<i){
        abaixo+=matriz[i][u];
    }  
    }
}
console.log("A soma dos valores acima da diagonal princial é: "+acima)
console.log("A soma dos valores abaixo da diagonal princial é: "+abaixo)

