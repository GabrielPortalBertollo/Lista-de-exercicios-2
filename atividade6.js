/*Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */
    let nSorteado=Math.floor(Math.random() * 6)+1;
    console.log("Você consegue acertar qual o número sorteado?")
    console.log("Um número entre 1 e 6 será sorteado e você terá 1 única chance de adivinhar qual é este valor.")
    console.log("Se voce acertar, parabéns!! Você ganhou um belo nada, mas se errar.... pode tentar denovo mais tarde.")
    const prompt= require('prompt-sync')();
    let resposta=prompt("Digite aqui seu chute: ")
    if(nSorteado==resposta){
        console.log("Parabéns!!! Você ganhou!!! Até mais.")
    }
    else{
        console.log("Infelizmente não foi desta vez, o número sorteado era "+nSorteado+" mas não desista, você pode tentar novamente mais tarde.")
    }

