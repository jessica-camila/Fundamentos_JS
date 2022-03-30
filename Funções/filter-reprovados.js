const nomes = ["Ana", "Marcos","Maria","Mauro"];
const notas = [7, 4.5, 8, 7.5];

//  Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, 
//e quando ela retorna falso, ou false, o elemento é descartado.
                                // posso substituir aluno por _
const reprovados = nomes.filter( (aluno,indice) => notas[indice] < 5)
console.log(`reprovados: ${reprovados}`)