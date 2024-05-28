/*Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.*/

let matriz=[];
for (let i = 0; i < 7; i++) {
    matriz[i]=[];
    for (let u = 0; u < 7; u++) {
        if(i==u){
            matriz[i][u]=1;
        }
        else{
            matriz[i][u]=0;
        }
    }
}
for (let i = 0; i < 7; i++) {
    console.log(...matriz[i])
    
}