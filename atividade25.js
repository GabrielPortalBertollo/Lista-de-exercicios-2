/*Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.*/

let matriz=[];
for (let i = 0; i < 15; i++) {
    matriz[i]=[];
    for (let u = 0; u < 20; u++) {
        matriz[i][u]=Math.floor(Math.random()*10)//gerar valores aleatórios entre 0 e 9
    }
}
console.log("Os valores gerados são os seguintes: ");
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}
let somaColunas=[];
for (let i = 0; i < matriz.length; i++) {
    for (let u = 0; u < matriz[i].length; u++) {
        if(somaColunas[u]==null){
            somaColunas[u]=matriz[i][u];
        }
        else{
            somaColunas[u]+=matriz[i][u];
        }
    }
}
console.log("A soma de cada coluna:")
for (let i = 0; i < somaColunas.length; i++) {
    console.log((i+1)+"°=>"+somaColunas[i])
}