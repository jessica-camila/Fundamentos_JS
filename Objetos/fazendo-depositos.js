
const cliente = {
    nome: "Andre",
    idade:36,
    cpf: "12543652266",
    email:"andre@email.com",
    fones:["525290888787","93797777297"],
    dependentes : [
        {
            nome:"sara",
            parentesco:"filha",
            dataNasc:"20/03/2011"},
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"}
    ],
    saldo: 100,
    depositar: function(valor)
    {
        this.saldo += valor
    }
};

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)