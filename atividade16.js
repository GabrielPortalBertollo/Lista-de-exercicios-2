/*Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.*/

let valores=[];
let crescente=[];

for (let i = 0; i < 20; i++) {//for para gerar os valores
    valores.push( Math.floor(Math.random() * 100));    
}
console.log("Valores gerados: "+valores)
for (let i = 0; i < 20; i++) {
    let menor= Math.min(...valores);
    crescente.push(menor);
    let indiceRemover=0;
    for (let u = 0; u < valores.length; u++) {//for para pegar o indice do valor que será removido
        if(valores[u]==menor){
            indiceRemover=u;
            break;
        }
    }//fim for de pegar indice
    
    valores.splice(indiceRemover,1)
    
}//fim for ordem crescente

console.log("Os valores em ordem crescente ficam da seguinte forma: "+crescente);