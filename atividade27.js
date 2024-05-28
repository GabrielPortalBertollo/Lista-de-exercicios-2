/*Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/

let matriz=[];
for (let i = 0; i < 6; i++) {
    matriz[i]=[];
    for (let u = 0; u < 6; u++) {
         matriz[i][u]=Math.floor(Math.random()*4)+1//gerar valores aleatórios entre 1 e 4
    }
}
console.log("Valores da matriz:")
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}
let multiplicador=Math.floor(Math.random()*4)+1;
let resultado=[];
console.log("Valor gerado para multiplicar: "+multiplicador)
for (let i = 0; i < matriz.length; i++) {
    for (let u = 0; u < matriz[i].length; u++) {
        resultado.push(multiplicador*matriz[i][u]);
    }
}
console.log("Resultado final: "+resultado)