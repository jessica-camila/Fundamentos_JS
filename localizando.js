const alunos = ["joão","juliana","caio","Ana"];

const mediasDosAlunos = [10,7,9,6];

let listaDeNotasEAlunos = [alunos,mediasDosAlunos];

                                // arrow function
                                // (param1, param2, …, paramN) => { statements }
                                // (param1, param2, …, paramN) => expression
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ", sua media é " + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não esta cadastrado"
    }

}

console.log(exibeNomeNota("Ana"))