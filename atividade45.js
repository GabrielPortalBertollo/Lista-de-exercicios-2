/*Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.*/

let strings=[];
for (let i = 0; i < 11; i++) {//for para gerar strings aleatórias
    let randomValue=Math.floor(Math.random()*8);
    switch (randomValue) {
        case 0:
            strings.push("hi")
            break;
        case 1:
            strings.push("bye")
            break;
        case 2:
            strings.push("mouse")
            break;
        case 3:
            strings.push("hello")
            break;
        case 4:
            strings.push("lol")
            break;
        case 5:
            strings.push("gabriel")
            break;
        case 6:
            strings.push("error")
            break;
    
        default:
            strings.push("inter")
            break;
    }
}
console.log("Valores gerados:")
for (const string of strings) {
    console.log(string)
    
}
console.log("----------------------------")
let totalStrings={};

for (const string of strings) {
if(totalStrings[string]==undefined){
    totalStrings[string]=1
}
else{
    totalStrings[string]++;
}    
}
console.log("Resultado:")
for (const word in totalStrings) {
    console.log(word+": "+totalStrings[word])
}