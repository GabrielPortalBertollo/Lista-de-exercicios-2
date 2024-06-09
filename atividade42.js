/*Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.*/

let dados={
    num:5,
    string:"oi",
    vetor:[10,20],
    vetor2:["oi",50]
}
let vetores={};
for (const dado in dados) {
    if(typeof(dados[dado]) == "object"){
        vetores[dado]=dados[dado];
    }
}
console.log("Valores salvos: ")

for (const dado in vetores) {
    console.log(...vetores[dado])
}