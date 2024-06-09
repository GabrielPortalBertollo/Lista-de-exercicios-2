/*Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.*/
let possibilidades=["a","b","c","d"];
let respostas=[];
for (let i = 0; i < 20; i++) {
    let resposta=Math.floor(Math.random()*4);
    respostas[i]=possibilidades[resposta];    
}
let alunos=[];
for (let i = 0; i < 50; i++) {//for para gerar os alunos
    alunos[i]=[]
    for (let u = 0; u < respostas.length; u++) {//for para gerar as respostas dos alunos
        let resposta=Math.floor(Math.random()*4);
    alunos[i][u]=possibilidades[resposta]; 
    }
}
let aprovados=0;
for (let i = 0; i < alunos.length; i++) {//percorrer os alunos
    let acertos=0;
    for (let u = 0; u < alunos[i].length; u++) {//validar as notas dos alunos
        if(respostas[u]==alunos[i][u]){
            acertos++;
        }
    }
    if(acertos>=12){
        console.log("O "+(i+1)+"° aluno esta APROVADO com "+acertos+" acertos na prova.")
        console.log("Respostas: "+alunos[i]);
        aprovados++;
    }
    else{
        console.log("O "+(i+1)+"° aluno esta REPROVADO com apenas "+acertos+" acertos na prova.")
        console.log("Respostas: "+alunos[i]);
    }
    
}
console.log("GABARITO: "+respostas)
console.log("Total de aprovados: "+aprovados)