/*Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const prompt= require('prompt-sync')();

let velocidade= parseInt(prompt("Digite qual era a velocidade do carro: "))
if(velocidade>80){
    let multa=5*(velocidade-80)
    console.log(`O valor da multa é de R$${multa}`)
}
else{
    console.log("Sem multa hoje.")
}