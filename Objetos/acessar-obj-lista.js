const cliente = {
    nome: "Andre",
    idade:36,
    cpf: "12543652266",
    email:"andre@email.com"
}

const chaves = ["nome","idade","cpf","email"]

// *** Notação de colchetes para acessar um valor do objeto ***
// console.log(cliente[chaves[0]])

// console.log(cliente["nome"])

chaves.forEach( dado => console.log(cliente[dado]))


