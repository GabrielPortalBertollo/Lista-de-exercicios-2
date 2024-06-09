/*Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.*/

const prompt= require('prompt-sync')();
let funcoes=[];
let idHotel=3;
let idReserva=2;

let hoteis=[//criação de hoteis
    {
        id:0,
        nome:"Bela Vista",
        cidade:"Porto Alegre",
        quartos:8,
        disponiveis:7,
        avaliacao: 10,
        avaliacoes: 2
    },
    {
        id:1,
        nome:"Mais Verde",
        cidade:"Canoas",
        quartos:4,
        disponiveis:4,
        avaliacao: 10,
        avaliacoes: 2
    },
    {
        id:2,
        nome:"Céu Azul",
        cidade:"Porto Alegre",
        quartos:10,
        disponiveis:9,
        avaliacao: 10,
        avaliacoes: 2
    }
];//fim dos hoteis padrões

let reservas=[
    {
        id:0,
        idHotel:2,
        cliente:"Jorge"
    },
    {
        id:1,
        idHotel:0,
        cliente:"Maria"
    }
];//fim das reservas padrões


function menu(){
    let resposta=1;
    while(resposta>0 && resposta<8){
    console.log("Você esta no menu principal, oque deseja fazer?")
    console.log("1-Fazer reserva.\n2-Cancelar reserva\n3-Listar reservas\n4-Verificar disponibilidade de um hotel\n5-Buscar hotéis\n6-Adicionar hotel\n7-Avaliar um hotel\n8-Fechar sistema")
    resposta=prompt("Digite o número de sua opção: ");
    if(resposta>0 && resposta<8){
        funcoes[resposta]();
    }
    }
    console.log("Até a próxima.")
}


funcoes[1]= function(){//FAZER RESERVA
console.log("Preparando para fazer a reserva...")
let hotelEscolhido=prompt("Digite nome do hotel em que será feita a reserva: ")
let cliente=prompt("Digite o nome do cliente: ")
let achouHotel=0;
for (const hotel of hoteis) {//verificar se tem este hotel
    if(hotel.nome.toLowerCase() == hotelEscolhido.toLowerCase()){
        if(parseInt(hotel.disponiveis)<=0){//verificar se o hotel encontrado esta disponivel
            achouHotel=2;
            break;
        }
        else{
        hotelEscolhido=hotel.id;
        hotel.disponiveis=parseInt(hotel.disponiveis)-1
        achouHotel=1;
        break;
        }
    }
}//fim for de verificar hotel
if(achouHotel==0){
    console.log("Hotel não encontrado. Reserva cancelada. Voltando....")
}
else if(achouHotel==2){
    console.log("Hotel lotado, cancelando reserva....")
}
else{
reservas.push({
    id:idReserva,
    idHotel:hotelEscolhido,
    cliente:cliente
});
idReserva++;
console.log("Reserva feita com sucesso!")
}
}//fim função adicionar reserva

funcoes[2]= function(){//CANCELAR RESERVA
let id=prompt("Digite o id da reserva que deseja cancelar: ")
let achouReserva=0;
for (const reserva in reservas) {//for para procurar id
    if(reservas[reserva].id==id){
        achouReserva=1;
        for (const hotel of hoteis) {//Verificar o hotel e adicionar a vaga
            if(hotel.id == reservas[reserva].idHotel){
                hotel.disponiveis=parseInt(hotel.disponiveis)+1;                
            }
        }//fim for de verificar hotel e aumentar a disponibilidade
        reservas.splice(reserva,1);//comando que apaga um elemento do vetor pelo indice
        break;
    }
}
if(achouReserva==0){
    console.log("Id da reserva não encontrado. Voltando....")
}
else{
    console.log("Reserva cancelada com sucesso!")
}
}//fim funçao cancelar reserva


funcoes[3]= function(){//LISTAR RESERVAS
console.log("Lista de reservas")
let totalReservas=0
for (const reserva of reservas) {
    if(reserva){
        totalReservas++;
        console.log("ID: "+reserva.id+"  -/-  ID do hotel: "+reserva.idHotel+"  -/-  Nome do cliente: "+reserva.cliente);
        
    }
}
}//fim função de listar reservas




funcoes[4]= function(){//VERIFICAR DISPONIBILIDADE DE UM HOTEL
    let nomeHotel=prompt("Digite o nome do hotel que deseja verificar: ")
    let achouHotel=0;
    for (const hotel of hoteis) {//verificar se tem este hotel
        if(hotel.nome.toLowerCase() == nomeHotel.toLowerCase()){
            if(parseInt(hotel.disponiveis)<=0){//verificar se o hotel encontrado esta disponivel
            console.log("O hotel não possui vagas no momento.")
            achouHotel=1;
            break;
            }
            else{
            achouHotel=1;
            console.log("Hotel possui "+hotel.disponiveis+" vagas disponíveis atualmente de um total de "+hotel.quartos+" quartos.")
            console.log("Nota do hotel: "+(parseFloat(hotel.avaliacao)/parseInt(hotel.avaliacoes)))
            break;
            }
        }
    }//fim for de verificar hotel
    if(achouHotel==0){console.log("Hotel não encontrado, tente novamente mais tarde.")}
}//fim função ver disponibilidade de hotel




funcoes[5]= function(){//BUSCAR HOTEIS(menu de opções de hotel)
console.log("Digite o numero da forma que deseja procurar o hotel.\n1-Listar todos os hotéis\n2-Filtrar hotéis pela cidade\n3-Voltar ao menu principal")
let forma=prompt("==>")
if(forma==1){
    listarHoteis();
}
else if(forma==2){
    filtroCidade(prompt("Deseja verificar qual cidade? "))
}
else{
    console.log("Voltando para o menu principal...")
}
}

function listarHoteis() {
    console.log("Listando todos os hotéis registrados até o momento:")
    for (const hotel of hoteis) {
        console.log("Id: "+hotel.id+"  -/-  Nome: "+hotel.nome+"  -/-  Cidade: "+hotel.cidade+"  -/-  Vagas: "+hotel.disponiveis+"/"+hotel.quartos+"  -/-  Nota: "+(parseFloat(hotel.avaliacao)/parseInt(hotel.avaliacoes)))
        console.log("----------------------------------------------------------------------------------------------------------")
    }
}

function filtroCidade(cidade) {
    console.log("Lista de todos os hotéis de "+cidade)
    let quantidade=0;
    for (const hotel of hoteis) {
        if(hotel.cidade.toLowerCase() == cidade.toLowerCase()){
            console.log("Id: "+hotel.id+"  -/-  Nome: "+hotel.nome+"  -/-  Cidade: "+hotel.cidade+"  -/-  Vagas: "+hotel.disponiveis+"/"+hotel.quartos+"  -/-  Nota: "+(parseFloat(hotel.avaliacao)/parseInt(hotel.avaliacoes)))
        console.log("----------------------------------------------------------------------------------------------------------")
        quantidade++;
    }
    }
    console.log("Foram listados "+quantidade+" hotéis.")
}





funcoes[6]= function(){//ADICIONAR HOTEL
let nome=prompt("Digite o nome do hotel: ")
let cidade=prompt("Digite a cidade em que se encontra o hotel: ")
let quartos=prompt("Digite quantas vagas este hotel tem: ")
console.log("Dados do hotel:\nNome: "+nome+"\nCidade: "+cidade+"\nVagas: "+quartos)
console.log("tem certeza que deseja adicionar este hotel ao sistema?\n1-Sim\n2-Não")
let confirmar=prompt("==>")
if(confirmar==1){
    let achouHotel=0;
for (const hotel of hoteis) {//verificar se este hotel ja não esta cadastrado
        if(hotel.nome.toLowerCase() == nome.toLowerCase()){
            achouHotel=1;
            break;
        }
    }//fim for de verificar se hotrel ja existe
    if(achouHotel==0){//adicionar certinho
        hoteis.push({
            id:idHotel,
            nome:nome,
            cidade:cidade,
            quartos:quartos,
            disponiveis:quartos,
            avaliacao:0,
            avaliacoes:0
        });
        idHotel++;
        console.log("Hotel registrado com sucesso!!")
    }
    else{//nome de hotel ja existente
        console.log("Nome de hotel ja existente, favor tentar novamente mais tarde com outro nome.")

    }




}
else{
    console.log("Cancelando criação do hotel, tenha um bom dia!!")
}
}

funcoes[7]= function(){//AVALIAR HOTEL
let nomeHotel=prompt("Digite o nome do hotel que deseja avaliar: ")
let achouHotel=0;
    for (const hotel of hoteis) {//verificar se tem este hotel
        if(hotel.nome.toLowerCase() == nomeHotel.toLowerCase()){
            let nota = parseFloat(prompt("Digite a nota de 1 a 5 para o hotel: "))
            if(nota<1 || nota>5){
                console.log("Nota inválida, tente novamente mais tarde.")
            }
            else{
                console.log("Nota atualizada com sucesso.")
                console.log("Nota antiga: "+(parseFloat(hotel.avaliacao)/parseInt(hotel.avaliacoes)))
                hotel.avaliacao=parseFloat(hotel.avaliacao)+parseFloat(nota);
                hotel.avaliacoes=parseInt(hotel.avaliacoes)+1;
                console.log("Nota atualizada: "+(parseFloat(hotel.avaliacao)/parseInt(hotel.avaliacoes)))
            }
            achouHotel=1;
            break;
        }
    }//fim for de verificar hotel
    if(achouHotel==0){console.log("Hotel não encontrado, tente novamente mais tarde.")}
}

menu();