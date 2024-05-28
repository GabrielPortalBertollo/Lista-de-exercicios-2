/*Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */


let valores=[1,1]
console.log("Os 15 primeiros valores da sequência de Fibonacci são:")

for (let i = 0; i < 15; i++) {
    if(i==0||i==1){}
    else{
    let valorAtual=valores[i-1]+valores[i-2]
    valores.push(valorAtual)
        
    }
    console.log((i+1)+"->"+valores[i])}
    