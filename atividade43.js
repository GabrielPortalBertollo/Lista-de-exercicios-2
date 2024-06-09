/*Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.*/

function newObject(o1,o2) {
    let object={};
    for (const value in o1) {
        object[value]=o1[value];
    }
    for (const value in o2) {
        object[value]=o2[value];
    }
    return object;
    
}

let obj1={
    value1:1,
    value2:2,
    value3:4
}
let obj2={
    value3:8,
    value4:16,
    value5:32
}

let obj3=newObject(obj1,obj2);
console.log("Objeto resultante:")
for (const dado in obj3) {
    console.log(dado+": "+obj3[dado])
}