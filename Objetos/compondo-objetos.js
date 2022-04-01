const cliente = {
    nome: "Andre",
    idade:36,
    cpf: "12543652266",
    email:"andre@email.com",
    fones:["525290888787","93797777297"]
};

cliente.dependentes = {
    nome:"sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

// alterando dado

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)