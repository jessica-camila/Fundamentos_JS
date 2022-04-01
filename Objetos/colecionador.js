// Há duas formas de acessar o valor de propriedade de um objeto no 
// JavaScript e podemos usar qualquer uma delas

const colecionador = {
  nome: "João do Gibi",
  idade:41,
  tipocolecao: ["quadrinhos"],
  contato: "joao@email.com"
  
  adicionarTipo:function(propriedade,tipo){
  
    this[propriedade].push(tipo)
  }
 }
for(i = 0; i < 4; i++) {
  colecionador.adicionarTipo("tipocolecao","HQ"+i)
}
 console.log(colecionador.nome)
 console.log(colecionador["nome"])
 console.log(colecionador)

 // No JavaScript, objetos são classificados também como um array 
 // associativo (map ou dicionário).


