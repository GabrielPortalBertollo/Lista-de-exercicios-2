/*Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

const prompt= require('prompt-sync')();
console.log("Tipos de carro:\n1-Popular\n2-Luxo")
let tipo=prompt("Digite o número do tipo de carro do cliente:")
let dia=prompt("Quantos dias o carro foi alugado?")
let km=prompt("Quantos kilometros o carro percorreu?")
let total=0;
if(tipo==1){//carro popular
total=90*dia;

if(km<=100){total+=km*0.2}//popular até 100km
else{total+=km*0.1}//popular acima de 100km
}//fim popular


else if(tipo==2){//luxo
total=150*dia;

if(km<=200){total+=km*0.3}//popular até 100km
else{total+=km*0.25}//popular acima de 100km

}//fim luxo
else{console.log("Tipo de carro inválido, tente novamente mais tarde.");return}
console.log("O total que o cliente deve pagar é R$"+total)