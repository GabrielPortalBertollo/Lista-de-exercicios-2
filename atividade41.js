/*Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.*/

let pessoa={
    nome:"Jorge",
    idade: 26
}
console.log("Idade da pessoa cadastrada: "+ pessoa.idade);
console.log("Todos os dados atuais da pessoa:")
for (const dado in pessoa) {
    console.log(dado+": "+pessoa[dado])
}

pessoa.email= "jorge@hotmail.com";
console.log("------------------")
console.log("Dados atualizados com o email:")
for (const dado in pessoa) {
    console.log(dado+": "+pessoa[dado])
}