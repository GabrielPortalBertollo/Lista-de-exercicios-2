/*Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".*/


let resultado=[];
let posicao=0//variavel que salva a posição do valor que será sorteado
while(posicao<13){
let passou=1;//variavel que confirma que o valor não é repetido
let valor=Math.floor(Math.random()*50)+1//gerar valores aleatórios entre 1 e 50
    for (let i = 0; i < resultado.length; i++) {//for para verificar se o valor n é repetido
        if(resultado[i]==valor){
            passou=0;
            break;
        }
    }//fim for verificação
    if(passou==1){
posicao++;
resultado.push(valor);
    }
}//fim while de gerar resultado do sorteio


let ganhadores=0;
let participantes=[]
for (let i = 0; i < 100; i++) {//for que vai gerar o chute dos participantes
    participantes[i]=[];
    posicao=0
    while(posicao<13){
        let passou=1;//variavel que confirma que o valor não é repetido
        let valor=Math.floor(Math.random()*50)+1//gerar valores aleatórios entre 1 e 50
            for (let u = 0; u < participantes[i].length; u++) {//for para verificar se o valor n é repetido
                if(participantes[i][u]==valor){
                    passou=0;
                    break;
                }
            }//fim for verificação
            if(passou==1){
        posicao++;
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
        if(acertos==13){
        console.log("O "+(i+1)+" acertou TODOS os valores e ganhou o grande prêmio. Chutes: "+participantes[i])
        ganhadores++;
        }
        else{
        console.log("O "+(i+1)+" participante acertou "+acertos+" com os seguintes valores: "+participantes[i])
        }
}
console.log("Os valore sorteados são "+resultado)
console.log("Tiveram "+ganhadores+" ganhadores.")