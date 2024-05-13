/*Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

const prompt= require('prompt-sync')();

let dia= prompt("Digite quantos cigarros você fuma em média por dia: ")
let anos= prompt("A quantos anos você fuma? ")
let cigarros= dia*365*anos;
let minutosPerdidos=cigarros*10;
let diasPerdidos=(minutosPerdidos/60)/24;
let horasPerdidas=(diasPerdidos-parseInt(diasPerdidos))*24;

if(diasPerdidos>=1){
    console.log("Você ja perdeu aproximadamente "+parseInt(diasPerdidos)+" dias e "+parseInt(horasPerdidas)+" horas da sua vida fumando.")
}

