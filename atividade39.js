/*Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.*/
let vetor=[];

for (let i = 0; i < 100; i++) {
    let caminho=Math.floor(Math.random()*10);
    if(caminho==0){//basicamente fiz uma chance de 1 em 10 dele ser nullo(10% de chance)
        vetor.push(null);
    }
    else{
        vetor.push(Math.floor(Math.random()*21)-10)//adiciona um valor entre -10 e 10
    }
}
console.log("Vetor gerado:\n"+vetor)
let filtrado=[]
for (let i = 0; i < vetor.length; i++) {
    if(vetor[i] != null && vetor[i] >=0){
        filtrado.push(vetor[i])
    }
}
console.log("O vetor sem os valores negativos e nullos ficou com "+filtrado.length+" valores.\nVetor filtrado:\n"+filtrado)