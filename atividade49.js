/*Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.*/

let transactions=[];

for (let i = 0; i < 6; i++) {//for que vai gerar 6 transações
    let value=Math.floor(Math.random()*9000)+1001;//gerar valores entre 1000 e 10000
    let date=Math.floor(Math.random()*3);
    let category=Math.floor(Math.random()*3);
    switch (date) {
        case 0:
            date="10/05/2024";
            break;
        case 1:
            date="25/07/2023";
            break;
        default:
            date="9/02/2024";
            break;
    }
    switch (category) {
        case 0:
            category="Alimentação";
            break;
        case 1:
            category="Transporte";
            break;
        default:
            category="Medicamento";
            break;
    }
    transactions.push({
            id:i,
            value:value,
            date:date,
            category:category
        });
}//fim for gerar transações

function filterCategory(transactions) {
    let filtered={}
    for (const transaction of transactions) {
        let category=transaction.category;
        if(!filtered[category]){//verificando se existe ou não algo naquela categoria, se não existir vai executar e criar
            filtered[category]={//colocando na posição referente a categoria um vetor que vai receber as transações da categoria e o total que vai ter naquela categoria;
                category:[],
                total:0
            }
        }
        filtered[category].category.push(transaction)
        filtered[category].total+=parseFloat(transaction.value);
    }
    return filtered;
}
console.log("Transações geradas:")
console.log(transactions)
console.log("------------------------------------------------")
console.log("Transações agrupadas por categoria:")
let filtered=filterCategory(transactions);
//console.log(filtered)
for (let category in filtered) {
    console.log(`Categoria: ${category}`);
    for (let transaction of filtered[category].category) {
        console.log(transaction);
    }
    console.log(`Total: ${filtered[category].total}`);
    console.log("------------------------------------------------")
}
