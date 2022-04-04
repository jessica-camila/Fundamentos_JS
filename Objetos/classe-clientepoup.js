class Cliente{
  constructor(nome,email,cpf,saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }

  depositar(valor){
    this.saldo +=valor
  }

}

class ClientePoupanca extends Cliente{
  constructor(nome,email,cpf,saldo,saldoPoupanca){
    // herdar da classe cliente
    super(nome,email,cpf,saldo)
    this.saldoPoupanca = saldoPoupanca
  }

  depositarPoupanca(valor){
    this.saldoPoupanca += valor
  }

}

const andre = new ClientePoupanca("Andre","andre@email.com","739929217197",100,200)


console.log(andre)

console.log("*** Atualizando ***")
andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre)

