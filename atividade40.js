/*Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)*/

let resultado=[];
while(resultado.length<5){
let passou=1;//variavel que confirma que o valor não é repetido
let valor=Math.floor(Math.random()*10)+1//gerar valores aleatórios entre 1 e 50
    for (let i = 0; i < resultado.length; i++) {//for para verificar se o valor n é repetido
        if(resultado[i]==valor){
            passou=0;
            break;
        }
    }//fim for verificação
    if(passou==1){
resultado.push(valor);
    }
}//fim while de gerar resultado do sorteio


let ganhadores=0;
let participantes=[]
for (let i = 0; i < 50; i++) {//for que vai gerar o chute dos participantes
    participantes[i]=[];
    while(participantes[i].length<5){
        let passou=1;//variavel que confirma que o valor não é repetido
        let valor=Math.floor(Math.random()*10)+1//gerar valores aleatórios entre 1 e 50
            for (let u = 0; u < participantes[i].length; u++) {//for para verificar se o valor n é repetido
                if(participantes[i][u]==valor){
                    passou=0;
                    break;
                }
            }//fim for verificação
            if(passou==1){
        
        participantes[i].push(valor);
            }
        }//fim while de gerar chute do participante
        let acertos=0;
        for (let u = 0; u < participantes[i].length; u++) {//for para verificar quantas ele acertou
            for (let y = 0; y < resultado.length; y++) {
                if(resultado[y]==participantes[i][u]){
                    acertos++;
                }
                
            }
            
            
        }
        if(acertos==5){
        console.log("O "+(i+1)+"° participante acertou TODOS os valores e é um dos GANHADORES!. Chutes: "+participantes[i])
        ganhadores++;
        }
        else{
        console.log("O "+(i+1)+"° participante acertou "+acertos+" com os seguintes valores: "+participantes[i])
        }
}
console.log("Os valore sorteados são "+resultado)
console.log("Tiveram "+ganhadores+" ganhadores.")