const cliente = {
    nome: "Andre",
    idade:36,
    cpf: "12543652266",
    email:"andre@email.com"
}

// *** Notação de ponto para acessar um valor do objeto ***
console.log(cliente.nome)

//console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
// substring( valor entra, valor não entra)

console.log(cliente.cpf.substring(0,3))