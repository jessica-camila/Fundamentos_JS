// const listaDeSom = document.querySelectorAll('audio')

function tocaSom (idElementoAudio) {
  
  const elemento = document.querySelector(idElementoAudio);

  if (elemento != null && elemento.localName === 'audio') {
      elemento.play();
  }
  else
    console.log('Elemento não encontrado ou seletor invalido');

}
  

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;
   // funções anonimas ... obs se colocar () navegador "bloqueia" audio
  // listaDeTeclas[contador].onclick = tocaSom('#som_tecla_pom');

// while (contador<listaDeTeclas.length) {
  
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   const idAudio = `#som_${instrumento}`; // templete string 
//   // função anonima
//   tecla.onclick = function () {
//     tocaSom(idAudio)
//   }
//   contador = contador + 1;
// }

for (let i=0;i<listaDeTeclas.length;i++) {
  
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  
  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {
    
    console.log(evento.code == 'Space')
    
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');  
    }
  
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');  
  } 

}