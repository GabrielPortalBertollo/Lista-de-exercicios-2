/*Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.*/

let sales=[];
for (let i = 0; i < 5; i++) {//gera 5 vendas distribuidas entre 3 vendedores e com valores aleatórios
    let name=Math.floor(Math.random()*3);
    let value=Math.floor(Math.random()*10000)+1001;//valores aleatorios entre 1000 e 11000
    switch (name) {
        case 0:
            name="Josh"
            break;
        case 1:
            name="Maria"
            break;
        case 2:
            name="Joana"
            break;
    }
    sales.push({
        name:name,
        value:value
    })
}
let total={};
for (const sale of sales) {
    if(total[sale.name]==undefined){
        total[sale.name]=sale.value;
    }
    else{
        total[sale.name]+=sale.value;
    }
}

console.log("Vendas da semana:")
for (const sale of sales) {
    console.log(sale.name+" vendeu R$"+sale.value)
}

console.log("----------------------")
console.log("Total vendido por trabalhador.")
for (const worker in total) {
    console.log(worker+" vendeu durante a semana R$"+total[worker])
}




