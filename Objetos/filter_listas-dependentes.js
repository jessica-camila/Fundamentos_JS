const cliente = {
    nome: "Andre",
    idade:36,
    cpf: "12543652266",
    email:"andre@email.com",
    fones:["525290888787","93797777297"],
    dependentes : [{
        nome:"sara",
        parentesco:"filha",
        dataNasc:"20/03/2011"
    }]
};

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente)
// retorno do filter é um array
const filhaMaisNova = cliente.dependentes.filter(elemento => elemento.dataNasc==="04/01/2014")

console.log(filhaMaisNova[0].nome)