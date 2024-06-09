/*Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.*/

let object={
    num1:2,
    num2:3,
    num3:5,
    num4:7
}

let multiply=function(num){
    return num*2;
}
console.log("Objeto original: ")
for (const number in object) {
    console.log(number+": "+object[number])
}



function changeObj(obj,func) {
    let newObj={}
    for (const number in obj) {
       newObj[number]=func(obj[number]);
    }
    return newObj;
}

object=changeObj(object,multiply);
console.log("Objeto alterado: ");
for (const number in object) {
    console.log(number+": "+object[number])
}