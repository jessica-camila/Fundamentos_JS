// Obs iniciamos o nome de uma classe com letra maiúscula - Padrão

class Cliente{
  // atributos
  constructor(nome,email,cpf,saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }
  // métodos
  depositar(valor){
    this.saldo +=valor
  }

  exibirSaldo(){
    console.log(this.saldo)
  }
}

const andre = new Cliente("Andre","andre@email.com","73479737293",100)

// andre.exibirSaldo()

// andre.depositar(35)

andre.exibirSaldo()

console.log(andre)