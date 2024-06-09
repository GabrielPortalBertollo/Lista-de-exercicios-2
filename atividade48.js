/*Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.*/

let shop1={
    notebook: 10,
    cellphone:15,
    television:8,
    projector: 4
}

let shop2={
    notebook: 4,
    cellphone:5,
    microwave:3,
    headset: 5
}

function showShops(shop) {
    for (const item in shop) {
        console.log(item+": "+shop[item])
    }
}

function combine(...shops) {
    let total={}
    for (const shop of shops) {
        for (const item in shop) {
            if(total[item]==undefined){
                total[item]=shop[item];
            }
            else{
                total[item]+=shop[item];
            }
        }
    }
    return total;
}
let total=combine(shop1,shop2)

console.log("Itens armazenados na loja 1: ")
showShops(shop1)
console.log("Itens armazenados na loja 2: ")
showShops(shop2)


console.log("Total armazenado das lojas:");
showShops(total)