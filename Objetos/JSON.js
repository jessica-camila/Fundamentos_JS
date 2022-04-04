// JSON é um acrônimo de JavaScript Object Notation ou “notação de objeto 
// JavaScript”. Como o próprio nome já sugere, JSON é um formato que utiliza 
// a sintaxe de objetos e arrays do JavaScript. É muito versátil e se tornou 
// a forma mais comum de estrutura para transferência de dados entre cliente/servidor, 
// e tem sido utilizado mesmo em programas que não utilizam JavaScript. A estrutura 
// também é mais fácil de compreender, comparada com outro formato de transferência de dados.

// À primeira vista, um objeto JSON não parece muito diferente de um objeto 
// literal em JavaScript:

// ***** é uma representação baseada em texto *****()

const editora = {
  "editora": "Casa do Código",
  "catalogo": [
  {
    "id": 50,
    "titulo": "Primeiros Passos com NodeJS",
    "autor": "João Rubens",
    "categoria": "programação",
    "versoes": ["ebook", "impresso"]
  },
  {
    "id": 59,
    "titulo": "ECMAScript 6",
    "autor": "Diego Martins de Pinho",
    "categoria": "programação",
    "versoes": ["ebook"]
  },
  {
  "id": 39,
  "titulo": "Orientação a Objetos",
  "autor": "Thiago Leite",
  "categoria": "programação",
  "versoes": ["ebook", "impresso"]
  }
 ]};

// As diferenças de sintaxe entre JSON e um objeto JavaScript são:

// No JSON, as chaves sempre devem estar entre aspas duplas ” ”, no formato 
// string. Já no objeto JavaScript, as aspas não são obrigatórias;

// O JSON aceita como valores apenas dados primitivos (string, number para 
// números finitos, true, false e null), objetos e arrays. Não é possível 
// declarar funções/métodos;

// Não são permitidas vírgulas após o último conjunto de chave/valor do objeto.

// JSON é um formato criado para transferência de dados, sendo assim é necessário 
// convertê-lo para um objeto JavaScript para que os dados possam ser utilizados 
// em um programa. Para isso, existem dois métodos nativos:

// JSON.parse(): converte JSON para um objeto JavaScript;
// JSON.stringify(): converte um objeto JavaScript para o formato JSON.


//  obs embora a notação seja um subconjunto JavaScript, esses tipos são 
//representados em todas as linguagens de programação comuns, tornando o 
//JSON um bom candidato para transmitir dados entre várias linguagens.