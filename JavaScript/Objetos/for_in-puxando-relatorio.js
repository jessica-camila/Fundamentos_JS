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

let relatorio ="";

// variavel info criada se refere a cada chave do objeto
// for ( let info in cliente){
//     relatorio = `${info}` 
//     console.log(relatorio)
// }

console.log("************")
for ( let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    } else{
    relatorio += `
    ${info} --> ${cliente[info]}`
    } 
    // cliente[info] usamos a  notação de [] quando estamos percorrendo o objeto.
}

console.log(relatorio)