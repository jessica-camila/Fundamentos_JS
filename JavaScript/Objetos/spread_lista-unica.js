const cliente = [
  {
    nome: "Andre",
    cpf: "12543652266",
    dependentes : 
      [{
        nome:"sara",
        parentesco:"filha",
        dataNasc:"20/03/2011"},
      {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"}],
  },
  {
    nome:"Juliana",
    cpf: "93874774838",
    dependentes: 
      [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
      }]
  } 
]
                      // spread operator
const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes];

console.log(listaDependentes)

console.table(listaDependentes)