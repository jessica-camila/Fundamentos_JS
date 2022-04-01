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

//const propsClientes = Object.keys(cliente);
// retorna um array com todas as chaves do objeto
//console.log(propsClientes)

function oferecerSeguro(obj){
  const propsClientes = Object.keys(obj);
  if(propsClientes.includes("dependentes"))
  {
    console.log(`Oferta de seguro de vida para ${obj.nome}.`);
  } else
  console.log("${obj.nome} não tem dependentes.")
}
oferecerSeguro(cliente)

// retorna um array com todas os valores do objeto
//console.log(Object.values(cliente))

// retorna um conjunto de arrays com todas as chaves e valores do objeto
//console.log(Object.entries(cliente))