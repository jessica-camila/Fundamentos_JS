//document.querySelector('#telefone');

// ou

// const listaTeclas = document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

// Para selecionar o elemento HTML input do tipo tel podemos utilizar o código document.querySelector(‘input[type=tel]’), 
// porquê com essa linha, o JavaScript vai acessar o documento HTML (representado por document) e procurar pelo elemento 
// input que tenha como atributo [type=tel], os colchetes fazem parte da sintaxe para seleção de atributos de um elemento HTML, 
// funciona tanto para o CSS quanto para o HTML.