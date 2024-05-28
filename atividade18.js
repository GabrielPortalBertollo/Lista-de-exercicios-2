/*Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.*/
const prompt= require('prompt-sync')();
let registro={
    nome:null,
    cargo:null,
    salario:null
}
console.log("Registro de funcionário.")
registro.nome=prompt("Digite o nome do funcionário: ")
registro.cargo=prompt("Digite o cargo quel ele ocupará: ")
registro.salario=prompt("Digite o salário que ele terá: ")

console.log("Resumo das informações:")
console.log("Nome: "+registro.nome+"\nCargo: "+registro.cargo+"\nSalário: R$"+parseFloat(registro.salario))




