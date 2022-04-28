// Exemplo de uso do spread operator, ou sintaxe de espalhamento. 
// Este operador copia as propriedades de objetos para outros, 
// “espalhando” os conteúdos.

const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro"
 }
 
 const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2"
 }

// Vamos agora tentar juntar esses dois objetos em apenas um, 
// que vamos chamar de personagens. Em um primeiro teste, vamos 
// criar um novo objeto literal com { } e passar para este objeto 
// as variáveis de cada personagem:

// const guerreiro = { fichaGuerreiro, equipoGuerreiro }
// console.log(guerreiro)

// O resultado no console não é exatamente o que queremos, pois os objetos 
// ainda estão separados; o nome de cada variável agora é uma chave e o valor 
// da chave é cada um dos objetos.

// Aqui entramos com o spread operator, adicionando a sintaxe de três 
// pontos (reticências) antes do nome de cada objeto literal, com cada 
// objeto separado por vírgula:
const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)