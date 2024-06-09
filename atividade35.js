/*Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.*/

let par=[];
let impar=[];
for (let i = 0; i < 30; i++) {
    let valor=Math.floor(Math.random()*6)+1//gerar valores aleatórios entre 1 e 6
    if(valor%2==0 && par.length<5){
    par.push(valor);
    }
    else if(valor%2==1 && impar.length<5){
    impar.push(valor);    
    }
    console.log((i+1)+"° valor gerado: "+valor)
}
console.log("Os valores pares salvos foram estes: "+par)
console.log("Os valores ímpares salvos foram estes: "+impar)