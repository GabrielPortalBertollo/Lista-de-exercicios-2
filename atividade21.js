/*Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

const prompt= require('prompt-sync')();
console.log("Programa de cálculo de peso ideal.")
let altura=prompt("Digite sua altura: ")
let sexo=prompt("Digite 1 se for homem e 2 se for mulher: ")
let pesoIdeal;
if(sexo==1){
pesoIdeal=72.7*altura-58;
}
else{
pesoIdeal=62.1*altura-44.7;
}
console.log("Seu peso ideal é "+pesoIdeal);

