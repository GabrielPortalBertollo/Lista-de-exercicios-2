/*Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.*/


let object={
    num:5,
    string:"hi",
    vetor:[10,20],
    vetor2:["hi",50],
    string2:"bye"
}

let strings={};
for (const data in object) {
    if(typeof(object[data]) == "string"){
        strings[data]=object[data];
    }
}
console.log("Strings salvas: ")

for (const data in strings) {
    console.log(strings[data])
}
