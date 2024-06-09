/*Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/

let valores=[];
let soma=0;
let multiplicacao=1;
let media=0;
let crescente=[];
for (let i = 0; i < 6; i++) {
    valores.push(Math.floor(Math.random()*20)+1);
    soma+=valores[i];
    multiplicacao=multiplicacao*valores[i];
};
media=soma/valores.length;
console.log("Vetor gerado: "+valores)
console.log("Soma dos elementos: "+soma)
console.log("Média dos valores: "+media)
console.log("Produto dos valores: "+multiplicacao)

for (let i = 0; i < 6; i++) {
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
console.log("Vetor em ordem crescente: "+crescente)


