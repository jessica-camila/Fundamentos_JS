// const alunos = ["joão","juliana","caio"];

// const mediasDosAlunos = [10,7,9,6];

// let listaDeNOtasEAlunos = [alunos,mediasDosAlunos];

// console.log(`${listaDeNOtasEAlunos[0][0]} sua media é ${listaDeNOtasEAlunos[1][0]}`)
                        // primeiro indice é da lista de "fora"
                        // segundo indice é da lista "interna"

// ************* Outro Exemplo *********
// O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para 
// acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro 
// colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. 
// podendo ser:
// 0 -> nomes
// 1 -> idades
// 2 -> faculdade
// O segundo colchete será usado para acessar a informação dentro do array escolhido.
// const idades = [30, 35, 28]
// const nomes = ["Ana", "Juliana", "Leonardo"]
// const faculdade = [false, true, true]
                        
// let funcionarios = [nomes,idades,faculdade]

// console.log(funcionarios[1][2])

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayOriginal)

console.log(arrayConcat)