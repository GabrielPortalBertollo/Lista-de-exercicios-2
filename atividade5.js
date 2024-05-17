/*Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/
const prompt= require('prompt-sync')();

console.log("Vamos jogar!")
    let jogador;
    let ia=Math.floor(Math.random() * 3)+1;
    console.log("Intruções: digite os seguintes comandos para cada ação:\n1= Pedra\n2= Papel\n3= Tesoura\nQue os jogos comecem!!!")
    do {
        let jogador=prompt("Sua jogada: ")
        if(jogador!=1&&jogador!=2&&jogador!=3){console.log("Jogada inválida, fim do jogo.");return}//verificação de jogada válida
        ia=Math.floor(Math.random() * 3)+1;
        ganhador=verificar(jogador,ia)
        console.log("A sua jogada foi "+nomeJogada(jogador))
        console.log("A jogada do seu oponente foi "+nomeJogada(ia))
        if(ganhador==3){console.log("Empate, vamos novamente.")}
    } while (ganhador==3);
    if(ganhador==1){console.log("Parabéns, você ganhou!!!")}
    else{console.log("Infelizmente você perdeu, mais sorte na próxima.")}







function verificar(j1,j2) {
    if(j1==j2){return 3}//empate
    if(j1==1 && j2==2){return 2}//vitoria do jogador 2 por papel
    if(j1==2 && j2==3){return 2}//vitoria do jogador 2 por tesoura
    if(j1==3 && j2==1){return 2}//vitoria do jogador 2 por pedra
    return 1//se não deu empate e o jogador 2 não ganhou em nenhuma opção possivel então o jogador 1 ganhou
}
function nomeJogada(jogada) {
    if(jogada==1){jogada="pedra"}
    else if(jogada==2){jogada="papel"}
    else{jogada="tesoura"}
    return jogada
    
}