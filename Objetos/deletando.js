const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago",
    },
    status: "desaparecido"
   }

console.log(objPersonagem)

delete objPersonagem.aliado
console.log(objPersonagem.aliado) //undefined

console.log(objPersonagem)

delete objPersonagem["status"]
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem)

// delete remove do objeto o valor da propriedade, assim como a chave

// {
//   nome: "Gandalf",
//   classe: "mago",
//   nivel: "20",
//  }

// const delProp = delete objPersonagem.aliado
// const delPropInexistente = delete objPersonagem["endereco"]

// console.log(delProp) //true
// console.log(delPropInexistente) //true