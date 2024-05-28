/*Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/

const prompt= require('prompt-sync')();

let horarios=[]
console.log("Favor inserir 5 horarios no formato hora:minuto:segundo");
for (let i = 0; i < 5; i++) {
    horarios[i]=prompt("Favor inserir o "+(i+1)+"° horário: ")
}

for (let i = 0; i < 5; i++) {
    let verificar= horarios[i].split(":");
    if((verificar[0]>=0 && verificar[0]<=23) && (verificar[1]>=0 && verificar[1]<=59) && (verificar[2]>=0 && verificar[2]<=59)){
    console.log("O horario " + horarios[i].replace(/:/g, '.') + " é um horario válido.")//o replace é para trocar um elemento por outro, o/:/g é para dizer que quero mudar o elemento : e o /g é para dizer que quero mudar todos e não apenas o primeiro
    }
    else{
        console.log("O horario "+horarios[i]+" não é válido.")
    }
    
}